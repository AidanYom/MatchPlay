const express = require("express");

const {
  add_like_controller,
  add_dislike_controller,
  get_like_by_id_controller,
} = require("../controllers/likes.controller");

const router = express.Router();

router.get("/:id1/:id2/like", add_like_controller);
router.get("/:id1/:id2/dislike", add_dislike_controller);

module.exports = router;
