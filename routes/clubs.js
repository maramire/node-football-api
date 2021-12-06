const express = require("express");
const router = express.Router();
// controllers
const clubsController = require("../controllers/clubs");

// GET all clubs
router.get("/clubs", clubsController.getClubs);

module.exports = router;
