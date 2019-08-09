const Dev = require("../models/Dev");

module.exports = {
  store(req, res) {
    console.log('param devId: ', req.params.devId);
    return res.json({ok: true});
  }
};
