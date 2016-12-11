import { combineReducers } from 'redux';
import registerReducer from './register_reducer';
import loginReducer from './login_reducer';

export default combineReducers({
  register: registerReducer,
  login   : loginReducer,
});
