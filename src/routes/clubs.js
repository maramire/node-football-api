import express from 'express';
// controllers
import * as clubsController from '../controllers/clubs.js';

const router = express.Router();

// GET all clubs
router.get('/clubs', clubsController.getClubs);

// GET club
router.get('/clubs/:clubId', clubsController.getClub);

// GET club players
router.get('/clubs/:clubId/players', clubsController.getClubPlayers);

export default router;
