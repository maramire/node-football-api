require("dotenv").config();
const express = require("express");
const app = express();
const port = 3000;

const mongoose = require("mongoose");

// body parser
app.use(express.json());

// CORS
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PUT, PATCH, DELETE"
  );
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
  next();
});

// importing routes
const clubsRoutes = require("./routes/clubs");
app.use(clubsRoutes);
const playersRoutes = require("./routes/players");
app.use(playersRoutes);

// root route
app.get("/", (req, res) => {
  res.send({ message: "Hello World!" });
});

// 404 route
app.get("*", function (req, res) {
  res.status(404).send({ message: "Route not found" });
});

mongoose
  .connect(process.env.DB_URI)
  .then(() => {
    app.listen(port, () => {
      console.log(`Example app listening at http://localhost:${port}`);
    });
  })
  .catch((err) => {
    console.log(err);
  });
