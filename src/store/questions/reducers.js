import {uuid} from 'uuidv4';
import {CREATE_QUESTION, GET_QUESTIONS} from './types';

const initialState = {
  data: {},
};

let fakeDataStorage = {};

const questionsReducer = (state = initialState, action) => {
  const {type, data} = action;

  switch (type) {
    case GET_QUESTIONS:
      return state;
    case CREATE_QUESTION:
      const question = {
        id: uuid(),
        question: data.question,
        answer: data.answer,
      };

      fakeDataStorage[data.deckId] = fakeDataStorage[data.deckId]
        ? [...fakeDataStorage[data.deckId], question]
        : [question];

      return {
        ...state,
        data: fakeDataStorage,
      };
    default:
      return state;
  }
};

export default questionsReducer;
