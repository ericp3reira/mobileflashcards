import React, {useState} from 'react';
import {View, StyleSheet} from 'react-native';
import {useDispatch} from 'react-redux';
import {useNavigation} from '@react-navigation/native';

import {createDeck} from '../store/decks/actions';
import {showError} from '../store/errors/actions';
import Container from '../components/Container';
import InputField from '../components/InputField';
import Button from '../components/Button';
import ErrorToast from '../components/ErrorToast';

const NewDeck = () => {
  const dispatch = useDispatch();
  const {goBack} = useNavigation();

  const [title, setTitle] = useState('');

  const saveDeck = () => {
    if (!title) {
      dispatch(showError({message: 'Deck title cannot be empty'}));
      return;
    }

    dispatch(createDeck({title}));
    goBack();
  };

  return (
    <Container>
      <ErrorToast />
      <View style={styles.wrapper}>
        <InputField
          onChange={text => setTitle(text)}
          label={'Name:'}
          placeholder={'New deck name'}
        />
        <Button text={'Create Deck'} onPress={saveDeck} />
      </View>
    </Container>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    width: '100%',
    alignItems: 'center',
    marginBottom: 20,
  },
});

export default NewDeck;
