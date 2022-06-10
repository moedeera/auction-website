const mongoose = require("mongoose");
const db = require("./keys").MongoURI;
const connectDB = async () => {
  try {
    const conn = await mongoose
      .connect(db, { useUnifiedTopology: true, useNewUrlParser: true })
      .then(() => console.log("mongoDB connected"))
      .catch((err) => console.log(err));
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

module.exports = connectDB;
