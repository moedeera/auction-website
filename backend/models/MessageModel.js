const mongoose = require("mongoose");

const messageSchema = mongoose.Schema(
  {
    name: {
      type: String,
      require: [true, "Please add a text value"],
    },
    email: {
      type: String,
      require: [true, "Please add an email"],
    },
    message: {
      type: String,
      require: [true, "Please add a message"],
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Message", messageSchema);
