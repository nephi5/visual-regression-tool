import * as mongoose from 'mongoose';
import * as uuid from 'uuid/v4';
import { buildModel } from '../models/build.model';

export const ctrl = {
  getAllBuilds,
  getBuildsByProjectId,
  insert
};

async function getBuildsByProjectId(projectId: string) {
  return mongoose
    .model('Builds')
    .find()
    .where('projectId')
    .equals(projectId);
}

async function insert(projectId: string) {
  const build = {
    buildId: uuid(),
    projectId
  } as any;

  return new buildModel(build).save();
}

async function getAllBuilds() {
  return mongoose.model('Builds').find();
}
