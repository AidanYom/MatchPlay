const {
  getUserByIDRepository,
  insertUserRepository,
} = require("../repository/users.respository");
const {} = require("../services/users.service");

const getUserByIDController = async (req, res) => {
  try {
    userID = req.params.id;
    const user = await getUserByIDRepository(userID);
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json(error);
  }
};

const insertUserController = async (req, res) => {
  try {
    userObject = req.body;
    await insertUserRepository(userObject);
    res.status(200).json(req.body);
  } catch (error) {
    res.status(500).json(error);
  }
};
module.exports = {
  getUserByIDController,
  insertUserController,
};
