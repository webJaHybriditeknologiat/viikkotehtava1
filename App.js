import { Button, StyleSheet, Text, TextInput, View } from 'react-native';
import { useState } from 'react'

export default function App() {
  const [age, setAge] = useState('')
  const [limits, setLimits] = useState('')

  const calculate = () => {
    const ageInput = Number(age)
    const lowerHeartRateLimit = Math.round((220 - ageInput) * 0.65)
    const upperHeartRateLimit = Math.round((220 - ageInput) * 0.85)
    setLimits(`${lowerHeartRateLimit} - ${upperHeartRateLimit}`)
  }

  return (
    <View style={styles.container}>
      <Text style={styles.field}>Age</Text>
      <TextInput
        style={styles.field}
        value={age}
        onChangeText={text => setAge(text)}
        keyboardType='decimal-pad'
      />
      <Text style={styles.field}>Limits</Text>
      <Text style={styles.field}>{limits}</Text>
      <Button title='Calculate' onPress={calculate}></Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 50,
    marginLeft: 10
  },
  field: {
    marginBottom: 10
  }
});
