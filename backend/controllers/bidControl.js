const asyncHandler = require("express-async-handler");
const Auction = require("../models/AuctionModel");
const Image = require("../models/ImageModel");
const bidData = require("../routes/Data");
var multer = require("multer");
const fs = require("fs");
const { nextTick } = require("process");

// Multer
const storage = multer.diskStorage({
  // destination: (req, file, cb) => {
  //   cb(null, "uploads");
  // },
  destination: "uploads",
  filename: (req, file, cb) => {
    cb(null, file.filename + "-" + Date.now());
  },
});
let upload = multer({ storage: storage }).single("testImage");

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
// CREATES an AUCTION

const createAuction = asyncHandler(async (req, res) => {
  console.log(req.body.image);
  const {
    id,
    title,
    brand,
    year,
    price,
    cost,
    days,
    hours,
    location,
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
    location,
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

const uploadImage = asyncHandler(async (req, res, next) => {
  // var img = fs.readFileSync(req.file.path);
  //   var encode_img = img.toString('base64');
  //   var final_img = {
  //       contentType:req.file.mimetype,
  //       image:new Buffer(encode_img,'base64')
  //   };
  //   imageModel.create(final_img,function(err,result){
  //       if(err){
  //           console.log(err);
  //       }else{
  //           console.log(result.img.Buffer);
  //           console.log("Saved To database");
  //           res.contentType(final_img.contentType);
  //           res.send(final_img.image);
  //       }
  //   })
  console.log("image upload called");
  upload(req, res, (err) => {
    upload(req, res, (err) => {
      if (err) {
        console.log(err);
      } else {
        const newImage = new Image({
          name: req.body.name,
          image: {
            data: req.file.filename,
            contentType: "image/png",
          },
        });
        newImage.save();
        res.send("success");
      }
    });
  });
});

const updateAuction = asyncHandler(async (req, res) => {
  const auction = await Auction.findById(req.params.id);
  if (!auction) {
    console.log("not found");
    return res.status(401).send("not found");
  }

  const updatedAuction = await Auction.findByIdAndUpdate(
    req.params.id,
    req.body,
    {
      new: true,
    }
  );

  res.status(200).send(updatedAuction);
});

module.exports = {
  getAllAuctions,
  getAuction,
  createAuction,
  updateAuction,
  uploadImage,
};
