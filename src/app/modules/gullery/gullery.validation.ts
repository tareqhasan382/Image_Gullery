import { z } from 'zod'

const createGulleryZodSchema = z.object({
  body: z.object({
    // userId: z.string({ required_error: 'userId is required' }),
    image: z.string({ required_error: 'image is required' }),
  }),
})

export const GulleryValidation = { createGulleryZodSchema }
