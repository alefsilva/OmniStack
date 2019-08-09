const express = require("express");
const DevController = require("./controllers/DevController");
const LikeController = require("./controllers/LikeController");
const DeslikeController = require("./controllers/DeslikeController");

const routes = express.Router();

routes.get("/", (req, res) => {
  return res.json({ message: `Hello ${req.query.name}` });
});

// routes.post("/devs", (req, res) => {
//   console.log("body:", req.body); // by default it will return 'body: undefined' because the express don't recognize the json format automatically
//   return res.json(Object.assign(req.body, { ok: true }));
// });
routes.post("/devs", DevController.store);
routes.post("/devs/:devId/likes", LikeController.store);
routes.post("/devs/:devId/deslikes", DeslikeController.store);

module.exports = routes;
