import { Schema, model, models } from "mongoose";

export type User = {
  _id: string;
  name: string;
  email: string;
  isAdmin: boolean;
};

const UserSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    isAdmin: { type: Boolean, required: true, default: false },
  },
  { timestamps: true }
);

const UserModel = models?.User || model("User", UserSchema);

export default UserModel;
