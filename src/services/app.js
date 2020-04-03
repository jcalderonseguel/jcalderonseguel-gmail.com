// import config from '../config/api';

import api from "./api";
// export const getDocumentTypeApi = (countryId) =>
//   api.get(`${config.apiPerson}/documentTypes?countryId=${countryId}`);

export const getCountrysApi = () =>
  api.get(`https://restcountries.eu/rest/v2/all`);

export const getUserLoggedApi = () =>
  api.get(`http://localhost:5000/v1/persons/login`);
