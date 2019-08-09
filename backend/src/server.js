const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const routes = require('./routes'); // when you are importing a file inside your project, you need to use ./ and specify the full path to be recognized
const server = express();

mongoose.connect('mongodb+srv://omnistack:omnistack@cluster0-akxwi.mongodb.net/omnistack8?retryWrites=true&w=majority', {
    useNewUrlParser: true
});

server.use(cors());
server.use(express.json());
server.use(routes); // you use .use, when you want to apply some config from another file

server.listen(7777);
