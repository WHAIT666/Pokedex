import mongoose, { Document, Schema } from 'mongoose';

interface IUser extends Document {
  username: string;
  password: string;
  isAdmin: boolean;
  favorites: string[];
  createdAt?: Date;
  updatedAt?: Date;
}

const userSchema: Schema = new Schema({
  username: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  isAdmin: {
    type: Boolean,
    default: false
  },
  favorites: {
    type: [String],
    default: []
  }
}, { timestamps: true });

const UserModel = mongoose.model<IUser>('users', userSchema);

export default UserModel;
