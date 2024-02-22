const User = require("../models/users.model");

const getUserByID = async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json(error);
  }
};

const insertUser = async (req, res) => {
  try {

  } catch (error) {
    res.status(500).json(error);
  }
};
module.exports = {
  getUserByID,
  insertUser,
};
