
import axios from 'axios';

  const createUser = (name, email, password) => {

  axios.get(`http://localhost:5000/v1/persons/createUser`,
    {
      params: {
        name,
        email,
        password 
      },
     }).catch((error) => {
      console.log(error)
    });
  };
   
  export default createUser;