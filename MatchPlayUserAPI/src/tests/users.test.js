const mongoose = require("mongoose");
const request = require("supertest");
const app = require("../app");

require("dotenv").config();

beforeEach(async () => {
  await mongoose.connect(process.env.MONGODB_URI);
});

afterEach(async () => {
  await mongoose.connection.close();
});

// Test getUserByID endpoint
describe("GET /users/:id", () => {
  it("should return a user", async () => {
    const res = await request(app).get("/users/660f11e2b13eaea0ac834367");
    expect(res.statusCode).toBe(200);
    expect(res.body.name).toBe("John Doe");
    expect(res.body.birthday).toBe("02/02/2002");
    expect(res.body.handicap).toBe(10);
  });
});
