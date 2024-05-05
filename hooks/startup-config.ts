import { router } from 'expo-router'
import { useEffect } from 'react'
import { useAccount } from 'stores/user'

export const useStartupConfig = () => {
  const account = useAccount(state => ({
    isLogged: state.isLogged,
    fingerprint: state.account.fingerprint,
    pin: state.account.pin
  }))

  useEffect(() => {
    if (!account.isLogged) {
      router.push('/account/config')
    }
  }, [])
}
