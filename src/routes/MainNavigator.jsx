import React from 'react';
import {TouchableOpacity, Text} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';

import DeckList from '../views/DeckList';
import Deck from '../views/Deck';
import NewDeck from '../views/NewDeck';
import NewQuestion from '../views/NewQuestion';
import Quiz from '../views/Quiz';

import * as routes from './routes';

const Stack = createStackNavigator();

const MainNavigator = () => (
  <Stack.Navigator initialRouteName={routes.DeckListScreen}>
    <Stack.Screen
      name={routes.DeckListScreen}
      component={DeckList}
      options={({navigation}) => ({
        title: 'Decks',
        animationEnabled: true,
        headerRight: () => {
          return (
            <TouchableOpacity
              onPress={() => navigation.navigate(routes.NewDeckScreen)}
              style={{height: 48, width: 48, justifyContent: 'center'}}
            >
              <Text style={{fontSize: 20, fontWeight: 'bold'}}>+</Text>
            </TouchableOpacity>
          );
        },
      })}
    />
    <Stack.Screen
      name={routes.DeckScreen}
      component={Deck}
      options={({route}) => ({
        animationEnabled: true,
        title: route.params.deck.title,
      })}
    />
    <Stack.Screen
      name={routes.NewDeckScreen}
      component={NewDeck}
      options={{animationEnabled: true, title: 'New Deck'}}
    />
    <Stack.Screen
      name={routes.NewQuestionScreen}
      component={NewQuestion}
      options={{animationEnabled: true, title: 'New Question'}}
    />
    <Stack.Screen
      name={routes.QuizScreen}
      component={Quiz}
      options={{animationEnabled: true, title: 'decknamehere Quiz'}}
    />
  </Stack.Navigator>
);

export default MainNavigator;
