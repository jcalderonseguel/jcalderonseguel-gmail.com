import React, { Component } from 'react';
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
            goSummary, 
            goPerson, 
            goAddress,
            enableAddress, 
            enableSummary,
            personInputsValid,
            addressInputsValid, 
            step
        } = this.props;
        return (
            <div className="container">
                <div className="row">
                    <div className="col-4">
                    <ListItem  style={{paddingLeft: 0, paddingRight: 0}}>
                        <NavLink
                        to={"#"}
                        // className=""
                        style={!personInputsValid ? 
                            CreatePerson.createPersonStyle.invalidInput
                            : (step !== 1 ) ? CreatePerson.createPersonStyle.buttonOpacity : CreatePerson.createPersonStyle.button}
                        onClick={() => goPerson()}>
                            1. Person
                        </NavLink>
                    </ListItem>
                    </div>
                    <div className="col-4">
                        <ListItem style={{paddingLeft: 0, paddingRight: 0}}>
                            <NavLink
                                to={"#"}
                                style={ (enableAddress && addressInputsValid && step === 2) ? 
                                    CreatePerson.createPersonStyle.button 
                                    : !addressInputsValid ? CreatePerson.createPersonStyle.invalidInput
                                    : step !== 2 && enableAddress? CreatePerson.createPersonStyle.buttonOpacity : CreatePerson.createPersonStyle.buttonDisabled}
                                disabled={ !enableAddress }
                                onClick={enableAddress ? () => goAddress() : null}>
                            2. Address
                            </NavLink>
                        </ListItem>
                    </div>
                    <div className="col-4">
                        <ListItem style={{paddingLeft: 0, paddingRight: 0}}>
                            <NavLink
                                to={"#"}
                                style={enableSummary && addressInputsValid && step === 3 ? 
                                    CreatePerson.createPersonStyle.button
                                    : step !== 3 && enableSummary ? CreatePerson.createPersonStyle.buttonOpacity 
                                    : CreatePerson.createPersonStyle.buttonDisabled}
                                disabled={ !enableSummary ? true: false}
                                onClick={enableSummary ?  () => goSummary() : null}>
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