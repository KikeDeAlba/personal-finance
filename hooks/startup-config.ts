import { router } from 'expo-router'
import { authentitcate } from 'expo-utils/auth'
import { useEffect } from 'react'
import { useAccount } from 'stores/user'
import { ROUTES } from 'utils/routes'

export const useStartupConfig = () => {
  const account = useAccount(state => ({
    isRegistered: state.isRegistered,
    fingerprint: state.account.fingerprint,
    pin: state.account.pin
  }))

  useEffect(() => {
    if (!account.isRegistered) {
      router.push(ROUTES.account.config.path)
    }

    if (account.fingerprint) authentitcate().then((success) => {
      if (success) router.push(ROUTES.home.path)
    })
  }, [account])
}
