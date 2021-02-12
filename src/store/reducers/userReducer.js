const initialState = [];

const userReducer = (state= initialState, action ) => {
  switch (action.type) {
    case 'EDIT_USER' :
      return state.map(user => user.id === action.payload.id ? action.payload : user)
    case 'CREATE_USER':
      return [...state, action.payload]
    case 'DELETE_USER':
      return state.filter(user => user.id !== action.payload)
    case 'FETCH_USERS':
      return action.payload
    default:
    return state;
  }
}
 
export default userReducer;