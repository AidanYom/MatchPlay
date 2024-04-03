const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const chatSchema = new Schema({
  senderId: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
  recepientId: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
  message: String,
  timeStamp: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Chat", chatSchema);
