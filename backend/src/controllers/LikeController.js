const Dev = require("../models/Dev");

module.exports = {
  async store(req, res) {
    const { user_id } = req.headers;
    const { devId } = req.params;
    const loggedDev = await Dev.findById(user_id);
    const targetDev = await Dev.findById(devId); // dev that is receiving a like
    console.log("param devId: ", devId);
    console.log("headers user_id: ", user_id);

    if (!targetDev) return res.status(400).json({ error: "Dev not exists" });

    if (targetDev.likes.includes(loggedDev._id)) {
      console.log("DEU MATCH");
    }

    loggedDev.likes.push(targetDev._id); //add
    await loggedDev.save(); // and save on database

    return res.json(loggedDev);
  }
};
