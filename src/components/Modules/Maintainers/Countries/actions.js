import { createActions } from 'reduxsauce';

import {
  getCountrysApi
} from '../../../../services/app';

const { Types, Creators } = createActions(
    {
      setDataCountries: ['countriesList'],      
      resetSate: null
    },
    {
      prefix: 'Countries/'
    }
  );

  const {
    setDataCountries,
   
  } = Creators;

  const {
    SET_DATA_COUNTRIES,   
    
  } = Types;


  const getCountries = () => async dispatch => {
    const request = await getCountrysApi();
  
    if (request.status === 200) {

           dispatch(setDataCountries(request.data))
      
      
    }
  };



  export {
    Types,
    setDataCountries,
    SET_DATA_COUNTRIES,
    getCountries
  };

  export default Creators;