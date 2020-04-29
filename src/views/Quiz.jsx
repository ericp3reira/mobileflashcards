import React from 'react';

import {View} from 'react-native';

import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

// import { Container } from './styles';

// Cards out of order (random)
// Show question
// Show button to show answer
// Show answer
// Show buttons 'correct' and 'incorrect'
// Show score
// Show buttons 'Restart quiz' and 'back to deck'
const Quiz = () => <View />;

const mapStateToProps = state => ({});

// const mapDispatchToProps = dispatch =>
//   bindActionCreators(Actions, dispatch);

export default connect(
  mapStateToProps,
  // mapDispatchToProps
)(Quiz);
