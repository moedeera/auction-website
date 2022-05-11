const express = require("express");
const router = express.Router();
const data = require("./Data");

router.get("/", (req, res) => {
  res.send(data);
});

module.exports = router;
