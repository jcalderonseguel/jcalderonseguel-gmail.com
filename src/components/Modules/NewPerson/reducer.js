
import { createReducer } from 'reduxsauce';
import  INITIAL_STATE  from "./state";
import produce from 'immer';
import {
    LOADING_CREATE_PERSON,
    OPEN_MODAL_SUCCESS
} from './actions';


const setLoading = produce(( state, { loading }) =>{
     state.isLoading = loading
});

const setOpenModalSuccess = produce((state, { openModalSuccess }) => {
  state.isOpenModalSuccess = openModalSuccess
});

const personReducer = createReducer(INITIAL_STATE, {
  [LOADING_CREATE_PERSON]: setLoading,
  [OPEN_MODAL_SUCCESS]: setOpenModalSuccess
});

export { INITIAL_STATE };
export default personReducer;
