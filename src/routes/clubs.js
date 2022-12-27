import express from 'express';
import ClubsController from '../controllers/clubs.js';

const router = express.Router();

router.get('/clubs', ClubsController.getClubs);
router.get('/clubs/:clubId', ClubsController.getClub);
router.get('/clubs/:clubId/players', ClubsController.getClubPlayers);

export default router;
