
import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';

import global from '../components/Global/reducer';
import countriesReducer from "../components/Modules/Maintainers/Countries/reducer"
import personReducer from "../components/Modules/NewPerson/reducer";

const rootReducer = history =>
  combineReducers({
    router: connectRouter(history),
    global,
    countriesReducer,
    personReducer,
  });

export default rootReducer;

