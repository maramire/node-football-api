import Club from '../models/club.js';
import Player from '../models/player.js';
import { getLimit, getSkip } from '../utils/paginator.js';

export default class ClubsController {
  static async getClubs(req, res) {
    const clubs = await Club
      .find({ code: { $ne: 0 } })
      .skip(getSkip(req.query.page, req.query.limit))
      .limit(getLimit(req.query.limit));
    res.send(clubs);
  }

  static async getClubPlayers(req, res) {
    const clubId = req.params?.clubId;
    if (!clubId) {
      res.status(500).send({ error: 'Cannot do that operation.' });
    } else {
      const club = await Club.findById(clubId);
      const players = await Player.find({ club_code: club.code });
      res.send(players);
    }
  }

  static async getClub(req, res) {
    const clubId = req.params?.clubId;
    const club = await Club.findById(clubId);
    res.send(club);
  }
}
