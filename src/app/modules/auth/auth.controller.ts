/* eslint-disable @typescript-eslint/no-explicit-any */
import httpStatus from 'http-status'
import catchAsync from '../../../shared/catchAsync'
import sendResponse from '../../../shared/sendResponse'
import { Request, Response } from 'express'
import config from '../../../config'
import { AuthService } from './auth.service'
import { ILoginUserResponse, IUser } from './auth.interface'

const createUser = catchAsync(async (req: Request, res: Response) => {
  const data = req.body
  //     const data = req.body
  const result = await AuthService.createUser(data)

  sendResponse<IUser>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'User created successfully!',
    data: result,
  })
})
///admin/login
const LoginUser = catchAsync(async (req: Request, res: Response) => {
  const data = req.body
  const result = await AuthService.loginUser(data)
  const { refreshToken, ...others } = result
  // set refresh token into cookie
  const cookieOptions = {
    secure: config.env === 'production' ? true : false,
    httpOnly: true,
  }

  res.cookie('refreshToken', refreshToken, cookieOptions)

  sendResponse<ILoginUserResponse>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'User logged in successfully!',
    data: others,
  })
})

export const AuthController = {
  createUser,
  LoginUser,
}
