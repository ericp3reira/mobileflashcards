import React, {useState} from 'react';
import {View, StyleSheet} from 'react-native';
import {useDispatch} from 'react-redux';
import {useNavigation, useRoute} from '@react-navigation/native';

import {createQuestion} from '../store/questions/actions';
import {showError} from '../store/errors/actions';
import Button from '../components/Button';
import InputField from '../components/InputField';
import Container from '../components/Container';
import ErrorToast from '../components/ErrorToast';

const NewCard = () => {
  const dispatch = useDispatch();
  const {goBack} = useNavigation();
  const {
    params: {deckId},
  } = useRoute();

  const [question, setQuestion] = useState('');
  const [answer, setAnswer] = useState('');

  const saveQuestion = () => {
    if (!question) {
      dispatch(showError({message: 'Question should not be blank'}));
      return;
    }

    if (!answer) {
      dispatch(showError({message: 'Answer should not be blank'}));
      return;
    }

    dispatch(createQuestion({deckId, question, answer}));
    goBack();
  };

  return (
    <Container>
      <ErrorToast />
      <View style={styles.inputWrapper}>
        <InputField label={'Question:'} onChange={text => setQuestion(text)} />
        <InputField label={'Answer:'} onChange={text => setAnswer(text)} />
      </View>
      <Button onPress={saveQuestion} text={'Create question'} />
    </Container>
  );
};

const styles = StyleSheet.create({
  inputWrapper: {
    width: '100%',
    alignItems: 'center',
    marginBottom: 20,
  },
});

export default NewCard;
