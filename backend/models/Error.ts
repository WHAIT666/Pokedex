import mongoose, { Document, Schema } from 'mongoose';

interface IError extends Document {
  username: string;
  name: string;
  endpoint: string;
  code: number;
  createdAt?: Date;
  updatedAt?: Date;
}

const errorSchema: Schema = new Schema({
  username: {
    type: String,
    required: true
  },
  name: {
    type: String,
    required: true,
  },
  endpoint: {
    type: String,
    required: true
  },
  code: {
    type: Number,
    required: true
  }
}, { timestamps: true });

const ErrorModel = mongoose.model<IError>('errors', errorSchema);

export default ErrorModel;
