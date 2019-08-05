import * as jwt from 'jsonwebtoken';
import { config } from '../config/config';
// const jwt = require('jsonwebtoken');
// const config = require('../config/config');
export const ctrl = {
  generateToken
};

export function generateToken(user) {
  const payload = JSON.stringify(user);
  return jwt.sign(payload, config.jwtSecret);
}
