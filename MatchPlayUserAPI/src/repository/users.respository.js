const User = require("../models/users.model");

const get_user_by_id_repository = (userID) => {
  return User.findById(userID);
};

const insert_user_repository = (userObject) => {
  User.create(userObject);
};

const update_user_by_id_repository = (id, payload) => {
  User.findByIdAndUpdate(id, payload)
    .then(() => {
      console.log("User updated successfully");
    })
    .catch((error) => {
      console.error(error);
    });
};

const get_random_user = () => {
  return User.aggregate().sample(1);
};

module.exports = {
  get_user_by_id_repository,
  insert_user_repository,
  get_random_user,
  update_user_by_id_repository,
};
