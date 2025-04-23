import { Schema, Document, model, models } from "mongoose";

export interface IUser extends Document {
  wallet: string;
  createdAt: string;
}

const UserSchema: Schema = new Schema({
  wallet: { type: String, required: true, unique: true },
  createdAt: { type: Date, required: true },
});

const User = models.User || model<IUser>("User", UserSchema);

export default User;
