const express = require("express");
const router = express.Router();

const seasonsController = require("../controllers/seasons");

// GET all seasons
router.get("/seasons", seasonsController.getSeasons);

module.exports = router;
