import { Model, Types } from 'mongoose'

export type IGullery = {
  _id: string
  userId: Types.ObjectId
  image: string
}

export type IGulleryModel = Model<IGullery, Record<string, unknown>>
