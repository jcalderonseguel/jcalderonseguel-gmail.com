import { createActions } from "reduxsauce";
import jwt from "jsonwebtoken";
import { doLoginApi } from "../../services/app";
//creo acciones y la data que recibe "argumentos"
const { Types, Creators } = createActions(
  {
    setLoginSuccess: ["isLogged"],
    setCloseOpenMenu: ["isOpenLateral"],
  },
  {
    prefix: "GLOBAL/",
  }
);

// Obtengo las acciones para utilizarlas
const { setLoginSuccess, setCloseOpenMenu } = Creators;

// es como action.type === "RESET_STATE"
const { SET_LOGIN_SUCCESS, SET_CLOSE_OPEN_MENU } = Types;

// Todo: 1. Crear funcion para conectarse a la Api Local

const doLogin = () =>
  //email, pass//
  async (dispatch) => {
    const email = "elnekazo@gmail.com";
    const pass = "1234";
    const request = await doLoginApi(email, pass);

    // 2. Logica autentificacion: Rescato token de api
    if (request.status === 200) {
      const user = request.data;
      // 2.2 Extraigo data del token, Full name y Email y la seteo al state userData{}
      const tokenInfo = jwt.decode(user.token, "secret", {
        expiresIn: "15m",
      });
      // 2.3 dejo token en storage

      localStorage.setItem("AccessToken", user.token);
      localStorage.setItem("Email", tokenInfo.email);
      localStorage.setItem("FullName", tokenInfo.unique_name);

      console.log(user.token, " ", tokenInfo.unique_name, " ", tokenInfo.email);
    }
    // 2.1 le doy al token 15 minutos de validez.
    // seteo state setLogingSuccess = true
    console.log("fui a la api de person:>", request.status);
  };

export {
  Types,
  setLoginSuccess,
  setCloseOpenMenu,
  SET_LOGIN_SUCCESS,
  SET_CLOSE_OPEN_MENU,
  doLogin,
};

export default Creators;
