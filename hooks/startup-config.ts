import { router } from 'expo-router'
import { useEffect } from 'react'
import { useAccount } from 'stores/user'
import * as LocalAuthentication from 'expo-local-authentication';

export const useStartupConfig = () => {
  const account = useAccount(state => ({
    isRegistered: state.isRegistered,
    fingerprint: state.account.fingerprint,
    pin: state.account.pin
  }))

  console.log('account', account)

  useEffect(() => {
    if (!account.isRegistered) {
      router.push('/account/config')
    }

    if (account.fingerprint) {
      LocalAuthentication.authenticateAsync({
        promptMessage: 'Please authenticate to continue',
        fallbackLabel: 'Authenticate'
      }).then(({ success }) => {
        if (success) {
          router.push('/home')
        }
      })
    }
  }, [account])
}
