import { Slot } from "expo-router";
import constants from "expo-constants";
import { useStartupConfig } from "hooks/startup-config";
import { StatusBar } from "expo-status-bar";
import { View } from "react-native";

export default function HomeLayout() {
	useStartupConfig();

	return (
		<View
			style={{
				paddingTop: constants.statusBarHeight,
				flex: 1,
			}}
		>
			<StatusBar style="light" />
			<Slot />
		</View>
	);
}
