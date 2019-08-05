import * as mongoose from 'mongoose';

const ProjectSchema = new mongoose.Schema(
  {
    projectName: {
      type: String,
      required: true,
      unique: true
    },
    lastBuild: {
      type: Date,
      required: false
    },
    lastBuildId: {
      type: String,
      unique: true,
      required: false
    },
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
