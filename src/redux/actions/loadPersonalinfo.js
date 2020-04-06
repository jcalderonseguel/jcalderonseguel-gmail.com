import { createActions } from 'reduxsauce';
import { GetPersonByIdApi } from '../../services/PersonApi';

const { Types, Creators } = createActions(
    {
      setInfoPerson: ['personalInfo'],      
      resetSate: null
    },
    {
      prefix: ''
    }
  );

  const {
    setInfoPerson,
   
  } = Creators;

  const {
    SET_INFO_PERSON,   
    
  } = Types;


  
   
  const getPersonById = (Id) => async dispatch => {
    const response = await GetPersonByIdApi(Id);
    if(response)
    {
      dispatch(setInfoPerson(response.data))
    }
      else {
        dispatch(setInfoPerson([]))
      }
    
  };
  


  export {
    Types,
    setInfoPerson,
    SET_INFO_PERSON,
    getPersonById,
  };

  export default Creators;