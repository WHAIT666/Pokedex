import mongoose, { Document, Schema } from 'mongoose';

interface IRequest extends Document {
  username: string;
  endpoint: string;
  createdAt?: Date;
  updatedAt?: Date;
}

const requestSchema: Schema = new Schema({
  username: {
    type: String,
    required: true,
  },
  endpoint: {
    type: String,
    required: true
  }
}, { timestamps: true });

const RequestModel = mongoose.model<IRequest>('requests', requestSchema);

export default RequestModel;
