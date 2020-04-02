import { createActions } from 'reduxsauce';

import {
  doLoginApi
} from '../../services/app';
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

const doLogin =(email, pass) =>async dispatch =>{
  const request = await doLoginApi(email, pass);
  console.log("fui a la api de person:>",request.status)
}

  export {
    Types,
    setLoginSuccess,
    setCloseOpenMenu,
    SET_LOGIN_SUCCESS,
    SET_CLOSE_OPEN_MENU,
    doLogin
  };
  
  export default Creators;