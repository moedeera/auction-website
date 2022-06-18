const mongoose = require("mongoose");

const profileSchema = mongoose.Schema(
  {
    user: {
      type: String,
      required: true,
    },

    email: {
      type: String,
      require: [true, "Please add a text value"],
    },
    username: {
      type: String,
      require: [true, "Please add a text value"],
    },
    location: {
      type: String,
      require: false,
    },
    card: {
      type: String,
      require: false,
    },
    verified: {
      type: Boolean,
      default: false,
    },
    picture: {
      type: String,
      require: false,
    },

    status: {
      type: String,
      default: 0,
    },
    bids: [String],
    sells: [
      {
        auctionId: {
          type: String,
          required: true,
        },
        finalBid: {
          type: Number,
          required: true,
        },
        active: {
          type: Boolean,
          default: true,
        },
      },
    ],
  },
  { timestamps: true }
);

module.exports = mongoose.model("Profile", profileSchema);
