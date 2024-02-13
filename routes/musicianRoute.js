const express = require("express");
const router = express.Router();
const { createMusician } = require("../controllers/musicianController");
const protect = require("../middleware/authMiddleWare");
const { upload } = require("../utils/fileUpload");

router.post("/", protect, upload.single("image"), createMusician);

module.exports = router;