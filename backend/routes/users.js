const express = require("express");
const router = express.Router();
const {
  getGuest,
  updateGuest,
  createGuest,
  getUser,
} = require("../controllers/userControl");

router.route("/").get(createGuest).post(getUser);
router.route("/login").post(createGuest);

// router.route("/").post(updateGuest);

module.exports = router;
