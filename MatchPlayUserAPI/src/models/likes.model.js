const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const likeSchema = new Schema(
  {
    email: {
      type: String,
      required: true,
    },
    likes: {
      type: Array,
      required: true,
    },
    dislikes: {
      type: Array,
      required: true,
    },
  },
  { collection: "likes" }
);

const matchSchema = new Schema(
  {
    user1ID: {
      type: String,
      required: true,
    },
    user2ID: {
      type: String,
      required: true,
    },
  },
  { collection: "matches" }
);

const Like = mongoose.model("Like", likeSchema);
const Match = mongoose.model("Match", matchSchema);

module.exports = { Like, Match };
