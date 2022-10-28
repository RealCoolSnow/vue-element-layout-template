import type { AxiosRequestConfig, ResponseData } from 'axios'
import axios from 'axios'
import store from '../../store'

const baseURL: string = import.meta.env.VITE_BASE_URL || ''
// const contentTypeDefault = 'application/x-www-form-urlencoded'
// console.log('baseURL', baseURL)
const http = axios.create({
  baseURL,
  timeout: 60000,
  withCredentials: true,
})

http.interceptors.request.use(
  (config: AxiosRequestConfig) => {
    config.params = {
      ...config.params,
      lang: store.getters.language,
    }
    return config
  },
  (error) => {
    Promise.reject(error)
  },
)

http.interceptors.response.use((response) => {
  if (response.status !== 200)
    return Promise.reject(response.data)

  return response.data
})
/** get & post */
interface Get {
  <T>(url: string, params?: object, config?: AxiosRequestConfig): Promise<
    ResponseData<T>
  >
}

interface Post {
  <T>(url: string, data?: object, config?: AxiosRequestConfig): Promise<
    ResponseData<T>
  >
}

interface Put {
  <T>(url: string, data?: object, config?: AxiosRequestConfig): Promise<
    ResponseData<T>
  >
}

interface Delete {
  <T>(url: string, params?: object, config?: AxiosRequestConfig): Promise<
    ResponseData<T>
  >
}

export const httpGet: Get = async (url, params, config) =>
  http.get(url, { params, ...config })

export const httpPost: Post = async (url, data, config) =>
  http.post(url, data, config)

export const httpPut: Put = async (url, data, config) =>
  http.put(url, data, config)

export const httpDelete: Delete = async (url, params, config) =>
  http.delete(url, { params, ...config })

export default http
