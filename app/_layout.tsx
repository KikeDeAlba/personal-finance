import { Slot } from 'expo-router';
import { View } from 'react-native';
import constants from 'expo-constants';

export default function HomeLayout() {
  return (
    <View
        style={{
            flex: 1,
            paddingTop: constants.statusBarHeight
        }}
    >
        <Slot />
    </View>
  );
}