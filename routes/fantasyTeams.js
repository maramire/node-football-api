const express = require("express");
const router = express.Router();
const passport = require("passport");

const fantasyTeamsController = require("../controllers/fantasyTeams");

router.post(
  "/fantasyTeams",
  passport.authenticate("jwt", { session: false }),
  fantasyTeamsController.createFantasyTeam
);

router.put(
  "/fantasyTeams/:fantasyTeamId",
  passport.authenticate("jwt", { session: false }),
  fantasyTeamsController.editFantasyTeam
);

router.post(
  "/fantasyTeams/:fantasyTeamId/fantasyTeamPlayers",
  passport.authenticate("jwt", { session: false }),
  fantasyTeamsController.createFantasyTeamPlayer
);

router.get(
  "/fantasyTeams/:fantasyTeamId/fantasyTeamPlayers",
  passport.authenticate("jwt", { session: false }),
  fantasyTeamsController.getFantasyTeamPlayers
);

module.exports = router;
