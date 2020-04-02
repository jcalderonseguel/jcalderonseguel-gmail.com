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

  // Todo: 1. Crear funcion para conectarse a la Api Local
const doLogin =(email, pass) =>async dispatch =>{
  const request = await doLoginApi(email, pass);
  // 2. Logica autentificacion: Rescato token de api
  // 2.1 le doy al token 15 minutos de validez.
  // 2.2 Extraigo data del token, Full name y Email y la seteo al state userData{}
  // 2.3 dejo token en storage y seteo state setLogingSuccess = true
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