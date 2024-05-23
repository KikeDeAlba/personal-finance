import AsyncStorage from '@react-native-async-storage/async-storage'
import { create } from 'zustand'
import { createJSONStorage, persist } from 'zustand/middleware'

interface AccountData {
  name: string
  email: string
  dateOfBirth: Date
  pin?: number
  fingerprint: boolean
  totalCash?: number
}

interface AccountProps {
  isRegistered: boolean
  account: AccountData
  saveData: (data: AccountData) => void
}

export const useAccount = create(persist<AccountProps>(
  (set, get) => ({
    isRegistered: false,
    account: {
      name: '',
      email: '',
      dateOfBirth: new Date(),
      fingerprint: false
    },
    saveData: (data) => {
      set(() => ({ account: data }))
    }
  }),
  {
    name: 'account-storage', // unique name
    storage: createJSONStorage(() => AsyncStorage)// Add this here!
  }
))
