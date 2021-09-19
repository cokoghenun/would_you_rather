import { _getUsers } from '../_DATA';

export default function user(state = {}, action) {
  switch (action.type) {
    case 'USERS_LOADED':
      return action.payload;
    default:
      return state;
  }
}

export async function fetchUsers(dispatch, getState) {
  const response = await _getUsers();
  dispatch({ type: 'USERS_LOADED', payload: response });
}
