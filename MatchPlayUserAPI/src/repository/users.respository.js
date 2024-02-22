const User = require("../models/users.model");

const getUserByIDRepository = (userID) => {
  return User.findById(userID);
};

const insertUserRepository = (userObject) => {
  User.create(userObject);
};

module.exports = {
  getUserByIDRepository,
  insertUserRepository,
};
