const dotenv = require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const errorHandler = require("./middleware/errorMiddleware");
const cookieParser = require('cookie-parser');

const grabacionesRouter = require("./routes/grabaciones");
const adminRoute = require("./routes/admin")


const app = express();

// Middlewares

app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

// Routes Middleware
app.use("/api/admin/", adminRoute);

// Error Middleware

app.use(errorHandler)

//Routes

app.get("/", (req, res) => {
  res.send("Home Page");
});
app.use("/admin/grabaciones/", grabacionesRouter);


const PORT = process.env.PORT || 5000;

mongoose
  .connect(process.env.DATABASE_URL)
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  })
  .catch((err) => {
    console.log(err);
  });
