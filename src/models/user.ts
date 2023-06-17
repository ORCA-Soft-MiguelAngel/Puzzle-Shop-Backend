import mongoose, { Document, Schema } from "mongoose";
import { v4 as uuidv4 } from "uuid";

export interface IUser extends Document {
  id: string;
  username: string;
  password: string;
  email: string;
  emailVerified: boolean;
  firstname: string;
  lastname: string;
  photo: string;
  createdAt: Date;
  updatedAt: Date;
}

const UserSchema: Schema = new Schema({
  id: { type: String, required: true, default: uuidv4 },
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  emailValidated: { type: Boolean, default: false },
  firstname: { type: String, required: true },
  lastname: { type: String, required: true },
  photo: { type: String, default: "" },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
});

UserSchema.pre<IUser>("save", function (next) {
  this.updatedAt = new Date();
  next();
});

export default mongoose.model<IUser>("User", UserSchema);
