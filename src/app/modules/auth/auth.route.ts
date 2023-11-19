import express from 'express'

import { AUthValidation } from './auth.validation'
import validateRequest from '../../middlewares/validateRequest'
import { AuthController } from './auth.controller'
// import { authVerify } from '../../middlewares/auth'

//export const UserValidation = { createUserZodSchema }
const router = express.Router()

router.post('/login', AuthController.LoginUser),
  router.post(
    '/create-user',
    validateRequest(AUthValidation.createAuthZodSchema),
    AuthController.createUser
  )
export const AuthRoute = router
