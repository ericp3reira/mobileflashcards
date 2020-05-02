import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {View, Text, StyleSheet} from 'react-native';

import {hideError} from '../store/errors/actions';

const ErrorToast = () => {
  const dispatch = useDispatch();
  const {show, message} = useSelector(state => state.error);

  if (show) {
    setTimeout(() => {
      dispatch(hideError());
    }, 4000);
  }

  return (
    show && (
      <View style={styles.errorContainer}>
        <Text style={styles.errorMessage}>{message}</Text>
      </View>
    )
  );
};

const styles = StyleSheet.create({
  errorContainer: {
    alignSelf: 'center',
    backgroundColor: 'red',
    marginTop: 20,
    width: '90%',
    padding: 20,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 8,
  },
  errorMessage: {
    color: '#fff',
    fontWeight: '600',
  },
});

export default ErrorToast;
