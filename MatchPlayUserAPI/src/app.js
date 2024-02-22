const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();
app.use(cors());
app.use(bodyParser.json());

const userRoutes = require("./routes/users.route");

app.get("/", (req, res) => {
  res.status(200).json({ alive: "True" });
});

app.use("/users", userRoutes);

module.exports = app;
