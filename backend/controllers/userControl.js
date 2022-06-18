const asyncHandler = require("express-async-handler");
const jwt = require("jsonwebtoken");
const User = require("../models/UserModel");
const Profile = require("../models/ProfileModel");
const { protect } = require("../middleWare/authMiddleware");

// desc
// route /api/guest
// access PUBLIC
const createGuest = asyncHandler(async (req, res) => {
  const alphabet = "abcdefghijklmnopqrstuvwxyz";
  const letter = alphabet[Math.floor(Math.random() * alphabet.length)];

  let guestId = Math.floor(Math.random() * 9000 + 1000);
  let guestName = `guest-${guestId}`;
  let guestProfile = {
    id: `${letter}-${guestId}`,
    name: "John Smith",
    username: guestName,
    email: `user-${letter}${guestId}@gmail.com`,
    location: "New York",
    card: true,
    verified: true,
    picture:
      "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    bids: [],
    sells: [],
    currentBid: null,
    status: "public",
  };

  let guestUser = {
    name: guestName,
    email: `${guestName}@gmail.com`,
    password: "123",
  };

  const userProfile = await Profile.create({
    user: `${letter}-${guestId}`,
    username: guestName,
    email: `user-${letter}${guestId}@gmail.com`,
    location: "New York",
    card: true,
    verified: true,
    picture:
      "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    bids: [],
    sells: [],

    status: "public",
  });

  const guestInfo = {
    guest: guestProfile,
    token: generateToken(userProfile._id),
  };
  console.log("guest-create request made");
  res.status(200).send(guestInfo);
});

// desc
// route /api/user
// access PRIVATE
const getProfile = asyncHandler(async (req, res) => {
  // const token = req.body.token;
  // console.log("get user info request made", req.body.id);

  // // if (token.guest===false){}
  // const {
  //   name,
  //   user,
  //   email,
  //   username,
  //   location,
  //   card,
  //   verified,
  //   picture,
  //   bids,
  //   sells,
  //   currentBid,
  //   status,
  // } = await Profile.findById(req.body.token);
  res.status(200).json(req.user);
});
// desc
// route /api/login
// access PUBLIC
// desc
// route /api/guest
// access PUBLIC
const updateProfile = asyncHandler(async (req, res) => {
  const profile = await Profile.findById(req.params.id);
  if (!profile) {
    console.log("not found");
    return res.status(401).send("not found");
  }

  const updatedProfile = await Profile.findByIdAndUpdate(
    req.params.id,
    req.body,
    {
      new: true,
    }
  );

  res.status(200).send(updatedProfile);
});

const LoginUser = asyncHandler(async (req, res) => {
  console.log("login user request made");

  res.status(200).send(guest);
});

//Generate JWT
const generateToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: "30d",
  });
};

module.exports = {
  createGuest,
  getProfile,
  updateProfile,
};
