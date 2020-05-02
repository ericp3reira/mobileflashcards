import 'react-native-gesture-handler';
import 'react-native-get-random-values';
import React, {useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {Provider} from 'react-redux';

import store from './store/store';

import {askNotificationPermissions} from './services/notifications';

import MainNavigator from './routes/MainNavigator';

const App = () => {
  useEffect(() => {
    askNotificationPermissions();
  }, []);

  return (
    <Provider store={store}>
      <NavigationContainer>
        <MainNavigator />
      </NavigationContainer>
    </Provider>
  );
};

export default App;
