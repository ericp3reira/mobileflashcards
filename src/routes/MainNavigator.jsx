import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import DeckList from '../views/DeckList';
import Deck from '../views/Deck';
import NewDeck from '../views/NewDeck';
import NewCard from '../views/NewCard';
import Quiz from '../views/Quiz';

import * as routes from './routes';

const Stack = createStackNavigator();

const MainNavigator = () => (
  <Stack.Navigator initialRouteName={routes.DeckListScreen}>
    <Stack.Screen
      name={routes.DeckListScreen}
      component={DeckList}
      options={{
        title: 'Decks',
        animationEnabled: true,
        header: () => {},
      }}
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
      name={routes.NewCardScreen}
      component={NewCard}
      options={{animationEnabled: true, title: 'New Card'}}
    />
    <Stack.Screen
      name={routes.QuizScreen}
      component={Quiz}
      options={{animationEnabled: true, title: 'Quiz'}}
    />
  </Stack.Navigator>
);

export default MainNavigator;
