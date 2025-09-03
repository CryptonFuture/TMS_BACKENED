import mongoose, { Document, Schema } from 'mongoose';

export interface ITask extends Document {
  name:string;
  description?: string;
  accessToken?: string | null;
  refreshToken?: string | null;
  status: string;
  is_deleted: boolean;
  createdAt?: Date;
  updatedAt?: Date;
}

const taskSchema: Schema = new Schema(
  {
    name: { type: String, required: true },
    description: { type: String },
    accessToken: { type: String, default: null },
    refreshToken: { type: String, default: null },
    status: { type: String, enum: ["Active", "unActive", "admin"], default: "Active" },
    is_deleted: { type: Boolean, default: false },
    createdAt : {type:String},
    updatedAt : {type:String},
  },
//   { timestamps: true } 
);

export default mongoose.model<ITask>('Task', taskSchema);
