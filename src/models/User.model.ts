import { Schema, model } from 'mongoose'

const ContactSchema: Schema = new Schema(
  {
    name: { type: String, required: true },
    avatar: { type: String },
    email: { type: String, required: true },
  },
  { timestamps: true }
)

const ContactModel = model('Contact', ContactSchema)

export { ContactModel }
