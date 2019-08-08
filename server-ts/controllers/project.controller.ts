import { projectModel } from '../models/project.model';
import * as uuid from 'uuid/v4';
import * as mongoose from 'mongoose';

export const ctrl = {
  getProjects,
  insertProject,
  getProjectById
};

async function getProjects() {
  return mongoose.model('Projects').find();
}

async function insertProject(projectName) {
  const newProject = {
    ...projectName,
    projectId: uuid() as string
  } as any;
  console.log('project', newProject);
  return new projectModel(newProject).save();
}

async function getProjectById(projectId: string) {
  return mongoose
    .model('Projects')
    .find()
    .where('projectId')
    .equals(projectId);
}
