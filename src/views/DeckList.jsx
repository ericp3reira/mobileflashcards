import React, {useEffect} from 'react';
import {View, Text, TouchableOpacity, FlatList} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {getDecks} from '../store/decks/actions';
import {useNavigation} from '@react-navigation/native';
import {NewDeckScreen, DeckScreen} from '../routes/routes';

const DeckList = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const {data: decks} = useSelector(state => state.decks);

  useEffect(() => {
    dispatch(getDecks());
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
          keyExtractor={(item, index) => {
            console.log(`${item.title}-${index}`);
            return `${item.title}-${index}`;
          }}
          renderItem={({item}) => {
            return (
              <TouchableOpacity
                onPress={() => navigation.navigate(DeckScreen, {deck: item})}
              >
                <Text>{item.title}</Text>
                <Text>{item.questions.length} 🃏</Text>
              </TouchableOpacity>
            );
          }}
        />
      )}
    </View>
  );
};

export default DeckList;
