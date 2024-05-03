const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const messageSchema = new Schema(
  {
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
  },
  { collection: "messages" }
);

module.exports = mongoose.model("Message", messageSchema);
