import React from 'react';
import { connect } from "react-redux";
import { ConnectedRouter } from "connected-react-router";
import { Switch, Route } from "react-router-dom";
import routes from "../config/routes";
import Navigation from "./LayOut/LateralMenu/view";
import Footer from "./footer";

import TopHeader from "../components/LayOut/TopHeader/view"

class Main extends React.Component {

       
    render() {
      return(

        <div id="wrapper">
        <ConnectedRouter history={this.props.history}>
            <div>
                {/* <Progress />
                 */}
                 <Navigation />
                <div id="page-wrapper" className="gray-bg">
                    <TopHeader/>
                    <Switch>
                    {
                        routes.map((route) => <Route key={route.path}  exact path={route.path}  component={route.component} />)
                    }
                    </Switch>
                    <Footer />
                </div>
            </div>
        </ConnectedRouter>
    </div>
      )
    }

}

const mapStateToProps = (state) => ({});
  
  const mapDispatchToProps = (dispatch) => ({
    dispatch: (action) => { dispatch(action); },
  });
  
  export default connect(mapStateToProps, mapDispatchToProps)(Main); 
  
  