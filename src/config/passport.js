import pkg from 'passport-jwt';
import fs from 'fs';
import { fileURLToPath } from 'url';
import path, { dirname } from 'path';
import User from '../models/user.js';

const { Strategy, ExtractJwt } = pkg;

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const pathToKey = path.join(__dirname, '..', 'id_rsa_pub.pem');
const PUB_KEY = fs.readFileSync(pathToKey, 'utf8');

const options = {
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey: PUB_KEY,
  algorithms: ['RS256'],
};

// app.js will pass the global passport object here, and this function will configure it
export default function configPassport(passport) {
  passport.use(
    new Strategy(options, ((jwtPayload, done) => {
      // We will assign the `sub` property on the JWT to the database ID of user
      User.findOne({ _id: jwtPayload.sub }, (err, user) => {
        if (err) {
          return done(err, false);
        }
        if (user) {
          return done(null, user);
        }
        return done(null, false);
      });
    })),
  );
}
