const asyncHandler = require("express-async-handler");
const bidData = require("../routes/Data");

// desc
// route /api/posts
// access PUBLIC

const getAllBids = asyncHandler(async (req, res) => {
  const bids = bidData;

  res.status(200).send(bids);
});

// desc
// route /api/posts
// access PUBLIC

const getBid = asyncHandler(async (req, res) => {
  const identifier = req.params.id;
  const bidm = bidData.find((bid) => bid.id == identifier);

  if (req.params.id === 1) {
    res.status(401).send("error");
  }

  res.status(200).send(bidm);
});

module.exports = {
  getAllBids,
  getBid,
};
