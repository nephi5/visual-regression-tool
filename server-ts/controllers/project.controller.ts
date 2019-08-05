import { projectModel } from '../models/project.model';
import * as mongoose from 'mongoose';

export const ctrl = {
  getProjects
  //   insertProject,
};

async function getProjects() {
  const project = new projectModel();
  return mongoose.model('Projects').find();
  // return await project.find();
  //   return await new projectModel().find();
}
