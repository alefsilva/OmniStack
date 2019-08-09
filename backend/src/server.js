const express = require('express');
const routes = require('./routes'); // when you are importing a file inside your project, you need to use ./ and specify the full path to be recognized
const server = express();

server.use(express.json());
server.use(routes); // you use .use, when you want to apply some config from another file

server.listen(7777);
