import { create } from 'zustand'
import type { User } from '@@types/user'

type AuthState = {
  user: User | null
  loading: boolean
  setUser: (user: User) => void
  setLoading: (loading: boolean) => void
  clearUser: () => void
}

export const userStore = create<AuthState>((set) => ({
  user: null,
  loading: true,
  setUser: (user: User) => set({ user }),
  setLoading: (loading: boolean) => set({ loading }),
  clearUser: () => set({ user: null }),
}))