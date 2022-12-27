import express from 'express';
// controllers
import * as playersController from '../controllers/players.js';

const router = express.Router();

// GET all players
router.get('/players', playersController.getPlayers);

// GET player
router.get('/players/:playerId', playersController.getPlayer);

// PUT player
router.put('/players/:playerId', playersController.updatePlayer);

router.post(
  '/players/:playerId/statistics',
  playersController.updateMatchStatistics,
);

export default router;
