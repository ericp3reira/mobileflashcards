import {
  GET_DECKS,
  GET_DECKS_SUCCESS,
  GET_DECKS_FAILURE,
  CREATE_DECK,
  CREATE_DECK_SUCCESS,
  CREATE_DECK_FAILURE,
} from './types';

const initialState = {
  data: [],
  error: null,
};

const decksReducer = (state = initialState, action) => {
  const {type, data, error} = action;

  switch (type) {
    case GET_DECKS:
    case CREATE_DECK:
      return state;
    case GET_DECKS_SUCCESS:
    case CREATE_DECK_SUCCESS:
      return {
        ...state,
        data,
        error: null,
      };
    case GET_DECKS_FAILURE:
    case CREATE_DECK_FAILURE:
      return {
        ...state,
        error,
      };
    default:
      return state;
  }
};

export default decksReducer;
