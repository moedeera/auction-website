const express = require("express");
const Image = require("../models/ImageModel");
const Auction = require("../models/AuctionModel");
const router = express.Router();
const {
  getAllAuctions,
  createAuction,
  updateAuction,
  getAuction,
} = require("../controllers/bidControl");
const { protect } = require("../middleWare/authMiddleware");
router.route("/").get(getAllAuctions).post(protect, createAuction);
router.route("/:id").get(getAuction).put(updateAuction);
// router.route("/image").post(uploadImage);

module.exports = router;
