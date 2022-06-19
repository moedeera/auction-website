const mongoose = require("mongoose");

const auctionSchema = mongoose.Schema(
  {
    id: {
      type: String,
      require: [true, "Please add a text value"],
    },
    title: {
      type: String,
      require: [true, "Please add a text value"],
    },
    brand: {
      type: String,
      require: [true, "Please add a text value"],
    },
    year: {
      type: Number,
      require: [true, "Please add a text value"],
    },
    price: {
      type: String,
      require: [true, "Please add a text value"],
    },
    cost: {
      type: Number,
      require: [true, "Please add a text value"],
    },
    days: {
      type: String,
      require: [true, "Please add a text value"],
    },
    hours: {
      type: String,
      require: [true, "Please add a text value"],
    },
    location: {
      type: String,
      require: false,
    },
    pic: {
      type: String,
      require: [true, "Please add a text value"],
    },
    pic2: {
      type: String,
      default: null,
    },
    pic3: {
      type: String,
      require: false,
    },
    pic4: {
      type: String,
      require: false,
    },
    img1: {
      data: Buffer,
      contentType: String,
      require: false,
    },
    img2: {
      data: Buffer,
      contentType: String,
      require: false,
    },
    km: {
      type: Number,
      require: [true, "Please add a text value"],
    },
    hrs: {
      type: String,
      default: null,
    },
    type: {
      type: String,
      require: [true, "Please add a text value"],
    },
    classic: {
      type: Boolean,
      default: false,
    },
    sold: {
      type: Boolean,
      default: false,
    },
    promoted: {
      type: Boolean,
      default: false,
    },
    currentHighestBidder: {
      type: String,
      require: [true, "Please add a text value"],
    },
    color: {
      type: String,
      default: "blue",
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Auction", auctionSchema);
