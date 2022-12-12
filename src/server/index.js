require("dotenv").config();
require("ts-node/register");

const express = require("express");
const cors = require("cors");
const helmet = require("helmet");

const ratingRouter = require("./routes/ratings-route");
const mobilesRouter = require("./routes/mobiles-route");
const app = express();

const PORT = process.env.PORT || 4002;

app.use(cors());
app.use(helmet());
app.use(express.json());

app.use("/api", ratingRouter);
app.use("/api", mobilesRouter);

app.use(function (err, req, res, next) {
  res.status(500).send("Something is broken.");
});

app.use(function (req, res, next) {
  res.status(404).send("Bad Request");
});

app.listen(PORT, function () {
  console.log(`Server is running on: ${PORT}`);
});
