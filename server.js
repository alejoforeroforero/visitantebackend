const dotenv = require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");

const grabacionesRouter = require("./routes/grabaciones");

const app = express();

// Middlewares

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

//Routes

app.get("/", (req, res) => {
  res.send("Home Page");
});
// app.use("/admin/grabaciones/", grabacionesRouter);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

// const PORT = process.env.PORT || 5000;

// mongoose
//   .connect(process.env.DATABASE_URL)
//   .then(() => {
//     app.listen(PORT, () => {
//       console.log(`Server running on port ${PORT}`);
//     });
//   })
//   .catch((err) => {
//     console.log(err);
//   });
