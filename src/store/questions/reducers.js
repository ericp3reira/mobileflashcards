import {
  GET_QUESTIONS,
  GET_QUESTIONS_SUCCESS,
  GET_QUESTIONS_FAILURE,
  CREATE_QUESTION,
  CREATE_QUESTION_SUCCESS,
  CREATE_QUESTION_FAILURE,
} from './types';

const initialState = {
  data: null,
  error: null,
};

const questionsReducer = (state = initialState, action) => {
  const {type, data, error} = action;

  switch (type) {
    case GET_QUESTIONS:
    case CREATE_QUESTION:
      return state;
    case GET_QUESTIONS_SUCCESS:
    case CREATE_QUESTION_SUCCESS:
      return {
        ...state,
        data,
        error: null,
      };
    case GET_QUESTIONS_FAILURE:
    case CREATE_QUESTION_FAILURE:
      return {
        ...state,
        error,
      };
    default:
      return state;
  }
};

export default questionsReducer;
