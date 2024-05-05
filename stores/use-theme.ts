import AsyncStorage from '@react-native-async-storage/async-storage'
import { create } from 'zustand'
import { createJSONStorage, persist } from 'zustand/middleware'

interface ThemeProps {
  profile: {
    background: `#${string}`
    text: `#${string}`
  }
}

export const useTheme = create(persist<ThemeProps>(() => ({
  profile: {
    background: '#ffffff',
    text: '#000000'
  }
}), {
  name: 'theme-storage',
  storage: createJSONStorage(() => AsyncStorage)
}))
