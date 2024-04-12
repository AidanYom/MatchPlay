const {} = require("../repositories/chats.repository");

const {
  get_user_by_id_repository,
} = require("../repositories/users.repository");

const get_matches_by_id_service = async (userID) => {
  const user = await get_user_by_id_repository(userID);
  const matches = user.matches;

  return matches;
};

module.exports = { get_matches_by_id_service };
