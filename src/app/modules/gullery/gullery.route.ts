import express from 'express'

// import { GulleryValidation } from './gullery.validation'
// import validateRequest from '../../middlewares/validateRequest'
import { GulleryController } from './gullery.controller'
// import { authVerify } from '../../middlewares/auth'

//export const UserValidation = { createUserZodSchema }
const router = express.Router()
router.get('/gullery', GulleryController.getGellery),
  router.get('/my-gallery/:id', GulleryController.getMyGellery),
  router.post('/create-gullery', GulleryController.createGullery)
export const GulleryRoute = router
