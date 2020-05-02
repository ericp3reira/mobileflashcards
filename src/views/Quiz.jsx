import React, {useState} from 'react';

import {View, Text, StyleSheet} from 'react-native';
import {useNavigation, useRoute} from '@react-navigation/native';
import {useSelector} from 'react-redux';

import Button from '../components/Button';
import Container from '../components/Container';
import RadioGroup from '../components/RadioGroup';
import {scheduleNotifications} from '../services/notifications';

const Quiz = () => {
  const {goBack} = useNavigation();

  const {
    params: {deckId},
  } = useRoute();

  const questions = useSelector(state => state.questions.data[deckId]) || [];

  const [index, setIndex] = useState(0);
  const [question, setQuestion] = useState(questions[index]);
  const [isAnswer, showAnswer] = useState(false);
  const [isCorrect, setCorrect] = useState(null);
  const [answers, updateAnswers] = useState([]);
  const [isFinished, setFinished] = useState(false);

  const handleNextQuestion = () => {
    updateAnswers([...answers, isCorrect]);
    showAnswer(false);
    setCorrect(null);
    setQuestion(questions[index + 1]);
    setIndex(index + 1);
  };

  const showResult = () => {
    updateAnswers([...answers, isCorrect]);
    setFinished(true);
    scheduleNotifications();
  };

  const restartQuiz = () => {
    setIndex(0);
    setQuestion(questions[0]);
    showAnswer(false);
    setCorrect(null);
    updateAnswers([]);
    setFinished(false);
  };

  return (
    <Container>
      {!isFinished ? (
        <View style={styles.container}>
          {!isAnswer ? (
            <>
              <Text style={styles.questionCounter}>
                {index + 1}/{questions.length}
              </Text>
              <Text style={styles.mainText}>{question.question}</Text>
              <View style={styles.button}>
                <Button onPress={() => showAnswer(true)} text={'Show Answer'} />
              </View>
            </>
          ) : (
            <>
              <Text style={styles.mainText}>{question.answer}</Text>
              <RadioGroup onSelect={answer => setCorrect(answer)} />
              <View style={styles.button}>
                {index + 1 < questions.length ? (
                  <Button
                    onPress={handleNextQuestion}
                    text={'Show next question'}
                    disabled={isCorrect === null}
                  />
                ) : (
                  <Button
                    onPress={showResult}
                    text={'Show results'}
                    disabled={isCorrect === null}
                  />
                )}
              </View>
            </>
          )}
        </View>
      ) : (
        <View style={styles.container}>
          <Text style={styles.mainText}>You got</Text>
          <Text style={styles.resultText}>
            {answers.filter(Boolean).length} out of {questions.length}
          </Text>
          <View style={styles.button}>
            <Button onPress={restartQuiz} text={'Restart Quiz'} />
          </View>
          <View style={styles.button}>
            <Button onPress={() => goBack()} text={'Back to Deck'} />
          </View>
        </View>
      )}
    </Container>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '90%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  questionCounter: {
    position: 'absolute',
    top: 12,
    fontSize: 16,
  },
  mainText: {
    fontSize: 20,
    marginBottom: 20,
  },
  resultText: {
    fontSize: 28,
    marginBottom: 20,
  },
  button: {
    marginTop: 20,
  },
});

export default Quiz;
