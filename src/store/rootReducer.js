import {combineReducers} from 'redux';
import decksReducer from './decks/reducers';
import questionsReducer from './questions/reducers';

const rootReducer = combineReducers({
  decks: decksReducer,
  questions: questionsReducer,
});

export default rootReducer;
