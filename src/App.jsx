import 'react-native-gesture-handler';
import React from 'react';
import {SafeAreaView} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {Provider} from 'react-redux';

import store from './store/store';

import MainNavigator from './routes/MainNavigator';

const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <SafeAreaView>
          <MainNavigator />
        </SafeAreaView>
      </NavigationContainer>
    </Provider>
  );
};

export default App;
