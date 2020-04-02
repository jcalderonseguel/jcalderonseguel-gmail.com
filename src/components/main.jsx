import React from 'react';
import { connect } from "react-redux";
import { ConnectedRouter } from "connected-react-router";
import { Switch, Route } from "react-router-dom";
import routes from "../config/routes";
import Navigation from "./LayOut/LateralMenu/view";
import Footer from "./footer";

import TopHeader from "../components/LayOut/TopHeader/view"

class Main extends React.Component {
      
    portal(){
      document.body.classList.remove("gray-bg")
     return (
      <div>
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
      </div>)
     
    }
    login(){
      document.body.classList.add("gray-bg")
      return(

        <div className="loginColumns animated fadeInDown">
        <div className="row">

            <div className="col-md-6">
                <h2 className="font-bold">Welcome to IN+</h2>

                <p>
                    Perfectly designed and precisely prepared admin theme with over 50 pages with extra new web app views.
                </p>

                <p>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
                </p>

                <p>
                    When an unknown printer took a galley of type and scrambled it to make a type specimen book.
                </p>

                <p>
                    <small>It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</small>
                </p>

            </div>
            <div className="col-md-6">
                <div className="ibox-content">
                     <div className="form-group">
                            <input type="email" className="form-control" placeholder="Username" />
                        </div>
                        <div className="form-group">
                            <input type="password" className="form-control" placeholder="Password" />
                        </div>
                        <button type="submit" className="btn btn-primary block full-width m-b">Login</button>

                        <a href="#">
                            <small>Forgot password?</small>
                        </a>

                        <p className="text-muted text-center">
                            <small>Do not have an account?</small>
                        </p>
                        <a className="btn btn-sm btn-white btn-block" href="register.html">Create an account</a>
                  
                    <p className="m-t">
                        <small>Inspinia we app framework base on Bootstrap 3 &copy; 2014</small>
                    </p>
                </div>
            </div>
        </div>
        <hr/>
        <div className="row">
            <div className="col-md-6">
                Copyright Example Company
            </div>
            <div className="col-md-6 text-right">
               <small>© 2014-2015</small>
            </div>
        </div>
    </div>

      )
    }
    render() {
     return(
        <div id="wrapper">
          <ConnectedRouter history={this.props.history}>
              {this.props.isLogged === true ? this.portal(): this.login()}
          </ConnectedRouter>
       </div>
      )
    }

}

const mapStateToProps = (state) => ({

  isLogged :  state.global.isLogged

});
  
  const mapDispatchToProps = (dispatch) => ({
    dispatch: (action) => { dispatch(action); },
  });
  
  export default connect(mapStateToProps, mapDispatchToProps)(Main); 
  
  