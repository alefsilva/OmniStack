const express = require("express");
const routes = express.Router();

routes.get("/", (req, res) => {
  return res.json({ message: `Hello ${req.query.name}` });
});

routes.post("/devs", (req, res) => {
    console.log('body:', req.body); // by default it will return 'body: undefined' because the express don't recognize the json format automatically
    return res.json({ oks: true });
});

module.exports = routes;
