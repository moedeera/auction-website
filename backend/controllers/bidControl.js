const asyncHandler = require("express-async-handler");
const Auction = require("../models/AuctionModel");
const bidData = require("../routes/Data");

// Gets all the bids
// route /api/bids
// access PUBLIC

const getAllAuctions = asyncHandler(async (req, res) => {
  const bids = bidData;

  res.status(200).send(bids);
});

// Gets specific bids
// route /api/posts
// access PUBLIC

const getAuction = asyncHandler(async (req, res) => {
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

const createAuction = asyncHandler(async (req, res) => {
  const {
    id,
    title,
    brand,
    year,
    price,
    cost,
    days,
    hours,
    pic,
    pic2,
    pic3,
    pic4,
    pic5,
    pic6,
    km,
    hrs,
    color,
    type,
    classic,
    sold,
    promoted,
    currentHighestBidder,
  } = req.body;

  const newAuction = await Auction.create({
    id,
    title,
    brand,
    year,
    price,
    cost,
    days,
    hours,
    pic,
    pic2,
    pic3,
    pic4,
    pic5,
    pic6,
    km,
    hrs,
    color,
    type,
    classic,
    sold,
    promoted,
    currentHighestBidder,
  });

  res.status(200).send(newAuction);
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
  getAllAuctions,
  getAuction,
  createAuction,
};
