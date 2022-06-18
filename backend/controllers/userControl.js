const asyncHandler = require("express-async-handler");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User = require("../models/UserModel");
const Profile = require("../models/ProfileModel");
const { protect } = require("../middleWare/authMiddleware");

// GET ROUTE
// route /api/guest
// access PUBLIC
// CREATES A GUEST
const createGuest = asyncHandler(async (req, res) => {
  const alphabet = "abcdefghijklmnopqrstuvwxyz";
  const letter = alphabet[Math.floor(Math.random() * alphabet.length)];

  let guestId = Math.floor(Math.random() * 9000 + 1000);
  let guestName = `guest-${guestId}`;
  let guestProfile = {
    id: `${letter}-${guestId}`,
    name: "John Smith",
    username: guestName,
    email: `${guestName}@gmail.com`,
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

  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(guestName, salt);

  const userProfile = await Profile.create({
    user: `${letter}-${guestId}`,
    username: guestName,
    email: `${guestName}@gmail.com`,
    location: "New York",
    card: true,
    verified: true,
    picture:
      "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    bids: [],
    sells: [],

    status: "public",
  });

  // Create Guest User
  const user = await User.create({
    name: guestName,
    email: `${guestName}@gmail.com`,
    password: hashedPassword,
  });

  const guestInfo = {
    guest: guestProfile,
    token: generateToken(userProfile._id),
  };
  console.log("guest-create request made");
  res.status(200).send(guestInfo);
});

// POST route
// route /api/user
// access PRIVATE
// GETS PROFILE INFORMATION
const getProfile = asyncHandler(async (req, res) => {
  if (!req.body.token) {
    res.status(200).json({
      info: req.body.user,
      token: generateToken(req.body.user._id),
    });
  } else {
    res.status(200).json(req.body.user);
  }
});

// desc
// route /api/login
// access PUBLIC
// ALLOWS use to access account by logging in
const loginUser = asyncHandler(async (req, res, next) => {
  console.log("login user request made");

  const { email, password } = req.body;

  const userAccount = await User.findOne({ email });
  const profile = await Profile.findOne({ email });

  if (userAccount && (await bcrypt.compare(password, userAccount.password))) {
    req.body.user = profile;
    next();
  } else {
    console.log("Incorrect email or password");
    res.send("access denied");
  }
});
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
  loginUser,
};
