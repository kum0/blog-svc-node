import * as Mongoose from 'mongoose';

export interface IRoot extends Mongoose.Document {
  username: string;
  password: string;
}

const RootSchema = new Mongoose.Schema(
  {
    users: [
      {
        type: Mongoose.Schema.Types.ObjectId,
        ref: 'User'
      }
    ]
  },
  {
    versionKey: false,
    timestamps: { createdAt: 'createTime', updatedAt: 'updateTime' }
  }
);

export default Mongoose.model<IRoot>('Root', RootSchema);