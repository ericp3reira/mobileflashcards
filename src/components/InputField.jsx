import React from 'react';
import {TextInput, StyleSheet, View, Text} from 'react-native';

const InputField = ({onChange, placeholder = '', label = ''}) => (
  <View style={styles.container}>
    {!!label && <Text style={styles.label}>{label}</Text>}
    <TextInput
      placeholder={placeholder}
      onChangeText={onChange}
      style={styles.input}
    />
  </View>
);

const styles = StyleSheet.create({
  container: {
    width: '90%',
    marginVertical: 20,
  },
  label: {
    fontSize: 14,
    marginBottom: 12,
  },
  input: {
    width: '100%',
    height: 48,
    backgroundColor: '#fff',
    padding: 12,
    borderRadius: 8,
    textAlign: 'center',
  },
});

export default InputField;
