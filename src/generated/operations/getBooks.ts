import { ClientAdapter, RawHttpRequest } from '@oats-ts/openapi-http'
import { GetBooksResponse } from '../responses/GetBooksResponse'
import { getBooksResponseBodyValidator } from '../validators/getBooksResponseBodyValidator'

export async function getBooks(configuration: ClientAdapter): Promise<GetBooksResponse> {
  const requestUrl = await configuration.getUrl('/books', undefined)
  const requestHeaders = await configuration.getRequestHeaders(undefined, undefined)
  const rawRequest: RawHttpRequest = {
    url: requestUrl,
    method: 'get',
    headers: requestHeaders,
  }
  const rawResponse = await configuration.request(rawRequest)
  const mimeType = await configuration.getMimeType(rawResponse)
  const statusCode = await configuration.getStatusCode(rawResponse)
  const responseHeaders = await configuration.getResponseHeaders(rawResponse, statusCode, undefined)
  const responseBody = await configuration.getResponseBody(
    rawResponse,
    statusCode,
    mimeType,
    getBooksResponseBodyValidator,
  )
  const response = {
    mimeType,
    statusCode,
    headers: responseHeaders,
    body: responseBody,
  } as GetBooksResponse
  return response
}
