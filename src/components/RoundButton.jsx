import React from 'react';
import {StyleSheet, TouchableOpacity, Text, View} from 'react-native';

const RoundButton = ({text, onPress}) => (
  <TouchableOpacity onPress={onPress} style={styles.container}>
    <View>
      <Text style={styles.label}>{text}</Text>
    </View>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  container: {
    width: 48,
    height: 48,
    backgroundColor: '#11ee11',
    borderRadius: 48,
    justifyContent: 'center',
    alignItems: 'center',
  },
  label: {
    color: '#ffffff',
    fontSize: 24,
    lineHeight: 24,
    fontWeight: '600',
  },
});

export default RoundButton;
