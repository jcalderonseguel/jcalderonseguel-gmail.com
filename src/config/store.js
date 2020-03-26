import { createStore, applyMiddleware, compose } from 'redux';
import { createBrowserHistory } from 'history';
import { routerMiddleware } from 'connected-react-router';
import thunk from 'redux-thunk';

import createRootReducer from './rootReducer';

const rootState = {};
let store;

export const history = createBrowserHistory();
export default function configureStore() {
  const enhancers = [];
  const reduxRouterMiddleware = routerMiddleware(history);
  const middlewares = [reduxRouterMiddleware];

  middlewares.push(thunk);

  if (process.env.NODE_ENV === 'development') {
    const devToolsExtension = window.__REDUX_DEVTOOLS_EXTENSION__;

    if (typeof devToolsExtension === 'function') {
      enhancers.push(devToolsExtension());
    }
  }

  const composedEnhancers = compose(
    applyMiddleware(...middlewares),
    ...enhancers
  );

  store = createStore(createRootReducer(history), rootState, composedEnhancers);

  return store;
}

