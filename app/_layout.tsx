import { Slot } from 'expo-router'
import { View } from 'react-native'
import constants from 'expo-constants'
import { useStartupConfig } from 'hooks/startup-config'

export default function HomeLayout () {
  useStartupConfig()

  return (
    <View
      style={{
        flex: 1,
        paddingTop: constants.statusBarHeight
      }}
    >
      <Slot />
    </View>
  )
}
