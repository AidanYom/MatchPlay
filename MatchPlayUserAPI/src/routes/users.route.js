const express = require("express");

const {
  getUserByIDController,
  insertUserController,
} = require("../controllers/users.controller");

const router = express.Router();

router.get("/:id", getUserByIDController);

router.post("/", insertUserController);

module.exports = router;
