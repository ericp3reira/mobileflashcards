import React from 'react';

import {View, Text, StyleSheet} from 'react-native';
import {useNavigation, useRoute} from '@react-navigation/native';
import {useSelector} from 'react-redux';

import {NewCardScreen, QuizScreen} from '../routes/routes';
import {shuffleArray} from '../services/utils';
import Button from '../components/Button';
import Container from '../components/Container';

const Deck = () => {
  const {navigate} = useNavigation();

  const {params} = useRoute();
  const {id: deckId, title} = params.deck;

  const questions = useSelector(state => state.questions.data[deckId]) || [];

  return (
    <Container>
      <View style={styles.deckContainer}>
        <Text style={styles.title}>{title}</Text>
        <View style={styles.questionsContainer}>
          {!questions.length ? (
            <>
              <Text>Looks like you have no questions yet.</Text>
              <Text>What about adding one?</Text>
            </>
          ) : (
            <Text>Cards: {questions.length}</Text>
          )}
          <Button
            onPress={() => navigate(NewCardScreen, {deckId})}
            text={'Add card'}
          />
        </View>
        <Button
          disabled={!questions.length}
          onPress={() =>
            navigate(QuizScreen, {deckId, questions: shuffleArray(questions)})
          }
          text={'Start a quiz'}
        />
      </View>
    </Container>
  );
};

const styles = StyleSheet.create({
  deckContainer: {
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  title: {fontSize: 24, fontWeight: '600'},
  questionsContainer: {
    alignItems: 'center',
    height: '30%',
    justifyContent: 'space-evenly',
  },
});

export default Deck;
