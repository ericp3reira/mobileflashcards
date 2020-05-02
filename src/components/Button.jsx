import React from 'react';
import {StyleSheet, TouchableOpacity, Text} from 'react-native';

const Button = ({text, onPress, disabled = false}) => (
  <TouchableOpacity
    disabled={disabled}
    onPress={onPress}
    style={styles.container}
  >
    <Text style={styles.label}>{text}</Text>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  container: {
    paddingVertical: 12,
    paddingHorizontal: 20,
    width: 'auto',
    minWidth: 56,
    minHeight: 48,
    backgroundColor: '#11ee11',
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  label: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: '600',
  },
});

export default Button;
