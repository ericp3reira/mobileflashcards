import {put, takeEvery} from 'redux-saga/effects';
import {
  CREATE_DECK,
  CREATE_DECK_SUCCESS,
  GET_DECKS_SUCCESS,
  CREATE_DECK_FAILURE,
  GET_DECKS_FAILURE,
  GET_DECKS,
} from './types';
import {saveDeck, fetchDecks} from '../../services/asyncStorage';

export function* createDeck({data}) {
  try {
    const deck = {
      title: data.title,
      answeredQuizzes: 0,
    };

    const decks = yield saveDeck(deck);

    yield put({type: CREATE_DECK_SUCCESS, data: decks});
  } catch (error) {
    yield put({type: CREATE_DECK_FAILURE, error});
  }
}

export function* getDecks() {
  try {
    const decks = yield fetchDecks();

    yield put({type: GET_DECKS_SUCCESS, data: decks});
  } catch (error) {
    yield put({type: GET_DECKS_FAILURE, error});
  }
}

export function* watchCreateDeck() {
  yield takeEvery(CREATE_DECK, createDeck);
}

export function* watchGetDecks() {
  yield takeEvery(GET_DECKS, getDecks);
}
