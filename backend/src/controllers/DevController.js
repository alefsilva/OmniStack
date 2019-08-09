const axios = require("axios");
const Dev = require("../models/Dev");

module.exports = {
  async index(req, res) {
    const { user_id } = req.headers;
    console.log('user_id: ', user_id);
    const loggedDev = await Dev.findById(user_id);
    const users  = await Dev.find({
      $and: [
        { _id: { $ne: user_id }}, // filter $ne(not equal) the user_id
        { _id: { $nin: loggedDev.likes }}, // filter to avoid all user that already have like with $nin(not in)
        { _id: { $nin: loggedDev.deslikes }}, // the same filter as above for deslikes
      ]
    });
    return res.json(users);
  },

  async store(req, res) {
    const { username } = req.body;
    const userExist = await Dev.findOne({ user: username });
    if (userExist) return res.json(userExist);

    const response = await axios.get(
      `https://api.github.com/users/${username}`
    );
    const { name, bio, avatar_url: avatar } = response.data;
    const dev = await Dev.create({
      name,
      user: username,
      bio,
      avatar
    });
    return res.json(dev); // the axios return the data inside data object
  }
};
// scope: INDEX, SHOW, STORE, UPDATE, DELETE
