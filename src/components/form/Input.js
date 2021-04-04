import React from 'react';
import { StyleSheet, Text, TextInput } from 'react-native';

const Input = ({ label, onChange, name }) => {
  return (
    <>
      <Text style={styles.labelText}>{label}</Text>
      <TextInput
        style={styles.textInput}
        value={name}
        onChangeText={onChange}
      />
    </>
  );
}

const styles = StyleSheet.create({
  labelText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  textInput: {
    flex: 1,
    alignItems: 'stretch',
    backgroundColor: '#d1cdcd',
    fontSize: 16,
  },
});

export {Input};