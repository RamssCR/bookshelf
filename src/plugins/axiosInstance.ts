import axios from 'axios'
import { VITE_API_URL } from '@utils/env.config'

export const axiosInstance = axios.create({
  baseURL: VITE_API_URL,
  withCredentials: true,
  headers: {
    'Content-Type': 'application/json',
    'Accept': 'application/json',
  }
})