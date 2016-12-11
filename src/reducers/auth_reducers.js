import { POST_SIGNIN_PLEASE } from '../actions/index';

export default function(state = {}, action) {
  switch(action.type) {
    case POST_SIGNIN_PLEASE:
      console.log('inside reducer')
      return {...state, token: action.payload}
    default:
      return state;
  }
}
