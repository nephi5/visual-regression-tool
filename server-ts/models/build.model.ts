import * as mongoose from 'mongoose';

const BuildSchema = new mongoose.Schema(
  {
    buildId: { type: String, unique: true },
    projectId: { type: String },
    createdAt: {
      type: Date,
      default: Date.now
    },
    unreviewed: {
      type: Number,
      default: 0
    },
    totalScreenshots: {
      type: Number,
      default: 0
    }
  },
  {
    versionKey: false
  }
);

export const buildModel = mongoose.model('Builds', BuildSchema);
