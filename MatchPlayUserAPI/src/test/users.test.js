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
    const res = await request(app).get(
      "/users/65c3f8013231e781fafb9ada"
    );
    expect(res.statusCode).toBe(200);
    expect(res.body.name).toBe("John Doe");
    expect(res.body.age).toBe(22);
    expect(res.body.handicap).toBe(10);
  });
});