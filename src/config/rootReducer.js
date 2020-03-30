
import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';

import global from '../components/Global/reducer';
import countriesReducer from "../components/Modules/Maintainers/Countries/reducer"

const rootReducer = history =>
  combineReducers({
    router: connectRouter(history),
    global,
    countriesReducer

  });

export default rootReducer;

