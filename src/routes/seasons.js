import express from 'express';

import * as seasonsController from '../controllers/seasons.js';

const router = express.Router();

// GET all seasons
router.get('/seasons', seasonsController.getSeasons);

export default router;
