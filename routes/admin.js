const express = require("express");
const router = express.Router();
const { registerAdmin, loginAdmin, logoutAdmin, getAdmin, loginStatus } = require("../controllers/admin");
const protect = require("../middleware/authMiddleWare");

router.post('/register', registerAdmin);
router.post('/login', loginAdmin);
router.get('/logout', logoutAdmin);
router.get('/getadmin', protect, getAdmin);
router.get('/loggedin', loginStatus);

module.exports = router;