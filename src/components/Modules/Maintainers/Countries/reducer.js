
import { createReducer } from 'reduxsauce';
import  INITIAL_STATE  from "./state";
import produce from 'immer';
import {
  SET_DATA_COUNTRIES
} from './actions';


const setDataCountries = produce(( state, { countriesList }) =>{
     state.countriesData = countriesList
});

// const setDataCountries = produce(( state, { data }) => {
//     state.countriesData = data;
// });



const countriesReducer = createReducer(INITIAL_STATE, {
  [SET_DATA_COUNTRIES]: setDataCountries,
 
});

export { INITIAL_STATE };
export default countriesReducer;

