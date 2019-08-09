const Dev = require("../models/Dev");

module.exports = {
  store(req, res) {
    const { devId} = req.params;
    const { user } = req.headers;
    console.log('param devId: ', devId);
    console.log('headers user: ', user);

    return res.json({ok: true});
  }
};
