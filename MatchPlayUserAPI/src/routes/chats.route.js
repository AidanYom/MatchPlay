const express = require("express");

const {
  get_matches_by_id_controller,
  send_message_controller,
  fetch_messages_controller,
} = require("../controllers/chats.controller");

const router = express.Router();

router.get("/matches/:id", get_matches_by_id_controller);
router.get("/messages/:senderId/:recepientId", fetch_messages_controller);

router.post("/messages", send_message_controller);

module.exports = router;
