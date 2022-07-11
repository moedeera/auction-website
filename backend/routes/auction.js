const express = require("express");
const Image = require("../models/ImageModel");
const Auction = require("../models/AuctionModel");
const router = express.Router();
const {
  getAllAuctions,
  createAuction,
  deleteAuction,
  updateAuction,
  getAuction,
  bidOnAuction,
  getDataBaseAuctions,
  createMultipleAuctions,
  sendMessage,
  fetchMessages,
  uploadImage,
} = require("../controllers/bidControl");
const { protect } = require("../middleWare/authMiddleware");
router.route("/").get(getAllAuctions).post(protect, createAuction);
router.route("/all").get(getDataBaseAuctions).post(createMultipleAuctions);
router.route("/message").post(sendMessage).get(fetchMessages);
router
  .route("/:id")
  .get(getAuction)
  .put(updateAuction)
  .delete(protect, deleteAuction)
  .post(protect, bidOnAuction);
// router.route("/message").post(sendMessage);

// router.route("/image").post(uploadImage);

module.exports = router;
