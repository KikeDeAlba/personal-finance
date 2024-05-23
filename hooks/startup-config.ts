import { router } from 'expo-router'
import { useEffect } from 'react'
import { useAccount } from 'stores/user'

export const useStartupConfig = () => {
  const account = useAccount(state => ({
    isRegistered: state.isRegistered,
    fingerprint: state.account.fingerprint,
    pin: state.account.pin
  }))

  useEffect(() => {
    if (!account.isRegistered) {
      router.push('/account/config')
    }
  }, [account])
}
