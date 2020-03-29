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

        console.log("firstName=>>",firstName, step,streetName)
        return (
            <div className="container">
                <div className="row">
                    <div className="col-4 text-left">
                    <Button
                        variant="contained"
                        size="large"
                        style={!personInputsValid ? CreatePerson.createPersonStyle.invalidInput: CreatePerson.createPersonStyle.button}
                        onClick={() => goPerson()}>
                            1. Person
                    </Button>
                    </div>
                    <div className="col-4">
                         <Button
                            variant="contained"
                            size="large"
                            style={ (enableAddress && addressInputsValid) ? 
                                CreatePerson.createPersonStyle.button 
                                : !addressInputsValid ? CreatePerson.createPersonStyle.invalidInput
                                : CreatePerson.createPersonStyle.buttonDisabled}
                            disabled={ !enableAddress ? true: false}
                            onClick={() => goAddress()}>
                            2. Address
                        </Button>
                    </div>
                    <div className="col-4">
                    { <Button
                        variant="contained"
                        style={enableSummary ? 
                            CreatePerson.createPersonStyle.button: CreatePerson.createPersonStyle.buttonDisabled}
                        size="large"
                        disabled={ !enableSummary ? true: false}
                        onClick={() => goSummary()}>
                        3. Summary
                    </Button>}
                    </div>
                </div>
            </div>
        );
    }
}

export default NavigationTop;