const mongoose = require("mongoose");
const request = require("supertest");
const app = require("../app");

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
      "/users/"
    );
    expect(res.statusCode).toBe(200);
    expect(res.body.name).toBe("John Doe");
  });
});