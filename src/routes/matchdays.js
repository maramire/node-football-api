import express from 'express';

import * as matchdaysController from '../controllers/matchdays.js';

const router = express.Router();

router.post('/matchdays', matchdaysController.createMatchday);

router.post('/matchdays/:matchdayId/matches', matchdaysController.createMatch);

export default router;
