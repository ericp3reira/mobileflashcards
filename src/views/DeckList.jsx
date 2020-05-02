import React, {useEffect} from 'react';
import {View, Text, FlatList, StyleSheet} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {useNavigation} from '@react-navigation/native';

import {getDecks} from '../store/decks/actions';
import {getQuestions} from '../store/questions/actions';
import {NewDeckScreen, DeckScreen} from '../routes/routes';

import Button from '../components/Button';
import RoundButton from '../components/RoundButton';
import Container from '../components/Container';
import Card from '../components/DeckCard';

const DeckList = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const {data: decks} = useSelector(state => state.decks);
  const {data: questions} = useSelector(state => state.questions);

  useEffect(() => {
    dispatch(getDecks());
    dispatch(getQuestions());
  }, [dispatch]);

  return (
    <Container>
      {!decks || !decks.length ? (
        <View style={styles.noDecksContainer}>
          <Text>You have no decks</Text>
          <Text>How about create one?</Text>
          <Button
            onPress={() => navigation.navigate(NewDeckScreen)}
            text={'Create deck'}
          />
        </View>
      ) : (
        <>
          <FlatList
            style={styles.decklist}
            data={decks}
            keyExtractor={item => item.id}
            renderItem={({item}) => {
              const numQuestions =
                questions && questions[item.id] ? questions[item.id].length : 0;
              return (
                <Card
                  onPress={() => navigation.navigate(DeckScreen, {deck: item})}
                  numQuestions={numQuestions}
                  title={item.title}
                />
              );
            }}
          />
          <View style={styles.addDeckButtonContainer}>
            <RoundButton
              onPress={() => navigation.navigate(NewDeckScreen)}
              text={'+'}
            />
          </View>
        </>
      )}
    </Container>
  );
};

const styles = StyleSheet.create({
  noDecksContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  decklist: {
    flex: 1,
    width: '100%',
    padding: 20,
  },
  addDeckButtonContainer: {
    position: 'absolute',
    bottom: 40,
    right: 40,
  },
});

export default DeckList;
