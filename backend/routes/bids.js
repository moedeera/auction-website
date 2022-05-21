const express = require("express");
const { getAllBids, getBid } = require("../controllers/bidControl");
const router = express.Router();

router.route("/").get(getAllBids);
router.route("/:id").get(getBid);

module.exports = router;
