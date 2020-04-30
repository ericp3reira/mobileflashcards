import {uuid} from 'uuidv4';
import {GET_DECKS, CREATE_DECK} from './types';

const initialState = {
  data: [],
};

let fakeDataStorage = [];

const decksReducer = (state = initialState, action) => {
  const {type, data} = action;

  switch (type) {
    case GET_DECKS:
      return state;
    case CREATE_DECK:
      const deck = {
        id: uuid(),
        title: data.title,
      };

      fakeDataStorage.push(deck);

      return {
        ...state,
        data: [...fakeDataStorage],
      };
    default:
      return state;
  }
};

export default decksReducer;
