import { httpGet, httpPost } from './http'

export function helloGet(params?: string) {
  return httpGet<string>('hello', { params })
}

export const helloPost = (params?: any) => httpPost<any>('hello', params)
