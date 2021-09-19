
export default function user(state = {}, action) {
  switch (action.type) {
    case 'GET_USER':
      return state;
    case 'UPDATE_USER':
      return action.payload;
    default:
      return state;
  }
}
