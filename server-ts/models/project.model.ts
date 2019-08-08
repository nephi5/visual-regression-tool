import * as mongoose from 'mongoose';

const ProjectSchema = new mongoose.Schema(
  {
    projectId: { type: String, unique: true },
    projectName: {
      type: String,
      required: true
    },
    lastBuild: { type: Date, sparse: true },
    lastBuildId: { type: String, sparse: true },
    createdAt: {
      type: Date,
      default: Date.now
    }
  },
  {
    versionKey: false
  }
);

export const projectModel = mongoose.model('Projects', ProjectSchema);
