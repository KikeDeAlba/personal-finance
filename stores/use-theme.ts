import AsyncStorage from '@react-native-async-storage/async-storage'
import { create } from 'zustand'
import { createJSONStorage, persist } from 'zustand/middleware'

interface ThemeProps {
  profile: {
    backgroundColor: `#${string}`
    text: `#${string}`
  }
}

export const useTheme = create(persist<ThemeProps>((set, get) => ({
  profile: {
    backgroundColor: '#000',
    text: '#fff'
  }
}), {
  name: 'theme-storage',
  storage: createJSONStorage(() => AsyncStorage)
}))
