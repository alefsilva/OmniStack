const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const routes = require('./routes'); // when you are importing a file inside your project, you need to use ./ and specify the full path to be recognized
const app = express();
// we'll extract the http server from inside the express to join with a ws server or websocket server
const server = require('http').Server(app);
const io = require('socket.io')(server);

/* 
The better way is using database key/value such as redis or the mongoDB to store which user id is which socket id. But we'll store in the node memory.

So, in one deploy application it's not recommended because one application must have a server totally stateless.

# stateless server
"State is what networking people call memory. One of the important design principles in the Internet has always been to minimise the number of places that need to keep track of who is doing what.

In the case of stateless information servers this means that they do not keep track of which clients are accessing them. In other words, between one access and the next, the server and protocol are constructed in such a way that they do not care who, why, how, when or where the next access comes from.

This is essential to the reliability of the server, and to making such systems work in very large scale networks such as the Internet with potentially huge numbers of clients: if the server did depend on a client, then any client failure, or network failure would leave the server in the lurch, possibly not able to continue, or else serving other clients with reduced resources.

Another use of the term stateless is to describe whether or not the server keeps note of the actual data from each access by a client (irrespective of whether it notes who the client was). This is called server caching.

Server Caching is a way of improving the response time of a server. Usually, servers keep data on disk. If they keep a copy of all the most frequently or most recently accessed data in memory, they may be able to respond to new (or repeating) clients more quickly." - https://www.edureka.co/community/11654/what-are-stateless-servers
*/

const connectedUsers = {
  // 'user_id': 'socket_id'
};

io.on('connection', socket => {
  // each new connection has a unique id that is socket.id
  console.log('New connection', socket.id);

  const { user_id } = socket.handshake.query;
  console.log('user_id: ', user_id);
  console.log('socket.id: ', socket.id);
  connectedUsers[user_id] = socket.id;

  socket.on('hello', request => {
    console.log('front request: ', request);
  });

  setTimeout(() => {
    socket.emit(
      'world',
      {
        message: 'OmniStack'
      },
      5000
    );
  }, 5000);
});

mongoose.connect(
  'mongodb+srv://omnistack:omnistack@cluster0-akxwi.mongodb.net/omnistack8?retryWrites=true&w=majority',
  {
    useNewUrlParser: true
  }
);

app.use(cors());
app.use(express.json());
app.use(routes); // you use .use, when you want to apply some config from another file

server.listen(7777);
