import React, { Component } from 'react';
import Button from "@material-ui/core/Button";
import { NavLink } from "react-router-dom";
import ListItem from "@material-ui/core/ListItem";
import Person from "../../../styles/formCreatePerson";

class Navigation extends Component {
    constructor(props){
        super(props);
        this.state = {
            step: 1
        }
    }
    continue = e => {
        e.preventDefault();
        this.props.nextStep();
    }
    render() {
        const {step, disabledPrevious} = this.props;
        return (
            <div className="container">
                <div className="row">
                    <div className="col-1" style={{marginLeft: 720}}>
                    <Button
                        variant="contained"
                        size="large"
                        style={step <= 1? Person.createPersonStyle.btnDownDisabled: Person.createPersonStyle.buttonDown}
                        disabled={step <= 1? true: false}
                        onClick={() => this.props.backStep()}>
                        Previous
                    </Button>
                    </div>
                    <div className="col-1">
                         <Button
                            variant="contained"
                            style={step > 2 ? Person.createPersonStyle.btnDownDisabled: Person.createPersonStyle.buttonDown}
                            size="large"
                            disabled={step > 2? true: false}
                            onClick={this.continue}>
                            Next
                        </Button>
                    </div>
                    <div className="col-1">
                    <Button
                        variant="contained"
                        size="large"
                        style={Person.createPersonStyle.buttonDown}
                        onClick={() => this.props.enviar()}>
                        Send
                    </Button>
                    </div>
                    <div className="col-1">
                    <Button
                        variant="contained"
                        style={Person.createPersonStyle.buttonDown}
                        size="large"
                        onClick={() => this.stepCancel(0)}>
                        Cancel
                    </Button>
                    </div>
                    
                </div>
            </div>
        );
    }
}

export default Navigation;