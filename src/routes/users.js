import express from 'express';
import passport from 'passport';

import * as usersController from '../controllers/users.js';

const router = express.Router();

router.post('/login', usersController.handleLogin);
router.post('/signup', usersController.handleRegister);

router.put(
  '/users/:userId',
  passport.authenticate('jwt', { session: false }),
  usersController.editUser,
);

export default router;
