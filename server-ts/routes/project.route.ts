import * as express from 'express';
import * as fs from 'fs-extra';
import * as path from 'path';
import * as uuid from 'uuid/v4';
import { Request } from 'express';
import { ctrl } from '../controllers/project.controller';

export const router = express.Router();

router.route('/all').get(getAllProjects);

router.route('/').get(getProjectById);
router.route('/').post(insert);

async function getProjectById(req: Request, res) {
  const id = req.query.id;
  const result = await ctrl.getProjectById(id);
  const response = result[0];

  res.json(response);
}

async function getAllProjects(req: Request, res) {
  const response = await ctrl.getProjects();

  res.json(response);
}

async function insert(req: Request, res) {
  const project = await ctrl.insertProject(req.body);
  res.json(project);
}
