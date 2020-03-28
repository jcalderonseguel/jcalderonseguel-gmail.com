import { createActions } from 'reduxsauce';

import {
  getDocumentTypeApi
} from '../../../../services/app';

const { Types, Creators } = createActions(
    {
      getDocumentTypes: ['countryId'],      
    },
    {
      prefix: 'GETDOCUMENT/'
    }
  );

  const {
    getDocumentTypes
  } = Creators;

  const {
    GET_DOCUMENT_TYPE,
    
  } = Types;


  const getDocument = (countryId) => async dispatch => {
    const request = await getDocumentTypeApi(countryId);
  
    if (request.status === 200) {

       console.log("data:>",request.data);
      
    }
  };



  export {
    Types,
    getDocumentTypes,
    GET_DOCUMENT_TYPE,
    getDocument
  };

  export default Creators;