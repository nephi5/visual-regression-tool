import * as express from 'express';
import * as fs from 'fs-extra';
import * as path from 'path';
import * as uuid from 'uuid/v4';
import { Request } from 'express';
import { ctrl } from '../controllers/project.controller';

export const router = express.Router();

router.route('/all').get(getAllProjects);

router.route('/').get(getProjectById);

function getProjectById(req: Request, res) {
  console.log('getting in here');
  const id = req.query.id;
  res.json({ id });
}

async function getAllProjects(req: Request, res) {
  const response = await ctrl.getProjects();

  res.json(response);
}
