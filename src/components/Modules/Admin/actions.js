import { createActions } from 'reduxsauce';
import data from './Mock';

const { Types, Creators } = createActions(
    {
      setDataPerson: ['personList'],      
      resetSate: null
    },
    {
      prefix: 'Person/'
    }
  );

  const {
    setDataPerson,
   
  } = Creators;

  const {
    SET_DATA_PERSON,   
    
  } = Types;


  const getPerson = () => async dispatch => {
    dispatch(setDataPerson(data))
  };



  export {
    Types,
    setDataPerson,
    SET_DATA_PERSON,
    getPerson
  };

  export default Creators;