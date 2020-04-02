import { createActions } from 'reduxsauce';
//import data from './Mock';
import axios from 'axios';
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


  const getPersonAPI = (documentNumber, idocType, gender, alias, email, phoneNumber) => 

  axios.get(`http://localhost:5001/v1/persons`,
    {
      params: {
        documentNumber,
        identificationDocumentTypeId: idocType,
        genderId: gender,
        email,
        alias,
        phoneNumber 
      },
      headers:{
      'Authorization': `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImQ3NmJjNTYyLWQ2NmMtNGNmYS1hZjk4LTAzY2E5MDQ4YmVjOSIsIm5iZiI6MTU4NTc2OTMxNCwiZXhwIjoxNTg1ODU1NzE0LCJpYXQiOjE1ODU3NjkzMTR9.PT128KzxiKlJnVCHz7WjGNAZorIBXgh70WoonPZ3qVE`
    }}).catch((error) => {
      console.log(error)
    });
   
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