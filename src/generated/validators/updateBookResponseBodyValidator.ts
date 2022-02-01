import { array } from '@oats-ts/validators'
import { bookTypeValidator } from './bookTypeValidator'

export const updateBookResponseBodyValidator = {
  200: { 'application/json': bookTypeValidator },
  400: { 'application/json': array() },
  500: { 'application/json': array() },
} as const
