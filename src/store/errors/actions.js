import {SHOW_ERROR, HIDE_ERROR} from './types';

export const showError = ({message}) => ({
  type: SHOW_ERROR,
  message,
});

export const hideError = () => ({
  type: HIDE_ERROR,
});
