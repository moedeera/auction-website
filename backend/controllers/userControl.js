const asyncHandler = require("express-async-handler");
const jwt = require("jsonwebtoken");
let guest = {
  id: "guest",
  name: "John Smith",
  username: "John 45-86",
  email: "john1957@gmail.com",
  location: "New York",
  card: true,
  verified: true,
  picture:
    "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  bids: 0,
  sells: 0,
  currentBid: null,
  status: "public",
};

// desc
// route /api/guest
// access PUBLIC
const createGuest = asyncHandler(async (req, res) => {
  const newGuest = req.body.user;

  res.status(200).send(newGuest);
});

// desc
// route /api/guest
// access PUBLIC
const getGuest = asyncHandler(async (req, res) => {
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
};
