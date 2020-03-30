import { createActions } from 'reduxsauce';

import {
  getCountrysApi
} from '../../../../services/app';

const { Types, Creators } = createActions(
    {
      setDataCountries: ['countriesList'],      
    },
    {
      prefix: 'GETDOCUMENT/'
    }
  );

  const {
    setDataCountries
  } = Creators;

  const {
    SET_DATA_COUNTRIES,
    
  } = Types;


  const getCountries = () => async dispatch => {
    const request = await getCountrysApi();
  
    if (request.status === 200) {

           dispatch(setDataCountries(request.data.slice(0,10)))
      
      
    }
  };



  export {
    Types,
    setDataCountries,
    SET_DATA_COUNTRIES,
    getCountries
  };

  export default Creators;