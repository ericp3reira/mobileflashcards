import React, {useState} from 'react';
import {View, StyleSheet} from 'react-native';
import {useDispatch} from 'react-redux';

import {createDeck} from '../store/decks/actions';
import {useNavigation} from '@react-navigation/native';
import Container from '../components/Container';
import InputField from '../components/InputField';
import Button from '../components/Button';

const NewDeck = () => {
  const dispatch = useDispatch();
  const {goBack} = useNavigation();

  const [title, setTitle] = useState('');

  const saveDeck = () => {
    dispatch(createDeck({title}));
    goBack();
  };

  return (
    <Container headless>
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
  },
});

export default NewDeck;
