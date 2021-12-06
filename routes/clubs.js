const express = require("express");
const router = express.Router();
// controllers
const clubsController = require("../controllers/clubs");

// GET all clubs
router.get("/clubs", clubsController.getClubs);

// GET club
router.get("/clubs/:clubId", clubsController.getClub);

// GET club players
router.get("/clubs/:clubId/players", clubsController.getClubPlayers);

module.exports = router;
