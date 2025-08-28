import mongoose, { Document, Schema } from 'mongoose';

export interface IAssignEmployee extends Document {
  userEmployeeId:mongoose.Schema.Types.ObjectId;
  description?: string;
  is_deleted: boolean;
  createdAt?: Date;
  updatedAt?: Date;
}

const assignEmployeeSchema: Schema = new Schema(

  {
    userEmployeeId: { type:mongoose.Schema.Types.ObjectId, required: true,ref:'User' },
    description: { type: String },
    is_deleted: { type: Boolean, default: false },
    createdAt : {type:String},
    updatedAt : {type:String},
  },
//   { timestamps: true } 
);

export default mongoose.model<IAssignEmployee>('AssignEmployee', assignEmployeeSchema);
