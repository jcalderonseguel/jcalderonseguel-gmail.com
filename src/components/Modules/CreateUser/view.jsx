import React, { Component} from 'react'
import { REGISTER_USER_MSG , 
         HOME_MSG, 
         APP_VIEW_MSG, 
         CREATE_USER_MSG, 
         TITLE_MSG, 
         TITLE_COMP} from './messages';

import ids from './indentifiers';

import {NAME_LBL, PASSWORD_LBL, EMAIL_LBL, BTN_REGISTER  } from './label';         



//import {  connect } from "react-redux"



import 'jquery';
import 'metismenu';
import 'bootstrap';

class CreateUser extends Component {

  
      
    render() {
        return (
            <div>
                <div className="row wrapper border-bottom white-bg page-heading">
                    <div className="col-lg-9">
                        <h2>{TITLE_COMP}</h2>
                        <ol className="breadcrumb">
                            <li className="breadcrumb-item">
                                <a href="index.html">{HOME_MSG}</a>
                            </li>
                            <li className="breadcrumb-item">
                               {APP_VIEW_MSG}
                            </li>
                            <li className="breadcrumb-item active">
                                <strong>{CREATE_USER_MSG}</strong>
                            </li>
                        </ol>
                        
                    </div> 
                </div>
                <div className="middle-box text-center loginscreen animated fadeInDown">
                 
                    <h2>{TITLE_MSG}</h2>
                    <p>{REGISTER_USER_MSG}</p>
                    <form  className="m-t"  action="login.html" id={ids.FORM_CREATE_USER}>
                        <div className="form-group">
                            <input type="text"
                                   id = {ids.INPUT_NAME} 
                                   className="form-control" 
                                   placeholder={NAME_LBL} 
                                   required/>
                        </div>
                        <div className="form-group">
                            <input type="email" 
                                   id={ids.INPUT_EMAIL}
                                   className="form-control" 
                                   placeholder={EMAIL_LBL} 
                                   required/>
                        </div>
                        <div className="form-group">
                            <input type="password" 
                                   id = {ids.INPUT_PASSWORD}
                                   className="form-control" 
                                   placeholder={PASSWORD_LBL} 
                                   required/>
                        </div>
                        <button type="submit" 
                                id= {ids.BUTTON_REGISTER}
                                className="btn btn-primary block full-width m-b">
                                {BTN_REGISTER}
                        </button>
                    </form> 
                </div>
            </div>
            
        )
    }
}



export default (CreateUser);