import AsyncStorage from '@react-native-async-storage/async-storage'
import { create } from 'zustand'
import { createJSONStorage, persist } from 'zustand/middleware'

interface AccountProps {
  isLogged: boolean
  account: {
    name: string
    email: string
    age: number
    pin?: number
    fingerprint: boolean
    totalCash?: number
  }
}

export const useAccount = create(persist<AccountProps>(
  (set, get) => ({
    isLogged: false,
    account: {
      name: '',
      email: '',
      age: 0,
      fingerprint: false
    }
  }),
  {
    name: 'account-storage', // unique name
    storage: createJSONStorage(() => AsyncStorage)// Add this here!
  }
))
