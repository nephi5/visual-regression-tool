import * as mongoose from 'mongoose';

const BuildSchema = new mongoose.Schema(
  {
    buildId: { type: String, unique: true },
    projectId: { type: String },
    started: {
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
    },
    endDate: {
      type: Date
    }
  },
  {
    versionKey: false
  }
);

export interface IBuild extends mongoose.Document {
  buildId: string;
  projectId: string;
  started?: string;
  unreviewed?: number;
  totalScreenshots?: number;
  endDate?: string;
}

export const buildModel = mongoose.model<IBuild>('Builds', BuildSchema);
