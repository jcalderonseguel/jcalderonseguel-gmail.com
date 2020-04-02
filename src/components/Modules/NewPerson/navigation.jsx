import React from 'react';
import Button from 'react-bootstrap/Button'
import Person from "../../../styles/formCreatePerson";

function Navigation(props) {
    const {step, sendPerson, backStep, nextStep, isLoading} = props;
        return (
            <div >
                <div className="row">
                    <div className="col-lg-10">
                        <div style={{ float: "right", margin: 40 }}>
                            <Button
                                variant="contained"
                                size="large"
                                style={step <= 1? Person.createPersonStyle.btnDownDisabled: Person.createPersonStyle.buttonDown}
                                disabled={step <= 1? true: false}
                                onClick={() => backStep()}>
                                Previous
                            </Button>
                                <Button
                                    variant="contained"
                                    style={step > 2 ? Person.createPersonStyle.btnDownDisabled: Person.createPersonStyle.buttonDown}
                                    size="large"
                                    disabled={step > 2? true: false}
                                    onClick={() => nextStep()}>
                                    Next
                                </Button>
                            <Button
                                variant="contained"
                                size="large"
                                disabled={isLoading}
                                style={Person.createPersonStyle.buttonDown}
                                onClick={!isLoading ? () => sendPerson() : null}>
                                {/* onClick={!isLoading ? handleSendPerson : null}> */}
                                {isLoading ? 'Loading…' : 'Send'}
                            </Button>
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
            </div>
        );
    //}

}
export default Navigation;