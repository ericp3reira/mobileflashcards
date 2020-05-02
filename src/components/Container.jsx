import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';

const Container = ({children}) => (
  <SafeAreaView style={styles.container}>{children}</SafeAreaView>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
});

export default Container;
