import {GET_DECKS, CREATE_DECK} from './types';

export const getDecks = () => ({
  type: GET_DECKS,
});

export const createDeck = ({title}) => ({
  type: CREATE_DECK,
  data: {
    title,
  },
});
