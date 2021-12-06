const express = require("express");
const router = express.Router();
// controllers
const playersController = require("../controllers/players");

// GET all players
router.get("/players", playersController.getPlayers);

module.exports = router;
