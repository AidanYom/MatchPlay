const mongoose = require("mongoose");
const request = require("supertest");
const app = require("../app");
const User = require("../models/users.model");
const { compatibility_score } = require("../services/users.service");

require("dotenv").config();

const dummy = {
  name: "0000",
  handicap: 12,
  phoneNumber: "987654321",
  gender: "Female",
  email: "0000@gmail.com",
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

const dummy1 = {
  name: "1111",
  handicap: 12,
  phoneNumber: "987654321",
  gender: "Female",
  email: "1111@gmail.com",
  birthday: "02/19/1986",
  courseDescription: "Purdue",
  selfDescription: "Purdue",
  playingRange: { lower: 2, upper: 15 },
  drinkingSmoking: {
    drinks: true,
    smokes: true,
    neither: false,
    noSmokers: false,
    noDrinkers: false,
  },
  musicPrefs: { must: true, indifferent: false, none: false },
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
describe("Testing Compatibility Function", () => {
  test("Should return score of 7", () => {
    const score = compatibility_score(dummy, dummy1);
    expect(score).toBe(7);
  });
});

describe("Testing Endpoints", () => {
  beforeAll(async () => {
    await mongoose.connect(process.env.JEST_MONGODB_URI);
  });
  afterAll(async () => {
    await mongoose.connection.close();
  });

  test("Testing post user endpoint", async () => {
    const res = await request(app)
      .post("/users")
      .send(dummy)
      .set("Content-Type", "application/json")
      .set("Accept", "application/json");
    expect(res.statusCode).toBe(200);
    await User.deleteOne({ _id: res._body.postId });
  });

  test("should return a user", async () => {
    const user = await User.create(dummy);
    const id = user._id;
    const res = await request(app).get(`/users/${id}`);
    expect(res.statusCode).toBe(200);
    expect(res.body.name).toBe(dummy.name);
    await User.deleteOne({ _id: id });
  });
});
