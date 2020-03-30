import { createActions } from 'reduxsauce';


//creo acciones y la data que recibe "argumentos"
const { Types, Creators } = createActions(
    {
      setLoginSuccess: ['isLogged'],
      setCloseOpenMenu: ["isOpenLateral"]
    
    },
    {
      prefix: 'GLOBAL/'
    }
  );

// Obtengo las acciones para utilizarlas
const {
    setLoginSuccess,
    setCloseOpenMenu

  } = Creators;

// es como action.type === "RESET_STATE"
const {
     SET_LOGIN_SUCCESS,
     SET_CLOSE_OPEN_MENU
  } = Types;



  export {
    Types,   
    setLoginSuccess,
    setCloseOpenMenu,
    SET_LOGIN_SUCCESS,
    SET_CLOSE_OPEN_MENU
    
  };
  
  export default Creators;