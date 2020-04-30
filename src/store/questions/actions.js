import {GET_QUESTIONS, CREATE_QUESTION} from './types';

export const getQuestions = () => ({
  type: GET_QUESTIONS,
});

export const createQuestion = ({deckId, question, answer}) => ({
  type: CREATE_QUESTION,
  data: {
    deckId,
    question,
    answer,
  },
});
