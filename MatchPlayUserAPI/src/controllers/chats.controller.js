const { get_matches_by_id_service } = require("../services/chats.service");
const {} = require("../repositories/chats.repository");
const Message = require("../models/chats.model");

const get_matches_by_id_controller = async (req, res) => {
  try {
    userID = req.params.id;
    const matches = await get_matches_by_id_service(userID);

    res.status(200).json(matches);
  } catch (error) {
    res.status(500).json(error);
  }
};

const send_message_controller = async (req, res) => {
  try {
    const { senderId, recepientId, messageText } = req.body;

    const newMessage = new Message({
      senderId,
      recepientId,
      message: messageText,
      timeStamp: new Date(),
    });

    await newMessage.save();
    res.status(200).json({ message: "Message sent successfully" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

const fetch_messages_controller = async (req, res) => {
  try {
    const { senderId, recepientId } = req.params;

    const messages = await Message.find({
      $or: [
        { senderId: senderId, recepientId: recepientId },
        { senderId: recepientId, recepientId: senderId },
      ],
    }).populate("senderId", "_id name");

    res.json(messages);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

module.exports = {
  get_matches_by_id_controller,
  send_message_controller,
  fetch_messages_controller,
};
