const asyncHandler = require("express-async-handler");
const Auction = require("../models/AuctionModel");
const Profile = require("../models/ProfileModel");
const Image = require("../models/ImageModel");
const bidData = require("../routes/Data");

var multer = require("multer");
const fs = require("fs");
var bodyParser = require("body-parser");

// Multer
const storage = multer.diskStorage({
  // destination: (req, file, cb) => {
  //   cb(null, "uploads");
  // },
  destination: (req, file, callback) => {
    callback(null, "./frontend/auction-site/public/uploads");
  },
  filename: (req, file, cb) => {
    cb(null, file.filename + "-" + Date.now());
  },
});
let upload = multer({ storage: storage });
// .single("testImage");

// Gets all the bids
// route /api/bids
// access PUBLIC

const getAllAuctions = asyncHandler(async (req, res) => {
  const bids = bidData;

  res.status(200).send(bids);
});

const createMultipleAuctions = asyncHandler(async (req, res) => {
  console.log(bidData);
  Auction.insertMany(bidData);
  res.json(bidData);
});

// Get All the Bids saved on the DataBase
// route api/bids
//access PUBLIC
const getDataBaseAuctions = asyncHandler(async (req, res) => {
  const bids = await Auction.find();

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
    seller: req.user._id,
  });

  // Updates the profile of the seller
  const updatedProfile = await Profile.findByIdAndUpdate(
    { _id: req.user._id },

    {
      $addToSet: {
        sells: newAuction._id,
      },
    },

    {
      new: true,
    }
  );
  const updatedInfo = {
    newAuction,
    updatedProfile,
  };
  res.status(200).send(updatedInfo);
});

// Make a BID
// route /api/posts
// access PRIVATE

const bidOnAuction = asyncHandler(async (req, res) => {
  console.log(req.params.id, req.user);

  const auction = await Auction.findById(req.params.id);
  const profile = await Profile.findById(req.user._id);

  if (!auction || !profile) {
    return res.status(400).send("auction not found");
  }

  const updatedAuction = await Auction.findByIdAndUpdate(
    req.params.id,
    {
      cost: req.body.cost,
      price: req.body.price,
      currentHighestBidder: req.user._id,
    },
    {
      new: true,
    }
  );

  const updatedProfile = await Profile.findByIdAndUpdate(
    { _id: req.user._id },

    {
      $addToSet: {
        bids: req.params.id,
      },
    },

    {
      new: true,
    }
  );

  const updatedInfo = {
    updatedAuction,
    updatedProfile,
  };

  res.status(200).json(updatedInfo);
});

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
  // console.log("image upload called");
  // upload(req, res, (err) => {
  //   upload(req, res, (err) => {
  //     if (err) {
  //       console.log(err);
  //     } else {
  //       const newImage = new Image({
  //         name: req.body.name,
  //         image: {
  //           data: req.file.filename,
  //           contentType: "image/png",
  //         },
  //       });
  //       newImage.save();
  //       res.send("success");
  //     }
  //   });
  // });
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

//Delete AUCTION
const deleteAuction = asyncHandler(async (req, res) => {
  const auction = await Auction.findById(req.params.id);

  if (!auction) {
    res.status(400);
    return res.status(401).send("auction not found");
  }

  // Check for user
  if (!req.user) {
    res.status(401);
    return res.status(401).send("user not found");
  }

  // Make sure the logged in user matches the goal user
  if (auction.user.toString() !== req.user.id) {
    res.status(401);
    return res.status(401).send("not found");
  }

  await auction.remove();

  res.status(200).json({ id: req.params.id });
});

module.exports = {
  getAllAuctions,
  getAuction,
  createAuction,
  deleteAuction,
  updateAuction,
  uploadImage,
  bidOnAuction,
  getDataBaseAuctions,
  createMultipleAuctions,
};
