import React, { Component} from 'react'
import { REGISTER_USER_MSG , 
         TITLE_MSG, 
        } from './messages';

import ids from './indentifiers';

import {NAME_LBL, PASSWORD_LBL, EMAIL_LBL, BTN_REGISTER  } from './label';         

//import {  connect } from "react-redux"

class CreateUser extends Component {

    constructor(props){
        super(props);
    
        this.state = {
          fields: {},
          errors: {}
        }
      }
      handleValidation(){
        let fields = this.state.fields;
        let errors = {};
        let formIsValid = true;
    
        //Name
        if(!fields["name"]){
          formIsValid = false;
          errors["name"] = "Cannot be empty";
        }
    
        if(typeof fields["name"] !== "undefined"){
          if(!fields["name"].match(/^[a-zA-Z]+$/)){
            formIsValid = false;
            errors["name"] = "Only letters";
          }      	
        }
    
        //Email
        if(!fields["email"]){
          formIsValid = false;
          errors["email"] = "Cannot be empty";
        }
    
        if(typeof fields["email"] !== "undefined"){
          let lastAtPos = fields["email"].lastIndexOf('@');
          let lastDotPos = fields["email"].lastIndexOf('.');
    
          if (!(lastAtPos < lastDotPos && lastAtPos > 0 && fields["email"].indexOf('@@') === -1 && lastDotPos > 2 && (fields["email"].length - lastDotPos) > 2)) {
            formIsValid = false;
            errors["email"] = "Email is not valid";
          }
        }
    
    
    
        this.setState({errors: errors});
        return formIsValid;
      }
      
      handleChange(field, e){    		
        let fields = this.state.fields;
        fields[field] = e.target.value;        
        this.setState({fields});
      }

    render() {
        return (
            <div>
               
                <div className="middle-box text-center loginscreen animated fadeInDown">
                 
                    <h2>{TITLE_MSG}</h2>
                    <p>{REGISTER_USER_MSG}</p>
                    
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
                        <button  
                                id= {ids.BUTTON_REGISTER}
                                className="btn btn-primary block full-width m-b">
                                {BTN_REGISTER}
                        </button>
                     
                </div>
            </div>
            
        )
    }
}



export default (CreateUser);