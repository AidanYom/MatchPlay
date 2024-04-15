const User = require("../models/users.model");

/* const create_like_repository = (likeObject) => {
  Like.create(likeObject);
}; */

const update_like_repository = (userObject) => {
  userObject.save();
};

/* const create_match_repository = (matchObject) => {
  Match.create(matchObject);
}; */

module.exports = {
  // create_like_repository,
  update_like_repository,
  // create_match_repository,
};
