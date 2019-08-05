import * as express from 'express';
import { router as authRoutes } from './auth.route';
import { router as userRoutes } from './user.route';
import { router as imgRoutes } from './img.route';
import { router as projectRoutes } from './project.route';

export const router = express.Router(); // eslint-disable-line new-cap

/** GET /health-check - Check service health */
router.get('/health-check', (req, res) => res.send('OK'));
router.all('/test', (req, res) => {
  console.log('test');
  res.send({ ok: 'ok' });
  console.log('change');
});

router.get('/another-test', (req, res) => {
  res.send({ hello: 'world', name: 'Nephi Szvoboda', age: 28 });
});

router.use('/auth', authRoutes);
router.use('/user', userRoutes);
router.use('/img', imgRoutes);
router.use('/project', projectRoutes);
