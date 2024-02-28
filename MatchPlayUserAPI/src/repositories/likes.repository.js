const Like = require("../models/likes.model");

const get_like_by_id_repository = (userID) => {
  return Like.findOne({ email: userID });
};

const create_like_repository = (likeObject) => {
  Like.create(likeObject);
};

const update_like_repository = (likeObject) => {
  likeObject.save();
};

module.exports = {
  get_like_by_id_repository,
  create_like_repository,
  update_like_repository,
};
