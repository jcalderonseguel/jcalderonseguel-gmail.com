import React, { Component} from 'react';
import {InputGroup, FormControl, Form, Button} from 'react-bootstrap';
import validator from 'validator';
import classNames from 'classnames';
import { REGISTER_USER_MSG , 
         TITLE_MSG,
         NO_EMPTY_ERROR,
         EMAIL_INVALID
        } from './messages';

import ids from './indentifiers';

import {NAME_LBL, PASSWORD_LBL, EMAIL_LBL, BTN_REGISTER, CHECKBOX_LBL  } from './label';         

//import {  connect } from "react-redux"

class CreateUser extends Component {

  formDefaults = {
    name: { value: '', isValid: true, message: '' },
    email: { value:'', isValid: true, message: '' },
    password: { value: '', isValid: true, message: '' }
  }

  state = {
    ...this.formDefaults
  };

  onChange = (e) => {
    const state = {
      ...this.state,
      [e.target.name]: {
        ...this.state[e.target.name],
        value: e.target.value,
      }
    };

    this.setState(state);
  }

  onSubmit = (e) => {
    e.preventDefault();
    // reset states before the validation procedure is run.
    this.resetValidationStates();
    // run the validation, and if it's good move on.
    if (this.formIsValid()) {
      // form processing here....
    }
  }
    formIsValid = () => {
      const name = { ...this.state.name };
      const email = { ...this.state.email };
      const password = { ...this.state.password };
      let isGood = true;

      if (!validator.isEmail(email.value)) {
        email.isValid = false;
        email.message = EMAIL_INVALID;
        isGood = false;
      }

      if (validator.isEmpty(name.value)) {{
        name.isValid = false;
        name.message = NO_EMPTY_ERROR;
        isGood= false;
      }}

      if (validator.isEmpty(password.value)) {{
        password.isValid = false;
        password.message = NO_EMPTY_ERROR;
        isGood= false;
      }}
      

      /*
        perform addtion validation on password and confirmPassword here...
      */

      if (!isGood) {
        this.setState({
          name,
          email,
          password,
        });
      }

      return isGood;
    }
    resetValidationStates = () => {
      // make a copy of everything in state
      const state = JSON.parse(JSON.stringify(this.state));

      /*
      loop through each item in state and if it's safe to assume that only
      form values have an 'isValid' property, we can use that to reset their
      validation states and keep their existing value property. This process
      makes it easy to set all validation states on form inputs in case the number
      of fields on our form grows in the future.
      */
      Object.keys(state).map(key => {
        if (state[key].hasOwnProperty('isValid')) {
          state[key].isValid = true;
          state[key].message = '';
        }
      });

      this.setState(state);
    }

    resetForm = () => {
      this.setState(...this.formDefaults);
    }

    render() {
      const { name, email, password} = this.state;
      
      const nameGroupClass = classNames('mb-3',
        { 'has-error': !name.isValid }
      );
      const emailGroupClass = classNames('mb-3',
        { 'has-error': !email.isValid }
      );
      const passwordGroupClass = classNames('mb-3',
        { 'has-error': !password.isValid }
      );
        return (
            <div>
               
                <div className="middle-box text-center loginscreen animated fadeInDown">
                 
                    <h2>{TITLE_MSG}</h2>
                    <p>{REGISTER_USER_MSG}</p>
                    
                       
                        <InputGroup className={nameGroupClass}>
                          <FormControl
                              type="text"
                              name="name"
                              value={name.value}
                              id = {ids.INPUT_NAME} 
                              className="form-control" 
                              placeholder={NAME_LBL} 
                              onChange={this.onChange}/>
                        </InputGroup>

                        <span className="help-block">{name.message}</span>

                        <InputGroup className={emailGroupClass}>
                          <FormControl
                              type="email"
                              name="email"
                              value={email.value}
                              id = {ids.INPUT_EMAIL} 
                              className="form-control" 
                              placeholder={EMAIL_LBL} 
                              onChange={this.onChange}/>
                        </InputGroup>

                        <span className="help-block">{email.message}</span>

                        <InputGroup className={passwordGroupClass}>
                          <FormControl
                              type="password"
                              name="password"
                              id = {ids.INPUT_PASSWORD} 
                              className="form-control" 
                              placeholder={PASSWORD_LBL}
                              value={password.value}
                              onChange={this.onChange}
                              />
                        </InputGroup>
                        <span className="help-block">{password.message}</span>

                        <Form.Group>
                              <Form.Check type="checkbox" 
                                          label={CHECKBOX_LBL}
                                          controlId={ids.CHECKBOX_IDS} />
                        </Form.Group>      
                        
                        <Button 
                              id= {ids.BUTTON_REGISTER}
                              className="btn btn-primary block full-width m-b"
                              type="submit"
                              onClick={this.onSubmit}>
                                {BTN_REGISTER}
                        </Button>
  
                     
                </div>
            </div>
            
        )
    }
}



export default (CreateUser);