import { Schema, model } from 'mongoose'

import { IGullery, IGulleryModel } from './gullery.interface'
const gellerySchema = new Schema<IGullery>(
  {
    userId: { type: Schema.Types.ObjectId, ref: 'auth' },
    image: { type: String, required: true },
  },
  { timestamps: true }
)

const GulleryModel = model<IGullery, IGulleryModel>('gullery', gellerySchema)
export default GulleryModel
