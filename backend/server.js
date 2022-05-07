const path = require("path");
const express = require("express");

const dotenv = require("dotenv").config();
const port = process.env.PORT || 1660;
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/main", require("./routes/main"));

if (process.env.NODE_ENV === "production") {
  app.use(
    express.static(path.join(__dirname, "../frontend/auction-site/build"))
  );

  app.get("*", (req, res) =>
    res.sendFile(
      path.resolve(
        __dirname,
        "../",
        "frontend",
        "auction-site",
        "build",
        "index.html"
      )
    )
  );
} else {
  app.get("/", (req, res) => res.send("Please set to production"));
}

app.listen(port, () => {
  console.log("port", port);
});
