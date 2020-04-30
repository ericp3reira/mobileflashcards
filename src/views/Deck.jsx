import React, {useEffect} from 'react';

import {View, Text} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {useNavigation, useRoute} from '@react-navigation/native';
import {useDispatch, useSelector} from 'react-redux';

import {NewQuestionScreen, QuizScreen} from '../routes/routes';
import {getQuestions} from '../store/questions/actions';

const Deck = () => {
  const dispatch = useDispatch();
  const {navigate} = useNavigation();
  const {params} = useRoute();
  const {data: questions} = useSelector(state => state.questions);

  const {id: deckId, title} = params.deck;
  const deckQuestions = questions[deckId] || [];

  useEffect(() => {
    dispatch(getQuestions());
  });

  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>{title}</Text>
      <TouchableOpacity onPress={() => navigate(NewQuestionScreen, {deckId})}>
        <Text>Add new question</Text>
      </TouchableOpacity>
      <TouchableOpacity
        disabled={!deckQuestions.length}
        onPress={() => navigate(QuizScreen, {deckQuestions})}
      >
        <Text>Start quiz</Text>
      </TouchableOpacity>
      {!deckQuestions.length && (
        <View>
          <Text>Looks like you have no questions yet.</Text>
          <Text>What about adding one?</Text>
        </View>
      )}
    </View>
  );
};

export default Deck;
