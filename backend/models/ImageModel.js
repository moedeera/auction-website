const mongoose = require("mongoose");

const imageSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Please add an name"],
    },
    image: {
      data: Buffer,
      contentType: String,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Image", imageSchema);
