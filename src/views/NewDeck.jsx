import React, {useState} from 'react';
import {View, TextInput, TouchableOpacity, Text} from 'react-native';
import {useDispatch} from 'react-redux';

import {createDeck} from '../store/decks/actions';
import {useNavigation} from '@react-navigation/native';

const NewDeck = () => {
  const dispatch = useDispatch();
  const {goBack} = useNavigation();

  const [title, setTitle] = useState('');

  const saveDeck = () => {
    dispatch(createDeck({title}));
    goBack();
  };

  return (
    <View>
      <TextInput onChangeText={text => setTitle(text)} />
      <TouchableOpacity onPress={saveDeck}>
        <Text>Create Deck</Text>
      </TouchableOpacity>
    </View>
  );
};

export default NewDeck;
