import { Schema, model } from 'mongoose'

const UserSchema: Schema = new Schema(
  {
    name: { type: String, required: true },
    avatar: { type: String },
    email: { type: String, required: true },
  },
  { timestamps: true }
)

const UserModel = model('User', UserSchema)

export { UserModel }
