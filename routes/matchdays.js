const express = require("express");
const router = express.Router();

const matchdaysController = require("../controllers/matchdays");

// GET all matchdays
router.post("/matchdays", matchdaysController.createMatchday);

module.exports = router;
