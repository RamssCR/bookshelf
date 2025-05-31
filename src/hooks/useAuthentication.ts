import { useEffect } from 'react'
import { userStore } from '@stores/userStore'
import { profile } from '@services/authentication'
import { useCookies } from 'react-cookie'

export const useAuthentication = () => {
  const {
    user,
    loading,
    setUser,
    setLoading,
    clearUser
  } = userStore()
  const [cookies] = useCookies(['token'])

  useEffect(() => {
    const validateAuthentication = async () => {
      setLoading(true)
      try {
        const { data } = await profile()
        setUser(data?.data)
      } catch {
        clearUser()
      } finally {
        setLoading(false)
      }
    }

    if (cookies.token && !user) {
      validateAuthentication()
    } else {
      setLoading(false)
    }
  }, [cookies.token])

  return { 
    user, 
    loading, 
    isAuthenticated: !!user
  }
}