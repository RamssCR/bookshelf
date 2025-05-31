import { axiosInstance } from '@plugins/axiosInstance'

/**
 * Sends a registration request to the server.
 */
export const register = async (data: Record<string, unknown>) => 
  await axiosInstance.post('/auth/register', data)

/**
 * Sends a login request to the server.
 */
export const login = async (data: Record<string, unknown>) =>
  await axiosInstance.post('/auth/login', data)

/**
 * Retrieves the user's profile information from the server.
 */
export const profile = async () =>
  await axiosInstance.get('/auth/profile')

/**
 * Logs out the user by sending a request to the server.
 */
export const logout = async () =>
  await axiosInstance.get('/auth/logout')