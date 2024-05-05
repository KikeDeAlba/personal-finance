import { useState } from 'react'
import { Text, TextInput, TouchableHighlight, View } from 'react-native'

export default function ConfigAccount () {
  const [section, setSection] = useState(0)

  return (
    <>
      <View>
        <Text>Cual es tu nombre?</Text>

        <TextInput />

        <TouchableHighlight>
          <Text>
            Siguiente
          </Text>
        </TouchableHighlight>
      </View>
    </>
  )
}
