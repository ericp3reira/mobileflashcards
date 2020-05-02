import React, {useState} from 'react';

import {View, Text} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {useNavigation, useRoute} from '@react-navigation/native';
import {useSelector} from 'react-redux';

import {NewCardScreen, QuizScreen} from '../routes/routes';

const Deck = () => {
  const {navigate} = useNavigation();

  const {params} = useRoute();
  const {deckId} = params;

  const questions = useSelector(state => state.questions.data[deckId]);
  const [index, setIndex] = useState(0);
  const [question, setQuestion] = useState(questions[index]);
  const [isAnswer, showAnswer] = useState(false);
  const [correctAnswers, updateCorrectAnswers] = useState(0);

  const handleAnswer = isAnswerCorrect => {
    isAnswerCorrect && updateCorrectAnswers(correctAnswers + 1);
  };

  const handleNextQuestion = () => {
    showAnswer(false);
    setQuestion(questions[index + 1]);
    setIndex(index + 1);
  };

  const showResult = () => {
    console.warn('result', correctAnswers);
  };

  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      {!isAnswer ? (
        <>
          <Text>{question.question}</Text>
          <TouchableOpacity onPress={() => showAnswer(true)}>
            <Text>Show Answer</Text>
          </TouchableOpacity>
        </>
      ) : (
        <>
          <Text>{question.answer}</Text>
          <TouchableOpacity onPress={() => handleAnswer(true)} />
          <Text>Correct</Text>
          <TouchableOpacity onPress={() => handleAnswer(false)} />
          <Text>Incorrect</Text>
          {index + 1 < questions.length ? (
            <TouchableOpacity onPress={handleNextQuestion}>
              <Text>Show next question</Text>
            </TouchableOpacity>
          ) : (
            <TouchableOpacity onPress={showResult}>
              <Text>Show results</Text>
            </TouchableOpacity>
          )}
        </>
      )}
    </View>
  );
};

export default Deck;
