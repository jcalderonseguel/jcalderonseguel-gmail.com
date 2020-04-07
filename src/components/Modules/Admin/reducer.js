import { createReducer } from 'reduxsauce';
import  INITIAL_STATE  from "./state";
import produce from 'immer';
import {
  SET_DATA_PERSON
} from './actions';


const setDataPerson = produce(( state, { personList }) =>{
     state.personData = personList
});

const personReducer = createReducer(INITIAL_STATE, {
  [SET_DATA_PERSON]: setDataPerson,
 
});

export { INITIAL_STATE };
export default personReducer;