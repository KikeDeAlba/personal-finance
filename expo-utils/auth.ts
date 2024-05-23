import * as LocalAuthentication from 'expo-local-authentication';


export const authentitcate = async () => {
    const { success } = await LocalAuthentication.authenticateAsync({
        promptMessage: 'Please authenticate to continue',
        fallbackLabel: 'Authenticate'
    })

    return success
}