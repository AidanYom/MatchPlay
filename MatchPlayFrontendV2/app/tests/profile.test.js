import {
  putUpdateUserProfile,
  updateUserProfileDrinkingSmoking,
  updateUserProfilePlayingRangeMax,
  updateUserProfilePlayingRangeMin,
  updateUserProfileStage,
  userProfileSelector,
} from "../slices/userProfile";

const dummy = {
  name: "0000",
  handicap: 12,
  phoneNumber: "987654321",
  gender: "Female",
  email: "maryjane@gmail.com",
  birthday: "02/19/1986",
  courseDescription: "Purdue",
  selfDescription: "Purdue",
  playingRange: { lower: 5, upper: 25 },
  drinkingSmoking: {
    drinks: false,
    smokes: false,
    neither: true,
    noSmokers: false,
    noDrinkers: false,
  },
  musicPrefs: { must: false, indifferent: true, none: false },
  timePrefs: {
    weekendDaytime: true,
    weekendTwilight: true,
    weekdayDaytime: true,
    weekdayTwilight: true,
  },
  likes: [],
  dislikes: [],
  matches: [],
  stage: "4",
};

describe("Testing Profile Creation and Updates", () => {
  test("Testing Profile Creation", async () => {
    
  })
})