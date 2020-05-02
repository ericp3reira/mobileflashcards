import AsyncStorage from '@react-native-community/async-storage';
import {uuid} from 'uuidv4';

const decksStorageKey = '@mobileflashcards_decks_key';
const questionsStorageKey = '@mobileflashcards_questions_key';

export const saveDeck = async deck => {
  try {
    let decks = await fetchDecks();
    decks = [...decks, {id: uuid(), ...deck}];

    await AsyncStorage.setItem(decksStorageKey, JSON.stringify(decks));

    return decks;
  } catch (error) {
    return error;
  }
};

export const fetchDecks = async () => {
  try {
    let decks = await AsyncStorage.getItem(decksStorageKey);
    decks = JSON.parse(decks) || [];

    return decks;
  } catch (error) {
    return error;
  }
};

export const saveQuestion = async ({question, deckId}) => {
  try {
    let questions = await fetchQuestions();
    questions[deckId] = questions[deckId]
      ? [...questions[deckId], {id: uuid(), ...question}]
      : [{id: uuid(), ...question}];

    await AsyncStorage.setItem(questionsStorageKey, JSON.stringify(questions));

    return questions;
  } catch (error) {
    return error;
  }
};

export const fetchQuestions = async () => {
  try {
    let questions = await AsyncStorage.getItem(questionsStorageKey);
    questions = JSON.parse(questions) || {};

    return questions;
  } catch (error) {
    return error;
  }
};
