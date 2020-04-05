import { createReducer } from 'reduxsauce';
import produce from 'immer';
import {
  SET_INFO_PERSON
} from '../actions/loadPersonalinfo';


const INITIAL_STATE = {
    personInfo: []
   
 };
const setDataPersonReducer = produce(( state, { personalInfo }) =>{
     state.personInfo = personalInfo
});

const personalinfo = createReducer(INITIAL_STATE, {
  [SET_INFO_PERSON]: setDataPersonReducer,
 
});

export { INITIAL_STATE };
export default personalinfo;