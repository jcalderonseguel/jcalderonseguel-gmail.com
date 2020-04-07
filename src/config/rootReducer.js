
import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';

import global from '../components/Global/reducer';
import countriesReducer from "../components/Modules/Maintainers/Countries/reducer"
import personReducer from "../components/Modules/Admin/reducer";
import personalinfo from "../redux/reducer/personalinfo";

const rootReducer = history =>
  combineReducers({
    router: connectRouter(history),
    global,
    countriesReducer,
    personReducer,
    personalinfo,
  });

export default rootReducer;

