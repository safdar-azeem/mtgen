import { Schema, model } from 'mongoose'

const OrderSchema: Schema = new Schema(
  {
    reference: { type: String, required: true },
    product: { type: Schema.Types.ObjectId, ref: 'Product' },
    quantity: { type: Number, required: true },
    price: { type: Number, required: true },
  },
  { timestamps: true }
)

const OrderModel = model('Order', OrderSchema)

export { OrderModel }
