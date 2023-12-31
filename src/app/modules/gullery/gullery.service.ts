/* eslint-disable @typescript-eslint/no-explicit-any */
import httpStatus from 'http-status'
import ApiError from '../../../errors/ApiError'
import { IGullery } from './gullery.interface'
import GulleryModel from './gullery.model'

const createGullery = async (payload: IGullery): Promise<IGullery | null> => {
  console.log('Data service:', payload)
  const createdUser = await GulleryModel.create(payload)
  // jodi user create na hoy
  if (!createdUser) {
    throw new ApiError(httpStatus.BAD_REQUEST, 'Field to create Gellery!')
  }
  return createdUser
}
///auth/login
const getGellery = async (): Promise<IGullery[] | null> => {
  // check exist user
  const isUserExist = await GulleryModel.find()

  return isUserExist
}
const myGallery = async (userId: string): Promise<IGullery[] | null> => {
  // check exist user
  // console.log('payload:', userId)
  const isUserExist = await GulleryModel.find({ userId: userId })

  return isUserExist
}
export const GulleryService = {
  createGullery,
  getGellery,
  myGallery,
}
