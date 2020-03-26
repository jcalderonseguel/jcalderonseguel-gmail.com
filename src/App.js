// External dependencies
import React from "react";
import { Provider } from "react-redux";


import configureStore,  { history } from "./config/store";
import Main from "./components/main";
const store = configureStore();
class App extends React.Component {
    
    render() {
      return (
        <Provider store={store}>
          <Main history={history} />
        </Provider>
      );
    }
  }
  
  export default App;
