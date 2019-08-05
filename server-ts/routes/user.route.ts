import * as express from 'express';
import * as passport from 'passport';
import * as asyncHandler from 'express-async-handler';

import { ctrl as userCtrl } from '../controllers/user.controller';

export const router = express.Router();

router.use(passport.authenticate('jwt', { session: false }));

router.route('/').post(asyncHandler(insert));

async function insert(req, res) {
  const user = await userCtrl.insert(req.body);
  res.json(user);
}
