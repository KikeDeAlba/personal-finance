import { Text, TextInput, TouchableHighlight, View } from "react-native";

export default function ConfigAccount() {
	return (
		<>
			<View>
				<Text>Cual es tu nombre?</Text>

				<TextInput />

				<TouchableHighlight>
					<Text>Siguiente</Text>
				</TouchableHighlight>
			</View>
		</>
	);
}
