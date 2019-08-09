const { Schema, model } = require("mongoose");
const DevSchema = new Schema(
  {
    name: {
      type: String,
      required: true
    },
    user: {
      type: String,
      required: true
    },
    bio: String, // with is not required, you can pass the type directly without need a {}
    avatar: {
      type: String,
      required: true
    }
  },
  {
    timestamps: true // It'll create automatically a column 'createAt' and 'updatedAt' for each register
  }
); // database structure

module.exports = model("Dev", DevSchema);
