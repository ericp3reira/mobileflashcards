import React, {useEffect} from 'react';

import {View, Text} from 'react-native';
import {useNavigation, useRoute} from '@react-navigation/native';
import {useDispatch, useSelector} from 'react-redux';

import {NewCardScreen, QuizScreen} from '../routes/routes';
import {getQuestions} from '../store/questions/actions';
import Button from '../components/Button';
import Container from '../components/Container';

const Deck = () => {
  const dispatch = useDispatch();
  const {navigate} = useNavigation();

  const {params} = useRoute();
  const {id: deckId, title} = params.deck;

  const questions = useSelector(state => state.questions.data[deckId]) || [];

  useEffect(() => {
    dispatch(getQuestions());
  }, [dispatch]);

  return (
    <Container headless>
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Text>{title}</Text>
        <Text>Questions: {questions.length}</Text>
        <Button
          onPress={() => navigate(NewCardScreen, {deckId})}
          text={'Add card'}
        />
        <Button
          disabled={!questions.length}
          onPress={() => navigate(QuizScreen, {deckId})}
          text={'Start a quiz'}
        />
        {!questions.length && (
          <View>
            <Text>Looks like you have no questions yet.</Text>
            <Text>What about adding one?</Text>
          </View>
        )}
      </View>
    </Container>
  );
};

export default Deck;
