import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';

const Container = ({children}) => (
  <SafeAreaView
    style={{flex: 1, justifyContent: 'flex-start', alignItems: 'center'}}
  >
    {children}
  </SafeAreaView>
);

const styles = StyleSheet.create({
  header: {
    height: 60,
    width: '100%',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: 'red',
  },
});

export default Container;
