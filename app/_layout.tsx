import { Slot } from 'expo-router'
import constants from 'expo-constants'
import { useStartupConfig } from 'hooks/startup-config'
import { StatusBar } from 'expo-status-bar'
import { StyledView } from 'components/styled'
import { useTheme } from 'stores/use-theme'

export default function HomeLayout () {
  useStartupConfig()
  const backgroundColor = useTheme(state => state.profile.backgroundColor)

  return (
    <StyledView
      className='flex-1'
      style={{
        paddingTop: constants.statusBarHeight,
        backgroundColor
      }}
    >
      <StatusBar style='dark' />
      <Slot />
    </StyledView>
  )
}
