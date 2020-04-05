import { createActions } from 'reduxsauce';
//import data from './Mock';
import axios from 'axios';
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


  const getPersonAPIById = (Id) => 

  axios.get(`http://localhost:5001/v1/persons/`,
    {
      params: {
        Id
      },
      headers:{
      'Authorization': `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImQ3NmJjNTYyLWQ2NmMtNGNmYS1hZjk4LTAzY2E5MDQ4YmVjOSIsIm5iZiI6MTU4NTc2OTMxNCwiZXhwIjoxNTg1ODU1NzE0LCJpYXQiOjE1ODU3NjkzMTR9.PT128KzxiKlJnVCHz7WjGNAZorIBXgh70WoonPZ3qVE`
    }}).catch((error) => {
      console.log(error)
    });
   
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
    getPersonById
  };

  export default Creators;