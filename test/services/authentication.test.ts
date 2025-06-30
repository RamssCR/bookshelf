import { afterEach, describe, expect, test, vi } from 'vitest'
import { register, login, profile, logout } from '@services/authentication'
import { axiosInstance } from '@plugins/axiosInstance'

vi.mock('@plugins/axiosInstance')

describe('Authentication Service', () => {
  afterEach(() => {
    vi.clearAllMocks()
  })

  test('register calls axiosInstance.post with correct parameters', async () => {
    const data = { username: 'test', password: 'password' }
    await register(data)
    expect(axiosInstance.post).toHaveBeenCalledWith('/auth/register', data)
  })

  test('login calls axiosInstance.post with correct parameters', async () => {
    const data = { username: 'test', password: 'password' }
    await login(data)
    expect(axiosInstance.post).toHaveBeenCalledWith('/auth/login', data)
  })

  test('profile calls axiosInstance.get without parameters', async () => {
    await profile()
    expect(axiosInstance.get).toHaveBeenCalledWith('/auth/profile')
  })

  test('logout calls axiosInstance.get without parameters', async () => {
    await logout()
    expect(axiosInstance.get).toHaveBeenCalledWith('/auth/logout')
  })
})