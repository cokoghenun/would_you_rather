import { _getQuestions, _saveQuestion, _saveQuestionAnswer } from '../_DATA';

export default function questions(state = [], action) {
  switch (action.type) {
    case 'QUESTION_LOADED':
      return action.payload;
    case 'ADD_QUESTION':
      return state.concat([action.payload]);
    default:
      return state;
  }
}

export async function fetchQuestions(dispatch, getState) {
  const response = await _getQuestions();
  dispatch({
    type: 'QUESTION_LOADED',
    payload: Object.keys(response).map((key) => response[key]),
  });
}

export function saveQuestion(question) {
  return async function saveNewQuestionThunk(dispatch, getState) {
    const response = await _saveQuestion(question);
    dispatch({ type: 'ADD_QUESTION', payload: response });
  };
}

export function saveQuestionAnswer(answer) {
  return async function saveNewQuestionAnswerThunk(dispatch, getState) {
    await _saveQuestionAnswer(answer);
    await fetchQuestions(dispatch, getState);
  };
}
