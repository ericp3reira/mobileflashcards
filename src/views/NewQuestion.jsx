import React, {useState} from 'react';
import {View, TextInput, TouchableOpacity, Text} from 'react-native';
import {useDispatch} from 'react-redux';

import {createQuestion} from '../store/questions/actions';
import {useNavigation, useRoute} from '@react-navigation/native';

const NewDeck = () => {
  const dispatch = useDispatch();
  const {goBack} = useNavigation();
  const {params} = useRoute();

  const {deckId} = params;

  const [question, setQuestion] = useState('');
  const [answer, setAnswer] = useState('');

  const saveQuestion = () => {
    dispatch(createQuestion({deckId, question, answer}));
    goBack();
  };

  return (
    <View>
      <Text>Question:</Text>
      <TextInput onChangeText={text => setQuestion(text)} />
      <Text>Answer:</Text>
      <TextInput onChangeText={text => setAnswer(text)} />
      <TouchableOpacity onPress={saveQuestion}>
        <Text>Create question</Text>
      </TouchableOpacity>
    </View>
  );
};

export default NewDeck;
