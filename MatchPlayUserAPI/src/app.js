const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
const jwt = require("jsonwebtoken");

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(passport.initialize());

const usersRoute = require("./routes/users.route");
const likesRoute = require("./routes/likes.route");

app.get("/", (req, res) => {
  res.status(200).json({ alive: "True" });
});

app.use("/users", usersRoute);
app.use("/likes", likesRoute);

module.exports = app;
