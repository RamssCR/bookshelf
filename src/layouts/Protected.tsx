import { Navigate, Outlet } from 'react-router-dom'
import { useAuthentication } from '@hooks/useAuthentication'

export const Protected = () => {
  const { isAuthenticated, loading } = useAuthentication()

  if (loading) {
    return <div className="flex items-center justify-center h-screen">Loading...</div>
  }

  if (!isAuthenticated) {
    return <Navigate to="/login" replace />
  }

  return <Outlet />
}