import {put, takeEvery} from 'redux-saga/effects';
import {
  CREATE_QUESTION,
  CREATE_QUESTION_SUCCESS,
  CREATE_QUESTION_FAILURE,
  GET_QUESTIONS,
  GET_QUESTIONS_SUCCESS,
  GET_QUESTIONS_FAILURE,
} from './types';
import {saveQuestion, fetchQuestions} from '../../services/asyncStorage';

export function* createQuestion({data}) {
  try {
    const {deckId, question, answer} = data;
    const newQuestion = {
      question,
      answer,
    };

    const questions = yield saveQuestion({deckId, question: newQuestion});

    yield put({type: CREATE_QUESTION_SUCCESS, data: questions});
  } catch (error) {
    yield put({type: CREATE_QUESTION_FAILURE, error});
  }
}

export function* getQuestions() {
  try {
    const questions = yield fetchQuestions();

    yield put({type: GET_QUESTIONS_SUCCESS, data: questions});
  } catch (error) {
    yield put({type: GET_QUESTIONS_FAILURE, error});
  }
}

export function* watchCreateQuestion() {
  yield takeEvery(CREATE_QUESTION, createQuestion);
}

export function* watchGetQuestions() {
  yield takeEvery(GET_QUESTIONS, getQuestions);
}
