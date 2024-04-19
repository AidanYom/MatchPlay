const {
  get_like_by_id_repository,
} = require("../repositories/likes.repository");

const {
  add_like_service,
  add_dislike_service,
  check_like_service,
} = require("../services/likes.service");

const get_like_by_id_controller = async (req, res) => {
  try {
    userID = req.params.id;
    const user = await get_like_by_id_repository(userID);
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json(error);
  }
};

/* const create_like_controller = async (req, res) => {
  try {
    likeObject = req.body;
    await create_like_repository(likeObject);
    res.status(200).json(req.body);
  } catch (error) {
    res.status(500).json(error);
  }
}; */

const add_like_controller = async (req, res) => {
  try {
    user1ID = req.params.id1;
    user2ID = req.params.id2;
    add_like_service(user1ID, user2ID);
    console.log("Success adding like");
    //check_like_service(user1ID, user2ID);
    res.status(200).json(compatibleUser);
  } catch (error) {
    res.status(500).json(error);
  }
};

const add_dislike_controller = async (req, res) => {
  try {
    user1ID = req.params.id1;
    user2ID = req.params.id2;
    add_dislike_service(user1ID, user2ID);
    res.status(200).json(compatibleUser);
  } catch (error) {
    res.status(500).json(error);
  }
};

module.exports = {
  get_like_by_id_controller,
  add_like_controller,
  add_dislike_controller,
};
