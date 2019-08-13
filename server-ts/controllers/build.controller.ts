import * as mongoose from 'mongoose';
import * as uuid from 'uuid/v4';
import { buildModel } from '../models/build.model';

export const ctrl = {
  getAllBuilds,
  getBuildsByProjectId,
  insert,
  deleteBuild
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
  };

  return new buildModel(build).save();
}

async function getAllBuilds() {
  return mongoose.model('Builds').find();
}

async function deleteBuild(buildId: string) {
  return mongoose.model('Builds').deleteOne({ buildId: buildId });
}
