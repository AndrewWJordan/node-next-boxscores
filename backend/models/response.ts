import mongoose from 'mongoose';

export interface IResponse extends mongoose.Document {
  type: string;
  response: string;
  timestamp: Date;
}

const ResponseSchema = new mongoose.Schema({
  type: {
    type: String,
    required: true,
  },
  response: {
    type: String,
    required: true,
  },
  timestamp: {
    type: Date,
    default: Date.now,
    required: true,
  },
});

export const ResponseModel: mongoose.Model<IResponse> =
  mongoose.model<IResponse>('scores', ResponseSchema);
