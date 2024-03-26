const { Like, Match } = require("../models/likes.model");

const get_like_by_id_repository = (userID) => {
  return Like.findOne({ email: userID });
};

const create_like_repository = (likeObject) => {
  Like.create(likeObject);
};

const update_like_repository = (likeObject) => {
  likeObject.save();
};

const create_match_repository = (matchObject) => {
  Match.create(matchObject);
};

module.exports = {
  get_like_by_id_repository,
  create_like_repository,
  update_like_repository,
  create_match_repository,
};
