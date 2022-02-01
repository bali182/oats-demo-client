import { array } from '@oats-ts/validators'
import { bookTypeValidator } from './bookTypeValidator'

export const createBookResponseBodyValidator = {
  201: { 'application/json': bookTypeValidator },
  400: { 'application/json': array() },
  500: { 'application/json': array() },
} as const
