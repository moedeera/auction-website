const express = require("express");
const router = express.Router();
const { protect } = require("../middleWare/authMiddleware");
const {
  updateProfile,
  createGuest,
  getProfile,
} = require("../controllers/userControl");

router.route("/").get(createGuest);
router.post("/", protect, getProfile);
router.route("/:id").put(updateProfile);
router.route("/login").post(createGuest);

// router.route("/").post(updateGuest);

module.exports = router;
