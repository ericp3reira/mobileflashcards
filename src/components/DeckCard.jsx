import React from 'react';
import {TouchableOpacity, Text, StyleSheet} from 'react-native';

const Card = ({title, numQuestions, onPress}) => (
  <TouchableOpacity onPress={onPress} style={styles.container}>
    <Text ellipsizeMode="tail" numberOfLines={2} style={styles.title}>
      {title}
    </Text>
    <Text>🃏{numQuestions} cards</Text>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  container: {
    height: 100,
    width: '100%',
    borderWidth: 2,
    borderColor: '#ccc',
    borderRadius: 8,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 20,
    marginBottom: 16,
  },
  title: {fontSize: 20, fontWeight: '600', flex: 1, marginRight: 12},
});

export default Card;
