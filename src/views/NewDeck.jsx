import React, {useState} from 'react';
import {View, TextInput, TouchableOpacity, Text} from 'react-native';
import {useDispatch} from 'react-redux';

import {createDeck} from '../store/decks/actions';
import {useNavigation} from '@react-navigation/native';
import {DeckListScreen} from '../routes/routes';

const NewDeck = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const [title, setTitle] = useState('');

  const saveDeck = () => {
    dispatch(createDeck({title}));
    navigation.navigate(DeckListScreen);
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
