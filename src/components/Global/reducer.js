
import { createReducer } from 'reduxsauce';
import  INITIAL_STATE  from "./state";

import {
  SET_LOGIN_SUCCESS
} from './actions';


export const setLoginSuccess = (state) => ({ ...state, isLogged: true });

const globalReducer = createReducer(INITIAL_STATE, {
  [SET_LOGIN_SUCCESS]: setLoginSuccess,

});

export { INITIAL_STATE };
export default globalReducer;

