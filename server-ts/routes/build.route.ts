import * as express from 'express';
import { Request } from 'express';
import { ctrl } from '../controllers/build.controller';

export const router = express.Router();

router.route('/all').get(getAllBuilds);

router.route('/').get(getBuild);
router.route('/').post(insert);

function getBuild(req: Request, res) {
  if (req.query && req.query.buildId) {
    getBuildById(req.query.buildId, res);
  }

  if (req.query && req.query.projectId) {
    getBuildByProjectId(req.query.projectId, res);
  }
}

async function insert(req: Request, res) {
  const result = await ctrl.insert(req.body.projectId);
  res.json(result);
}

async function getBuildById(buildId: string, res) {}

async function getBuildByProjectId(projectId, res) {
  const response = await ctrl.getBuildsByProjectId(projectId);
  res.json(response);
}

async function getAllBuilds(req: Request, res) {
  const response = await ctrl.getAllBuilds();

  res.json(response);
}
