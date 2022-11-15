const express = require("express");

const cors = require("cors");
const helmet = require("helmet");

const PORT = process.env.PORT || 4002;

const app = express();

app.use(cors());
app.use(helmet());

app.use(function (err, req, res, next) {
  console.error(err.stack);
  res.status(500).send("Something is broken.");
});

app.use(function (req, res, next) {
  res.status(404).send("Bad Request");
});

app.listen(PORT, function () {
  console.log(`Server is running on: ${PORT}`);
});
