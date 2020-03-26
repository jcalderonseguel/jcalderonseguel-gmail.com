import { createActions } from 'reduxsauce';

//creo acciones y la data que recibe "argumentos"
const { Types, Creators } = createActions(
    {
      setLoginSuccess: null,
    
    },
    {
      prefix: 'GLOBAL/'
    }
  );

// Obtengo las acciones para utilizarlas
const {
    setLoginSuccess
  } = Creators;

// es como action.type === "RESET_STATE"
const {
     SET_LOGIN_SUCCESS,
  } = Types;

  export {
    Types,   
    setLoginSuccess,
    SET_LOGIN_SUCCESS,
  };
  
  export default Creators;