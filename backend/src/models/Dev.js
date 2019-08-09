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
    },
    likes: [
      {
        type: Schema.Types.ObjectId, // is the format of the id of MongDB like the "_id": "5d4d7f415714080a5c0d2e09",
        ref: "Dev" // it's like a relation
      }
    ], // [] symbolize a vetor to reference several Devs
    deslikes: [
      {
        type: Schema.Types.ObjectId,
        ref: "Dev"
      }
    ]
  },
  {
    timestamps: true // It'll create automatically a column 'createAt' and 'updatedAt' for each register
  }
); // database structure

module.exports = model("Dev", DevSchema);
