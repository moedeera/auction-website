const express = require("express");
const {
  getAllAuctions,
  getAuction,
  createAuction,
  updateAuction,
  uploadImage,
} = require("../controllers/bidControl");
const router = express.Router();

router.route("/").get(getAllAuctions).post(createAuction);
router.route("/:id").get(getAuction).put(updateAuction);
router.route("/image").post(uploadImage);

module.exports = router;
