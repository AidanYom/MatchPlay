const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const swaggerUi = require("swagger-ui-express");
const swaggerDocument = require("./swagger.json");
const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
const jwt = require("jsonwebtoken");

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json({ limit: '50mb' }));
app.use(passport.initialize());

const usersRoute = require("./routes/users.route");
const likesRoute = require("./routes/likes.route");
const chatsRoute = require("./routes/chats.route");

app.get("/", (req, res) => {
  res.status(200).json({ alive: "True" });
});

app.use("/users", usersRoute);
app.use("/likes", likesRoute);
app.use("/chats", chatsRoute);

var options = {};

app.use(
  "/api-docs",
  function (req, res, next) {
    swaggerDocument.host = req.get("host");
    req.swaggerDoc = swaggerDocument;
    next();
  },
  swaggerUi.serveFiles(swaggerDocument, options),
  swaggerUi.setup()
);

module.exports = app;
