import config from '../config/api';

import api from './api';

const apiPerson = config.apiPerson;

 const instance = api.create();


export const createPersonApi = async (params) => {
   const data = JSON.stringify(params);
  return await instance.post(`${apiPerson}/persons`, 
    data, 
    {
      headers: {
           'Content-Type': 'application/json',
            'Accept': 'application/json',
            "Cache-Control": "no-cache"
      }
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