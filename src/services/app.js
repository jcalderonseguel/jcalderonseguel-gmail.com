import config from '../config/api';

import api from './api';

const apiPerson = config.apiPerson;

// const instance = axios.create();

// export const getDocumentTypeApi = (countryId) =>
//   api.get(`${config.apiPerson}/documentTypes?countryId=${countryId}`);

export const createPersonApi = (params) => {
  const data = JSON.stringify(params);
  return api.post(`${apiPerson}/persons`, data,{
    'Access-Control-Allow-Origin' : '*',
      'Access-Control-Allow-Methods' : 'GET,PUT,POST,DELETE,PATCH,OPTIONS',
      'Content-Type': 'application/json'
  }
          )
          .then((resp) => resp)
          .catch(error => error)

} 
export const getCountrysApi = () =>
  api.get(`https://restcountries.eu/rest/v2/all`);

export default {
  getCountrysApi,
  createPersonApi
}