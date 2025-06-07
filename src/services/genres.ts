import { axiosInstance } from '@plugins/axiosInstance'

/**
 * Retrieves a list of genres from the API.
 */
export const getGenres = async () =>
  await axiosInstance.get('/genres')