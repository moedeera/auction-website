const jwt = require("jsonwebtoken");
const asyncHandler = require("express-async-handler");
const User = require("../models/UserModel");
const Profile = require("../models/ProfileModel");

const protect = asyncHandler(async (req, res, next) => {
  console.log("middleware initiated");
  let token;
  if (req.body.token) {
    // if (req.headers.authorization && req.headers.authorization.startsWith('Bearer'))
    // {
    try {
      //Get token from header
      // token = req.headers.authorization.split('')[1]
      token = req.body.token;

      //get verification
      const decoded = jwt.verify(token, process.env.JWT_SECRET);

      req.user = await Profile.findById(decoded.id);
      // console.log(req.user);
      next();
    } catch (error) {
      console.log(error);
      res.status(401).send("not authorized");
    }
  } else {
    console.log("no token");
    res.send("not authorized");
  }
});

module.exports = {
  protect,
};
