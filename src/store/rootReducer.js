import {combineReducers} from 'redux';
import decksReducer from './decks/reducers';
import questionsReducer from './questions/reducers';
import errorsReducer from './errors/reducers';

const rootReducer = combineReducers({
  decks: decksReducer,
  questions: questionsReducer,
  error: errorsReducer,
});

export default rootReducer;
