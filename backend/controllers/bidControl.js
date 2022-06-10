const asyncHandler = require("express-async-handler");
const bidData = require("../routes/Data");

// Gets all the bids
// route /api/bids
// access PUBLIC

const getAllBids = asyncHandler(async (req, res) => {
  const bids = bidData;

  res.status(200).send(bids);
});

// Gets specific bids
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

// Gets specific bids
// route /api/posts
// access PUBLIC

const updateAuction = asyncHandler(async (req, res) => {
  const identifier = req.params.id;
  const auction = bidData.find((bid) => bid.id == identifier);

  if (req.params.id === 1) {
    res.status(401).send("error");
  }

  res.status(200).send(bidm);
});

module.exports = {
  getAllBids,
  getBid,
};
