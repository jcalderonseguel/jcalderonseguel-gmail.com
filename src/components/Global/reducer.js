
import { createReducer } from 'reduxsauce';
import  INITIAL_STATE  from "./state";
import produce from 'immer';
import {
  SET_LOGIN_SUCCESS,
  SET_CLOSE_OPEN_MENU
} from './actions';



const setCloseOpenMenu = produce(( state, { isOpenLateral }) => {
   
  state.isOpenLateral = isOpenLateral;
});


const setLoginSuccess = produce(( state, {isLogged }) => {
   
    state.isLogged = isLogged;
});


const globalReducer = createReducer(INITIAL_STATE, {
  [SET_LOGIN_SUCCESS]: setLoginSuccess,
  [SET_CLOSE_OPEN_MENU]: setCloseOpenMenu,
});

export { INITIAL_STATE };
export default globalReducer;

