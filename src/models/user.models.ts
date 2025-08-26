import mongoose, { Document, Schema } from 'mongoose';

export interface IUser extends Document {
  name: string;
  email: string;
  password: string;
  phone: string;
  address: string;
  designName: string;
  department: string;
  joiningDate: string;
  description?: string;
  accessToken?: string | null;
  refreshToken?: string | null;
  status: string;
//   is_admin: boolean;
  is_deleted: boolean;
  createdAt?: Date;
  updatedAt?: Date;
}

const userSchema: Schema = new Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    phone: { type: String, required: true },
    address: { type: String, required: true },
    designName: { type: String, required: true },
    department: { type: String, required: true },
    joiningDate: { type: String, required: true },
    description: { type: String },
    accessToken: { type: String, default: null },
    refreshToken: { type: String, default: null },
    status: { type: String, enum: ["Active", "unActive", "admin"], default: "Active" },
    // is_admin: { type: Boolean, default: false },
    is_deleted: { type: Boolean, default: false },
  },
//   { timestamps: true } 
);

export default mongoose.model<IUser>('User', userSchema);
