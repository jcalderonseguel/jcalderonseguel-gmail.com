
import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';

import global from '../components/Global/reducer';

const rootReducer = history =>
  combineReducers({
    router: connectRouter(history),
    global
  });

export default rootReducer;

