const express = require("express");
const router = express.Router();
const { getGuest, updateGuest } = require("../controllers/userControl");

router.route("/").get(getGuest);
router.route("/").post(updateGuest);

module.exports = router;
