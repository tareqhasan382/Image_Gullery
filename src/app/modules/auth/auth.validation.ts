import { z } from 'zod'

const createAuthZodSchema = z.object({
  body: z.object({
    password: z.string({ required_error: 'Password is required' }),
    name: z.string({ required_error: 'Name is required' }),
    email: z.string({ required_error: 'Phone Number is required' }),
  }),
})

export const AUthValidation = { createAuthZodSchema }
