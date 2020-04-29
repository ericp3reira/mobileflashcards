import {GET_DECKS, CREATE_DECK} from './types';

const initialState = {
  data: [],
};

let fakeDataStorage = [];

const decksReducer = (state = initialState, action) => {
  const {type, data} = action;
  console.log('data', data);

  switch (type) {
    case GET_DECKS:
      return state;
    case CREATE_DECK:
      fakeDataStorage.push(data);
      return {
        ...state,
        data: [...fakeDataStorage],
      };
    default:
      return state;
  }
};

export default decksReducer;
