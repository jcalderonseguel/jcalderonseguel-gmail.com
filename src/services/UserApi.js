import axios from "axios";



const createUserApi = async (
  name,
  email,
  password,
) => {

 

    

    return axios
      .get("http://localhost:5001/v1/persons", {
       
        params: {
          name,
          email,
          password
        }
      })
      .catch(err => {
        console.log(err);
      })
    }

 

export { createUserApi };
