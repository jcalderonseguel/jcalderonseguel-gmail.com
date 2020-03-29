import React from 'react';
import StepWizard from 'react-step-wizard';
import PersonInfoStep from "./Steps/PersonInfoStep";
import AddressInfoStep from "./Steps/AddressInfoStep";
import WarningStep from "./Steps/WarningStep";
import FinishStep from "./Steps/FinishStep";
import Navigation from "./navigation";
import NavigationTop from "./navigationTop";


const steperStyle = {
    flexDirection: "column-reverse"
  };

class Form extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            step: 1,
            data: [],
            firstName: "",
            lastName: "",
            city: 0,
            streetName: "",
            firstNameErrorMessage: null,
            personInputsValid: true,
            addressInputsValid: true
        }
    }
    nextStep = () => {
        const {step, firstName, lastName, streetName} = this.state;
        console.log("step", step)
        console.log("lastName", lastName)

        switch (step) {
            case 1:
                if(firstName.trim() === "" ){
                    this.setState({
                        firstNameErrorMessage: "First Name is required.", 
                        personInputsValid: false});
                    
                    if(lastName.trim() === ""){
                    this.setState({
                        lastNameErrorMessage: "Last Name is required.", 
                        personInputsValid: false});
                    }
                } else if(lastName.trim() === ""){
                    this.setState({
                        lastNameErrorMessage: "Last Name is required.", 
                        personInputsValid: false});
    
                } else {
                    this.setState({
                        step: step + 1, 
                        enableAddress : true, 
                        personInputsValid: true});
                }
                break;
            case 2:
                if(streetName.trim() === ""){
                    this.setState({
                        streetNameErrorMessage: "Street Name is required.", 
                        addressInputsValid: false});
    
                } else {
                    this.setState({
                        step: step + 1, 
                        enableSummary : true, 
                        addressInputsValid: true});
                }
                break;
            default:
                break;
        }
    }

    backStep = () => {
        const {step, firstName, lastName, streetName} = this.state;

        switch (step) {
            case 2:
                if(firstName.trim() !== "" ){
                    this.setState({firstNameErrorMessage: ""});
                    if(lastName.trim() !== "" ){
                    this.setState({lastNameErrorMessage: ""});
                    }
                } 
                break;
            case 3:
                if(streetName.trim() !== ""){
                    this.setState({streetNameErrorMessage: ""});
                }
                break
            default:
                break;
        }
        
        this.setState({step: step - 1});

    }
    goSummary = () => {
        const { step, firstName, lastName, streetName} = this.state;

        if(firstName !== "" && lastName !== "" && streetName !== ""){
            this.setState({step: 3});
        } else {
            if(firstName === "") this.setState({firstNameErrorMessage: "First Name is required."});
            if(lastName === "")  this.setState({lastNameErrorMessage: "Last Name is required."});
            if(streetName === "")  this.setState({streetNameErrorMessage: "Street Name is required."});
        }

    }
    
    goPerson = () => {
        const { firstName, lastName, streetName} = this.state;
        
        if(firstName.trim() !== "") this.setState({firstNameErrorMessage: ""});
        if(lastName.trim() !== "") this.setState({lastNameErrorMessage: ""});
        this.setState({streetNameErrorMessage: ""});
        this.setState({step: 1});
    }

    goAddress = () => {
        const { step, firstName, lastName, streetName} = this.state;

        if(streetName.trim() !== "") this.setState({streetNameErrorMessage: ""});
        
        if(firstName.trim() !== "" && lastName.trim() !== ""){
            this.setState({step: 2});

        } else {
            switch (step) {
                case 1:
                    if(firstName.trim() === ""){
                        this.setState({firstNameErrorMessage: "First Name is required."});
                        
                        if(lastName.trim() === "" ){
                        this.setState({lastNameErrorMessage: "Last Name is required."});
                        }
                    } 
                    else if(lastName.trim() === "" ){
                        this.setState({lastNameErrorMessage: "Last Name is required."});
                    }
                    break;
            
                default:
                    break;
            }
            
        }
    }
    handleChange = input => e => {
        this.setState({[input]: e.target.value});

        switch (input) {
            case "firstName":
                if(e.target.value === ""){
                    this.setState({firstNameErrorMessage: "First Name is required."});
                } else {
                    this.setState({firstNameErrorMessage: ""});
                }
                break;
            case "lastName":
                if(e.target.value === ""){
                    this.setState({lastNameErrorMessage: "Last Name is required."});
                } else {
                    this.setState({lastNameErrorMessage: ""});
                } 
                break;

            case "streetName":
                if(e.target.value === ""){
                    this.setState({streetNameErrorMessage: "Street Name is required."});
                } else {
                    this.setState({streetNameErrorMessage: ""});
                }
                break
            default:
                break;
        }
    }

    enviar = () => {
        const {step, firstName, lastName, city, streetName } = this.state;
    }

    render() {
        const {
            step, 
            firstName, 
            lastName, 
            city, 
            streetName, 
            firstNameErrorMessage,
            lastNameErrorMessage,
            streetNameErrorMessage,
            enableAddress,
            enableSummary,
            personInputsValid,
            addressInputsValid
        } = this.state;
        return (
            <div>
                <NavigationTop 
                    goSummary={this.goSummary}
                    goPerson={this.goPerson}
                    goAddress={this.goAddress}
                    firstName={firstName}
                    lastName={lastName}
                    streetName={streetName}
                    enableAddress={enableAddress}
                    enableSummary={enableSummary}
                    personInputsValid={personInputsValid}
                    addressInputsValid={addressInputsValid}
                    step={step}/>
                <StepWizard style={steperStyle} initialStep={step} isHashEnabled={true}>
                    {step === 1 && 
                        <PersonInfoStep 
                            handleChange={this.handleChange}
                            firstName={firstName}
                            lastName={lastName}
                            firstNameErrorMessage={firstNameErrorMessage}
                            lastNameErrorMessage={lastNameErrorMessage}
                            hashKey={'person'}/> }
                    {step === 2 && 
                        <AddressInfoStep 
                            handleChange={this.handleChange} 
                            city={city}
                            streetName={streetName}
                            streetNameErrorMessage={streetNameErrorMessage}
                            hashKey={'address'}/>}
                    {/* {step === 3 && <WarningStep hashKey={'warning'}/>} */}
                    {step === 3 && 
                        <FinishStep
                            firstName={firstName}
                            lastName= {lastName}
                            city={city}
                            streetName={streetName}
                            hashKey={'finish'}/>}
                </StepWizard>
                <Navigation 
                    nextStep={this.nextStep}
                    backStep={this.backStep}
                    enviar={this.enviar}
                    step={step}
                    />
            </div>
        );
    }
}

export default Form;