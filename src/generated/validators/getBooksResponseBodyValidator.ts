import { array } from '@oats-ts/validators'

export const getBooksResponseBodyValidator = {
  200: { 'application/json': array() },
  400: { 'application/json': array() },
  500: { 'application/json': array() },
} as const
