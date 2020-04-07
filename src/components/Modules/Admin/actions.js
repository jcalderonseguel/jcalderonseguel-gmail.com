import { createActions } from 'reduxsauce';
import { GetPersonApi } from '../../../services/PersonApi';

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
   
  const getPerson = (documentNumber, idocType, gender, alias, email, phoneNumber) => async dispatch => {
    const response = await GetPersonApi(documentNumber, idocType, gender, alias, email, phoneNumber);
    
    if(response)
      dispatch(setDataPerson(response.data))
    else
      dispatch(setDataPerson([]))
  };


  export {
    Types,
    setDataPerson,
    SET_DATA_PERSON,
    getPerson
  };

  export default Creators;