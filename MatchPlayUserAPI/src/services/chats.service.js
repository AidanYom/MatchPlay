const {} = require("../repositories/chats.repository");

const {
  get_user_by_id_repository,
} = require("../repositories/users.repository");

const get_matches_by_id_service = async (userID) => {
  const user = await get_user_by_id_repository(userID);
  const match_ids = user.matches;
  let matches = [];
  for (const match_id of match_ids) {
    const user_match = await get_user_by_id_repository(match_id);
    matches.push(user_match);
  }

  return matches;
};

module.exports = { get_matches_by_id_service };
