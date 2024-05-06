import { StyledText, StyledTextInput, StyledTouchableHighlight, StyledView } from 'components/styled'
// import { useState } from 'react'

export default function ConfigAccount () {
  // const [section, setSection] = useState(0)

  return (
    <>
      <StyledView className='items-center flex-1 pt-32'>
        <StyledText className='font-bold'>Cual es tu nombre?</StyledText>

        <StyledTextInput />

        <StyledTouchableHighlight>
          <StyledText>
            Siguiente
          </StyledText>
        </StyledTouchableHighlight>
      </StyledView>
    </>
  )
}
