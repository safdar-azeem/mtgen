import { Schema, model } from 'mongoose'

const ProductSchema: Schema = new Schema(
  {
    name: { type: String, required: true },
    thumbnail: { type: String },
    price: { type: Number, required: true },
  },
  { timestamps: true }
)

const ProductModel = model('Product', ProductSchema)

export { ProductModel }
