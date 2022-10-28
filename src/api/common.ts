import { httpGet, httpPost } from './http'

export const helloGet = (params?: String) =>
  httpGet<String>('hello', { params })

export const helloPost = (params?: any) => httpPost<any>('hello', params)
