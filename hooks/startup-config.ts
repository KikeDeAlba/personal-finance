import { router } from 'expo-router'
import { authentitcate } from 'expo-utils/auth'
import { useEffect } from 'react'
import { useAccount } from 'stores/user'
import { ROUTES } from 'utils/routes'

interface StartupConfigProps {
  isRegistered: boolean
  fingerprint: boolean
  pin?: number
}

const startupConfig = async ({ fingerprint, pin, isRegistered }: StartupConfigProps) => {
  if (!isRegistered) {
    router.push(ROUTES.account.config.path)
  }

  if (fingerprint) {
    const success = await authentitcate()

    if (success) {
      router.push(ROUTES.home.path)
    }
  } else if (pin) {
    router.push(ROUTES.auth.path)
  }
}

export const useStartupConfig = () => {
  const account = useAccount(state => ({
    isRegistered: state.isRegistered,
    fingerprint: state.account.fingerprint,
    pin: state.account.pin
  }))

  useEffect(() => {
    startupConfig({
      isRegistered: account.isRegistered,
      fingerprint: account.fingerprint,
      pin: account.pin
    })
  }, [account])
}
