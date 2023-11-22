import express from 'express'

import { AuthController } from './auth.controller'

// import { authVerify } from '../../middlewares/auth'

//export const UserValidation = { createUserZodSchema }
const router = express.Router()

router.post('/login', AuthController.LoginUser),
  router.post('/create-user', AuthController.createUser)
export const AuthRoute = router
