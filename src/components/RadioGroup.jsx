import React, {useState} from 'react';
import {StyleSheet, View, TouchableOpacity, Text} from 'react-native';

const RadioGroup = ({onSelect}) => {
  const [selected, setSelected] = useState('');

  const handleSelect = answer => {
    setSelected(answer);
    if (answer === 'correct') {
      onSelect(true);
    }
    if (answer === 'incorrect') {
      onSelect(false);
    }
  };

  return (
    <View>
      <TouchableOpacity
        onPress={() => handleSelect('correct')}
        style={styles.optionContainer}
      >
        <Text style={styles.optionText}>
          {selected === 'correct' ? '✅' : '◻️'} Correct
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => handleSelect('incorrect')}
        style={styles.optionContainer}
      >
        <Text style={styles.optionText}>
          {selected === 'incorrect' ? '❌' : '◻️'} Incorrect
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  optionContainer: {
    height: 48,
    alignItems: 'center',
    justifyContent: 'center',
  },
  optionText: {
    fontSize: 16,
  },
});

export default RadioGroup;
