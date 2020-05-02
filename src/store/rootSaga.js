import {all} from 'redux-saga/effects';
import {watchCreateDeck, watchGetDecks} from './decks/sagas';
import {watchCreateQuestion, watchGetQuestions} from './questions/sagas';

function* rootSaga() {
  yield all([
    watchCreateDeck(),
    watchGetDecks(),
    watchCreateQuestion(),
    watchGetQuestions(),
  ]);
}

export default rootSaga;
