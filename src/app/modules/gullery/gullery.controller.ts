/* eslint-disable @typescript-eslint/no-explicit-any */
import httpStatus from 'http-status'
import catchAsync from '../../../shared/catchAsync'
import sendResponse from '../../../shared/sendResponse'
import { Request, Response } from 'express'
import config from '../../../config'
import { GulleryService } from './gullery.service'
import { IGullery, ILoginUserResponse, IUser } from './gullery.interface'

const createGullery = catchAsync(async (req: Request, res: Response) => {
  const data = req.body
  //     const data = req.body
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
  const id = req.body
  const result = await GulleryService.getGellery(id)

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
}
