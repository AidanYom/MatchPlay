const express = require('express');

const {
    getUserByID,
} = require("../controllers/user.controller")

const router = express.Router();

router.get("/:id", getUserByID);

module.exports = router;