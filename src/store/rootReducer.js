import {combineReducers} from 'redux';
import decksReducer from './decks/reducers';

const rootReducer = combineReducers({
  decks: decksReducer,
});

export default rootReducer;
