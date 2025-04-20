import { Schema, Document, model, models } from "mongoose";

export interface IUser extends Document {
  wallet: string;
  password: string;
}

const UserSchema: Schema = new Schema({
  wallet: { type: String, required: true, unique: true },
  password: { type: String, required: true },
});

const User = models.User || model<IUser>("User", UserSchema);

export default User;
