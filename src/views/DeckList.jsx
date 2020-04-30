import React, {useEffect} from 'react';
import {View, Text, TouchableOpacity, FlatList} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {getDecks} from '../store/decks/actions';
import {getQuestions} from '../store/questions/actions';
import {useNavigation} from '@react-navigation/native';
import {NewDeckScreen, DeckScreen} from '../routes/routes';

const DeckList = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const {data: decks} = useSelector(state => state.decks);
  const {data: questions} = useSelector(state => state.questions);

  useEffect(() => {
    dispatch(getDecks());
    dispatch(getQuestions());
  });

  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      {!decks.length ? (
        <View style={{justifyContent: 'center', alignItems: 'center'}}>
          <Text>You have no decks</Text>
          <Text>How about create one?</Text>
          <TouchableOpacity onPress={() => navigation.navigate(NewDeckScreen)}>
            <Text>Create deck</Text>
          </TouchableOpacity>
        </View>
      ) : (
        <FlatList
          style={{flex: 1}}
          data={decks}
          keyExtractor={(item, index) => `${item.title}-${index}`}
          renderItem={({item}) => {
            const deckQuestions = questions[item.id]
              ? questions[item.id].length
              : 0;
            return (
              <TouchableOpacity
                onPress={() => navigation.navigate(DeckScreen, {deck: item})}
              >
                <Text>{item.title}</Text>
                <Text>{deckQuestions} 🃏</Text>
              </TouchableOpacity>
            );
          }}
        />
      )}
    </View>
  );
};

export default DeckList;
