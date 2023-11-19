import express, { Application, NextFunction, Request, Response } from 'express'
const app: Application = express()
import cors from 'cors'
import globalErrorHandler from './app/middlewares/globalErrorHandler'
import httpStatus from 'http-status'
//import ApiError from './errors/ApiError'
import cookieParser from 'cookie-parser'
import { AuthRoute } from './app/modules/auth/auth.route'
import { GulleryRoute } from './app/modules/gullery/gullery.route'
const corsOptions = {
  origin: [
    'http://localhost:3000',
    'http://localhost:3000/',
    'https://booking-fontend.vercel.app/',
    'https://booking-fontend.vercel.app/',
    'https://api.cloudinary.com/',
    'https://api.cloudinary.com',
    'https://image-gullery-d1ev.vercel.app/',
    'https://image-gullery-d1ev.vercel.app/',
  ], // https://booking-fontend.vercel.app || http://localhost:3000;
  credentials: true, //access-control-allow-credentials:true
  optionSuccessStatus: 200,
}
app.use(cors(corsOptions))
// app.use(cors(corsOptions))
app.use(cookieParser())
//parser
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// Applications route

app.use('/api/v1', AuthRoute)
app.use('/api/v1', GulleryRoute)
//Testing Route
// app.get('/', async (req: Request, res: Response, next: NextFunction) => {
//   throw new Error('Testing Error log')
// })

//  global error handling || next => Error 4 parameter ||
app.use(globalErrorHandler)

// route not found
app.use((req: Request, res: Response, next: NextFunction) => {
  res.status(httpStatus.BAD_REQUEST).json({
    success: false,
    messase: 'Not Found',
    errorMessage: [
      {
        path: req.originalUrl,
        message: 'API NOT FOUND!',
      },
    ],
  })
  next()
})

export default app
