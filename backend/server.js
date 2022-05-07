const path = require("path");
const express = require("express");

const dotenv = require("dotenv").config();
const port = process.env.PORT || 1660;
const app = express();

app.use("/main", require("./routes/main"));

app.listen(port, () => {
  console.log("port", port);
});
