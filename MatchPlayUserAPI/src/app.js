const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const swaggerUi = require("swagger-ui-express");
const swaggerDocument = require("./swagger.json");

const app = express();
app.use(cors());
app.use(bodyParser.json());

const userRoutes = require("./routes/users.route");

app.get("/", (req, res) => {
  res.status(200).json({ alive: "True" });
});


app.use("/users", userRoutes);

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
