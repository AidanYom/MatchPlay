const {
  get_user_by_id_repository,
  insert_user_repository,
} = require("../repository/users.respository");
const { get_compatible_user_service } = require("../services/users.service");

const get_user_by_id_controller = async (req, res) => {
  try {
    userID = req.params.id;
    const user = await get_user_by_id_repository(userID);

    res.status(200).json(user);
  } catch (error) {
    res.status(500).json(error);
  }
};

const insert_user_controller = async (req, res) => {
  try {
    userObject = req.body;
    await insert_user_repository(userObject);
    res.status(200).json(req.body);
  } catch (error) {
    res.status(500).json(error);
  }
};

const get_compatible_user_controller = async (req, res) => {
  try {
    userID = req.params.id;
    const compatibleUser = await get_compatible_user_service(userID);
    res.status(200).json(compatibleUser);
  } catch (error) {
    res.status(500).json(error);
  }
};

module.exports = {
  get_user_by_id_controller,
  insert_user_controller,
  get_compatible_user_controller,
};
