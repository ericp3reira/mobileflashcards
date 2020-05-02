import {SHOW_ERROR, HIDE_ERROR} from './types';

const initialState = {
  message: '',
  show: false,
};

const errorsReducer = (state = initialState, action) => {
  const {type, message} = action;

  switch (type) {
    case SHOW_ERROR:
      return {
        show: true,
        message,
      };
    case HIDE_ERROR:
      return {
        ...initialState,
      };
    default:
      return state;
  }
};

export default errorsReducer;
