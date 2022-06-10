const express = require("express");
const router = express.Router();
const {
  getGuest,
  updateGuest,
  createGuest,
} = require("../controllers/userControl");

router.route("/").get(getGuest).post(updateGuest);

// router.route("/").post(updateGuest);

module.exports = router;
