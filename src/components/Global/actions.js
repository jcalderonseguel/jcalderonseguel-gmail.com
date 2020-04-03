import { createActions } from "reduxsauce";

import { getUserLoggedApi } from "../../services/app";
//creo acciones y la data que recibe "argumentos"
const { Types, Creators } = createActions(
  {
    setLoginSuccess: ["isLogged"],
    setCloseOpenMenu: ["isOpenLateral"]
  },
  {
    prefix: "GLOBAL/"
  }
);

// Todo: 1. Crear funcion para conectarse a la Api Local
//       2. Logica autentificacion: Rescato dato api (email,password) =>token
//       3. Exitoso: setLoginSuccess = true, dejar la informacion de la api en el localstorage.
// Obtengo las acciones para utilizarlas
const { setLoginSuccess, setCloseOpenMenu } = Creators;

// es como action.type === "RESET_STATE"
const { SET_LOGIN_SUCCESS, SET_CLOSE_OPEN_MENU } = Types;

const loginUser = () => async dispatch => {
  const req = await getUserLoggedApi();

  if (req.status === 200) {
    dispatch(setLoginSuccess(req.data));
  }
};

export {
  Types,
  setLoginSuccess,
  setCloseOpenMenu,
  SET_LOGIN_SUCCESS,
  SET_CLOSE_OPEN_MENU,
  loginUser
};

export default Creators;
