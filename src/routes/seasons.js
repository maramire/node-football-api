import express from 'express';

import * as seasonsController from '../controllers/seasons.js';

const router = express.Router();

router.get('/seasons', seasonsController.getSeasons);

export default router;
