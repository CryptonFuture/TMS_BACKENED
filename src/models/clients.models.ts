import mongoose, { Document, Schema } from 'mongoose';

// 🔹 Interface
export interface IClientForm extends Document {
  name: string;
  email: string;
  password: string;
  confirmPass?: string; 
  phone: string;
  address: string;
  startTime: string;
  endTime: string;
  description?: string;
  status: string;
  createdAt?: Date;
  updatedAt?: Date;
    accessToken?: string | null;
  refreshToken?: string | null;
    is_deleted: boolean;

}

// 🔹 Schema
const clientFormSchema: Schema<IClientForm> = new Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    confirmPass: { type: String }, 
    phone: { type: String, required: true },
    address: { type: String, required: true },
    startTime: { type: String, required: true },
    endTime: { type: String, required: true },
    description: { type: String },
    status: { type: String, enum: ['Exist', 'nonExist'], default: 'nonExist' },
    accessToken: { type: String, default: null },
    refreshToken: { type: String, default: null },
    is_deleted: { type: Boolean, default: false },
    

  },
  { timestamps: true } 
);

// 🔹 Export Model
export default mongoose.model<IClientForm>('Client', clientFormSchema);
