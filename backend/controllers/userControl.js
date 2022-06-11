const asyncHandler = require("express-async-handler");
const jwt = require("jsonwebtoken");
const User = require("../models/UserModel");
const Profile = require("../models/ProfileModel");

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
    token: `${letter}-${guestId}`,
  };
  console.log("guest-create request made");
  res.status(200).send(guestInfo);
});

// desc
// route /api/guest
// access PUBLIC
const getGuest = asyncHandler(async (req, res) => {
  console.log("get guest request made");

  res.status(200).send(guest);
});

// desc
// route /api/user
// access PRIVATE
const getUser = asyncHandler(async (req, res) => {
  const token = req.body.token;
  console.log("get user info request made", req.body.id);
  if (!token) {
    console.log("access denied");
    res.status(400).send("no token");
    return;
  }

  // if (token.guest===false){}
  const {
    name,
    user,
    email,
    username,
    location,
    card,
    verified,
    picture,
    bids,
    sells,
    currentBid,
    status,
  } = await Profile.findById(req.body.id);
  res.status(200).json({
    username,
    location,
    email,
    verified,
    picture,
    bids,
    sells,
    currentBid,
    status,
  });
});
// desc
// route /api/login
// access PUBLIC
const LoginUser = asyncHandler(async (req, res) => {
  console.log("login user request made");

  res.status(200).send(guest);
});

// desc
// route /api/guest
// access PUBLIC
const updateGuest = asyncHandler(async (req, res) => {
  const updatedUser = req.body.user;
  guest = updatedUser;
  if (!guest) {
    res.send("please enter data");
  }

  res.status(200).send(guest);
});

//Generate JWT
const generateToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: "30d",
  });
};

module.exports = {
  getGuest,
  updateGuest,
  createGuest,
  getUser,
};
