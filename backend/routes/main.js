const express = require("express");
const router = express.Router();
const data = require("./Data");

router.get("/", (req, res) => {
  console.log(data);
  res.send(data);
});

module.exports = router;
