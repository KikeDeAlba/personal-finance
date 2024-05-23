import {
	StyledText,
	StyledTextInput,
	StyledTouchableHighlight,
	StyledView,
} from "components/styled";

export default function ConfigAccount() {
	return (
		<>
			<StyledView className="items-center flex-1 pt-32">
				<StyledText className="font-bold text-white text-xl">
					Cual es tu nombre?
				</StyledText>

				<StyledTextInput />

				<StyledTouchableHighlight>
					<StyledText>Siguiente</StyledText>
				</StyledTouchableHighlight>
			</StyledView>
		</>
	);
}
