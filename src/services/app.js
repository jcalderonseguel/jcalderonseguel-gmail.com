import config from "../config/api";

import api from "./api";
// export const getDocumentTypeApi = (countryId) =>
//   api.get(`${config.apiPerson}/documentTypes?countryId=${countryId}`);

const apiPerson = config.apiPerson;

export const createPersonApi = (params) => {
  return api
    .post(`${apiPerson}/persons`, params, {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        "Cache-Control": "no-cache",
      },
    })

    .then((res) => res)
    .catch((err) => console.log(err));
};

export const getCountrysApi = () =>
  api.get(`https://restcountries.eu/rest/v2/all`);

export const doLoginApi = (mail, pass) =>
  api.post(`${config.apiPerson}/persons/login`, {
    email: `${mail}`,
    password: `${pass}`,
  });
