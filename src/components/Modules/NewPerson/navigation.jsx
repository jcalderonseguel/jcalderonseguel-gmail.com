import React from 'react';
import Button from 'react-bootstrap/Button'
import Person from "../../../styles/formCreatePerson";

function Navigation(props) {
    const {step, sendPerson, backStep, nextStep, isLoading} = props;
        return (
            <div className="container">
                <div className="row">
                    <div className="col-1" style={{marginLeft: 720}}>
                    <Button
                        variant="contained"
                        size="large"
                        style={step <= 1? Person.createPersonStyle.btnDownDisabled: Person.createPersonStyle.buttonDown}
                        disabled={step <= 1? true: false}
                        onClick={() => backStep()}>
                        Previous
                    </Button>
                    </div>
                    <div className="col-1">
                         <Button
                            variant="contained"
                            style={step > 2 ? Person.createPersonStyle.btnDownDisabled: Person.createPersonStyle.buttonDown}
                            size="large"
                            disabled={step > 2? true: false}
                            onClick={() => nextStep()}>
                            Next
                        </Button>
                    </div>
                    <div className="col-1">
                    <Button
                        variant="contained"
                        size="large"
                        disabled={isLoading}
                        style={Person.createPersonStyle.buttonDown}
                        onClick={!isLoading ? () => sendPerson() : null}>
                        {/* onClick={!isLoading ? handleSendPerson : null}> */}
                        {isLoading ? 'Loading…' : 'Send'}
                    </Button>
                    </div>
                    <div className="col-1">
                    <Button
                        variant="contained"
                        style={Person.createPersonStyle.buttonDown}
                        size="large"
                        // onClick={() => this.stepCancel(0)}
                        >
                        Cancel
                    </Button>
                    </div>
                    
                </div>
            </div>
        );
    //}

}
export default Navigation;