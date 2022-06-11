const express = require("express");
const router = express.Router();
const {
  updateProfile,
  createGuest,
  getProfile,
} = require("../controllers/userControl");

router.route("/").get(createGuest).post(getProfile);
router.route("/:id").put(updateProfile);
router.route("/login").post(createGuest);

// router.route("/").post(updateGuest);

module.exports = router;
