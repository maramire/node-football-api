const express = require("express");
const router = express.Router();
const passport = require("passport");

const usersController = require("../controllers/users");

router.post("/login", usersController.handleLogin);
router.post("/signup", usersController.handleRegister);

router.put(
  "/users/:userId",
  passport.authenticate("jwt", { session: false }),
  usersController.editUser
);

module.exports = router;
