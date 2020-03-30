import React, { Component } from 'react';
import Button from "@material-ui/core/Button";
import { NavLink } from "react-router-dom";
import ListItem from "@material-ui/core/ListItem";
import CreatePerson from "../../../styles/formCreatePerson";

class NavigationTop extends Component {
    constructor(props){
        super(props);
        this.state = {
        }
    }
   
    render() {
        const {
            step, 
            goSummary, 
            goPerson, 
            goAddress,firstName, 
            lastName, 
            streetName,
            enableAddress, 
            enableSummary,
            personInputsValid,
            addressInputsValid
        } = this.props;

        return (
            <div className="container">
                <div className="row">
                    <div className="col-4">
                    <ListItem style={{paddingLeft: 0, paddingRight: 0}}>
                        <NavLink
                        to={"#"}
                        style={!personInputsValid ? 
                            CreatePerson.createPersonStyle.invalidInput
                            : CreatePerson.createPersonStyle.button}
                        onClick={() => goPerson()}>
                            1. Person
                        </NavLink>
                    </ListItem>
                    </div>
                    <div className="col-4">
                        <ListItem style={{paddingLeft: 0, paddingRight: 0}}>
                            <NavLink
                                to={"#"}
                                style={ (enableAddress && addressInputsValid) ? 
                                    CreatePerson.createPersonStyle.button 
                                    : !addressInputsValid ? CreatePerson.createPersonStyle.invalidInput
                                    : CreatePerson.createPersonStyle.buttonDisabled}
                                disabled={ !enableAddress ? true: false}
                                onClick={() => goAddress()}>
                            2. Address
                            </NavLink>
                        </ListItem>
                    </div>
                    <div className="col-4">
                        <ListItem style={{paddingLeft: 0, paddingRight: 0}}>
                            <NavLink
                                to={"#"}
                                style={enableSummary ? 
                                    CreatePerson.createPersonStyle.button: CreatePerson.createPersonStyle.buttonDisabled}
                                disabled={ !enableSummary ? true: false}
                                onClick={() => goSummary()}>
                                3. Summary
                            </NavLink>
                        </ListItem>
                    </div>
                </div>
            </div>
        );
    }
}

export default NavigationTop;