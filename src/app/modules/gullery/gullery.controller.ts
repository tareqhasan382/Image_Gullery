/* eslint-disable @typescript-eslint/no-explicit-any */
import httpStatus from 'http-status'
import catchAsync from '../../../shared/catchAsync'
import sendResponse from '../../../shared/sendResponse'
import { Request, Response } from 'express'
import { GulleryService } from './gullery.service'
import { IGullery } from './gullery.interface'

const createGullery = catchAsync(async (req: Request, res: Response) => {
  const data = req.body
  //console.log('data:', data)
  const result = await GulleryService.createGullery(data)

  sendResponse<IGullery>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: ' created successfully!',
    data: result,
  })
})
///admin/login
const getGellery = catchAsync(async (req: Request, res: Response) => {
  // const id = req.params
  const result = await GulleryService.getGellery()

  sendResponse<IGullery[]>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'data retrive in successfully!',
    data: result,
  })
})
const getMyGellery = catchAsync(async (req: Request, res: Response) => {
  // const id = req.params
  const data: any = req.params
  //console.log('payload:', userId)
  const result = await GulleryService.myGallery(data?.id)

  sendResponse<IGullery[]>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'data retrive in successfully!',
    data: result,
  })
})
export const GulleryController = {
  createGullery,
  getGellery,
  getMyGellery,
}
