import { config } from './config';
import * as passport from 'passport';
import { Strategy as LocalStrategy } from 'passport-local';
import * as StrategyJWT from 'passport-jwt';
import { userModel as User } from '../models/user.model';

const JwtStrategy = StrategyJWT.Strategy;
const ExtractJwt = StrategyJWT.ExtractJwt;

const bcrypt = require('bcrypt');

const localLogin = new LocalStrategy(
  {
    usernameField: 'email'
  },
  async (email, password, done) => {
    let user = await User.findOne({ email });
    if (!user || !bcrypt.compareSync(password, user.hashedPassword)) {
      return done(null, false, {
        message: 'Your login details could not be verified. Please try again.'
      });
    }
    user = user.toObject();
    delete user.hashedPassword;
    done(null, user);
  }
);

const jwtLogin = new JwtStrategy(
  {
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey: config.jwtSecret
  },
  async (payload, done) => {
    let user = await User.findById(payload._id);
    if (!user) {
      return done(null, false);
    }
    user = user.toObject();
    delete user.hashedPassword;
    done(null, user);
  }
);

export const passportConfig = {
  jwtLogin,
  localLogin
};

// passport.use(jwtLogin);
// passport.use(localLogin);
