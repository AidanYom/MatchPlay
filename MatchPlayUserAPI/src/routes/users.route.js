const express = require("express");

const {
  get_user_by_id_controller,
  insert_user_controller,
  get_compatible_user_controller,
} = require("../controllers/users.controller");

const router = express.Router();

router.get("/:id", get_user_by_id_controller);

router.post("/", insert_user_controller);

router.get("/compatible/:id", get_compatible_user_controller);

module.exports = router;
