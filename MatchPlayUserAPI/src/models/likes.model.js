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

module.exports = mongoose.model("Like", likeSchema);
