import { Text, TextInput, TouchableOpacity, View } from "react-native";
import {useState} from "react"
import { DateTimePickerAndroid} from "@react-native-community/datetimepicker"; 

export default function ConfigAccount() {
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [pin, setPin] = useState(null)
	const [dateOfBirth, setDateOfBirth] = useState(new Date())
	const [fingerprint, setFingerPrint] = useState(false)

	
	const pickDate = () => {
		DateTimePickerAndroid.open({
			value:dateOfBirth,
			mode:"date",
			onChange(event, date) {
				if (date != null) {
				const newDate =	new Date(date)
					newDate.setDate(newDate.getDate()) 
					setDateOfBirth(date)
				}
			},
		}) 
	}

	console.log(dateOfBirth.toISOString())
	return (
		<>
			<View>
				<TextInput onChangeText={setName}>
					<Text>Nombre</Text>
				</TextInput>
				<TextInput onChangeText={setEmail}>
					<Text>Email</Text>
				</TextInput>
				<TouchableOpacity onPress={pickDate} >
					<Text>Fecha De Nacimiento</Text>
				</TouchableOpacity>
			</View>
		</>
	);
}

fingerprint: false