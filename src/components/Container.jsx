import React from 'react';
import {SafeAreaView, View, StyleSheet} from 'react-native';

const Container = ({children, headless}) => (
  <SafeAreaView
    style={{flex: 1, justifyContent: 'flex-start', alignItems: 'center'}}
  >
    {!headless && <View style={styles.header} />}
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
