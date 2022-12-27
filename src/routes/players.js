import express from 'express';
// controllers
import * as playersController from '../controllers/players.js';

const router = express.Router();

router.get('/players', playersController.getPlayers);
router.get('/players/:playerId', playersController.getPlayer);
router.put('/players/:playerId', playersController.updatePlayer);
router.post(
  '/players/:playerId/statistics',
  playersController.updateMatchStatistics,
);

export default router;
