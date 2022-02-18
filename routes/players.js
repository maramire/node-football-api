const express = require("express");
const router = express.Router();
// controllers
const playersController = require("../controllers/players");

// GET all players
router.get("/players", playersController.getPlayers);

// GET player
router.get("/players/:playerId", playersController.getPlayer);

// PUT player
router.put("/players/:playerId", playersController.updatePlayer);

router.post(
  "/players/:playerId/statistics",
  playersController.updateMatchStatistics
);

module.exports = router;
