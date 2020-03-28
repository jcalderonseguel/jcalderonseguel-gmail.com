import config from '../config/api';

import api from './api';
// apiPerson = `${apiUri}/pa-person/v1/`; 
export const getDocumentTypeApi = (countryId) =>
  api.get(`${config.apiPerson}/documentTypes?countryId=${countryId}`);