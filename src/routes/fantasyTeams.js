import express from 'express';
import passport from 'passport';

import * as fantasyTeamsController from '../controllers/fantasyTeams.js';

const router = express.Router();

router.post(
  '/fantasyTeams',
  passport.authenticate('jwt', { session: false }),
  fantasyTeamsController.createFantasyTeam,
);

router.put(
  '/fantasyTeams/:fantasyTeamId',
  passport.authenticate('jwt', { session: false }),
  fantasyTeamsController.editFantasyTeam,
);

router.post(
  '/fantasyTeams/:fantasyTeamId/fantasyTeamPlayers',
  passport.authenticate('jwt', { session: false }),
  fantasyTeamsController.createFantasyTeamPlayer,
);

router.get(
  '/fantasyTeams/:fantasyTeamId/fantasyTeamPlayers',
  passport.authenticate('jwt', { session: false }),
  fantasyTeamsController.getFantasyTeamPlayers,
);

router.get(
  '/fantasyTeams',
  passport.authenticate('jwt', { session: false }),
  fantasyTeamsController.getFantasyTeam,
);

export default router;
