const express = require("express");
const router = express.Router();

const usersController = require("../controllers/users");

router.post("/login", usersController.handleLogin);
router.post("/signup", usersController.handleRegister);

module.exports = router;
