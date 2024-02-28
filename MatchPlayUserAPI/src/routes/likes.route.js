const express = require("express");

const {
  create_like_controller,
  add_like_controller,
  add_dislike_controller,
} = require("../controllers/likes.controller");

const router = express.Router();

router.post("/", create_like_controller);

router.get("/:id1/:id2/like", add_like_controller);
router.get("/:id1/:id2/dislike", add_dislike_controller);

module.exports = router;
