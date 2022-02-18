const express = require("express");
const router = express.Router();

const matchdaysController = require("../controllers/matchdays");

router.post("/matchdays", matchdaysController.createMatchday);

router.post("/matchdays/:matchdayId/matches", matchdaysController.createMatch);

module.exports = router;
