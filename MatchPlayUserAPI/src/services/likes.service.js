const {
  get_like_by_id_repository,
  update_like_repository,
} = require("../repositories/likes.repository");

const add_like_service = async (user1ID, user2ID) => {
  let user1 = await get_like_by_id_repository(user1ID);
  user1.likes.push(user2ID);
  await update_like_repository(user1);
};

const add_dislike_service = async (user1ID, user2ID) => {
  let user1 = await get_like_by_id_repository(user1ID);
  user1.dislikes.push(user2ID);
  await update_like_repository(user1);
};

const check_like_service = async (user1ID, user2ID) => {
  let user2 = await get_like_by_id_repository(user2ID);
  if (user2.likes.indexOf(user1ID) > -1) {
    // Match Identified
    let user1 = await get_like_by_id_repository(user1ID);
    user1.likes.pop(user2ID);
    user2.likes.pop(user1ID);
    user1.matches.push(user2ID);
    user2.matches.push(user1ID);
    await update_like_repository(user1);
    await update_like_repository(user2);
  }
};

module.exports = { add_like_service, add_dislike_service, check_like_service };
