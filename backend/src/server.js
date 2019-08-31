const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const routes = require("./routes"); // when you are importing a file inside your project, you need to use ./ and specify the full path to be recognized
const app = express();
// we'll extract the http server from inside the express to join with a ws server or websocket server
const server = require("http").Server(app);
const io = require("socket.io")(server);

io.on("connection", socket => {
  // each new connection has a unique id that is socket.id
  console.log("New connection", socket.id);

  socket.on('hello', request => {
    console.log('request: ', request);
  });
});

mongoose.connect(
  "mongodb+srv://omnistack:omnistack@cluster0-akxwi.mongodb.net/omnistack8?retryWrites=true&w=majority",
  {
    useNewUrlParser: true
  }
);

app.use(cors());
app.use(express.json());
app.use(routes); // you use .use, when you want to apply some config from another file

server.listen(7777);
