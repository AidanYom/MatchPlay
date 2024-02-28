const {
  get_like_by_id_repository,
  update_like_repository,
} = require("../repositories/likes.repository");

const add_like_service = async (user1ID, user2ID) => {
  let user = await get_like_by_id_repository(user1ID);
  user.likes.push(user2ID);
  await update_like_repository(user);
};

const add_dislike_service = async (user1ID, user2ID) => {
  let user = await get_like_by_id_repository(user1ID);
  user.dislikes.push(user2ID);
  await update_like_repository(user);
};

module.exports = { add_like_service, add_dislike_service };
