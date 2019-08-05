import * as express from 'express';
import * as passport from 'passport';

import { ctrl as userCtrl } from '../controllers/user.controller';
import { ctrl as authCtrl } from '../controllers/auth.controller';

const asyncHandler = require('express-async-handler');

// const passport = require('passport');
// const userCtrl = require('../controllers/user.controller');
// const authCtrl = require('../controllers/auth.controller');
// const config = require('../config/config');

export const router = express.Router();

router.post('/register', asyncHandler(register), login);
router.post(
  '/login',
  passport.authenticate('local', { session: false }),
  login
);
router.get('/me', passport.authenticate('jwt', { session: false }), login);

async function register(req, res, next) {
  let user = await userCtrl.insert(req.body);
  user = user.toObject();
  delete user.hashedPassword;
  req.user = user;
  next();
}

function login(req, res) {
  const user = req.user;
  const token = authCtrl.generateToken(user);
  res.json({ user, token });
}
