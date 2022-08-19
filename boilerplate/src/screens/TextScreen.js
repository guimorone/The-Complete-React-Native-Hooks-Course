import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput } from 'react-native';

const ERROR_MSG = 'Password must be longer than 5 characters';

const TextScreen = () => {
  const [name, setName] = useState('');

  return (
    <View>
      <TextInput
        style={styles.input}
        autoCapitalize="none"
        autoCorrect={false}
        value={name}
        onChangeText={value => setName(value)}
      />
      {name.length <= 5 && <Text>{ERROR_MSG}</Text>}
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    margin: 15,
    borderColor: 'black',
    borderWidth: 1,
  },
});

export default TextScreen;
