import React, { isValidElement } from 'react';
import StepWizard from 'react-step-wizard';
import PersonInfoStep from "./Steps/PersonInfoStep";
import AddressInfoStep from "./Steps/AddressInfoStep";
// import WarningStep from "./Steps/WarningStep";
import FinishStep from "./Steps/FinishStep";
import Navigation from "./navigation";
import NavigationTop from "./navigationTop";
import { CreatePerson } from './action';
import {  connect } from "react-redux"
import {validateStep1} from './Validations/ValidateSteps'
import {validateEmail} from './Validations/validations'
import {validatePhone} from './Validations/validations'

const steperStyle = {
    flexDirection: "column-reverse"
  };

class Form extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            step: 1,
            firstName: "",
            lastName: "",
            email: "",
            city: 0,
            streetName: "",
            phone: "",
            attachment: "",
            documentNumber: "",
            firstNameErrorMessage: null,
            personInputsValid: true,
            addressInputsValid: true
        }
    }
    nextStep = () => {
        const {step, 
            firstName, 
            lastName,
            streetName,
            city, 
            email,
            phone 
        } = this.state;
        // console.log("step", step)

        switch (step) {
            case 1:
                let validate = validateStep1(this.state); 
                if(firstName.trim() === "" ){
                    this.setState({
                        firstNameErrorMessage: "First Name is required.", 
                        personInputsValid: false});
                    
                    if(lastName.trim() === ""){
                    this.setState({
                        lastNameErrorMessage: "Last Name is required.", 
                        personInputsValid: false});
                    }
                    if(email.trim() === "") {
                        this.setState({
                            emailErrorMessage: "Email is required."
                        });
                    }
                    if(phone.trim() === "") {
                        this.setState({
                            phoneErrorMessage: "Phone is required."
                        });
                    }
                } else if(email.trim() === ""){
                    this.setState({
                        emailErrorMessage: "Email is required."
                    });
                }
                else if(lastName.trim() === ""){
                    this.setState({
                        lastNameErrorMessage: "Last Name is required.", 
                        personInputsValid: false});
    
                } else if(phone.trim() === ""){
                    this.setState({
                        phoneErrorMessage: "Phone is required.", 
                        personInputsValid: false});
                }
                else {
                    if(!validateEmail(email)) {
                        this.setState({
                            emailErrorMessage: "Email is not valid."
                        });
                        if(!validatePhone(phone)){
                            this.setState({
                                phoneErrorMessage: "Phone is not valid."
                            });
                        }
                    } else{
                        if(!validatePhone(phone)){
                            this.setState({
                                phoneErrorMessage: "Phone is not valid."
                            });
                        }
                        else {
                            this.setState({
                                step: step + 1, 
                                enableAddress : true, 
                                personInputsValid: true});
                        }
                    }
                }
                break;
            case 2:
                if(streetName.trim() === ""){
                    this.setState({
                        streetNameErrorMessage: "Street Name is required.", 
                        addressInputsValid: false});
                    if(city === 0){
                        this.setState({cityErrorMessage: "City is required."});
                    }
                } else if(city === "0"){
                    this.setState({cityErrorMessage: "City is required."});
                }
                else {
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
        const {step, firstName, lastName, streetName, city} = this.state;

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
                if(city !== 0){
                    this.setState({cityErrorMessage: ""});
                }
                break
            default:
                break;
        }
        
        this.setState({step: step - 1});

    }
    goSummary = () => {
        const {firstName, lastName, streetName, city, email, phone, step} = this.state;

        switch (step) {
            case 1:
                if(firstName.trim() === "") {
                    this.setState({
                        firstNameErrorMessage: "First Name is required.",
                    });
                }
                if(lastName.trim() === "") {
                    this.setState({
                        lastNameErrorMessage: "Last Name is required.",
                    });
                } 
                if(email.trim() === "") {
                    this.setState({
                        emailErrorMessage: "Email is required.",
                    });
                } 
                if(!validateEmail(email)) {
                    this.setState({
                        emailErrorMessage: "Email is not valid.",
                    });
                }
                if(!validatePhone(phone)) {
                    this.setState({
                        phoneErrorMessage: "Phone is not valid.",
                    });
                }
                if(phone.trim() === "" ){
                    this.setState({
                        phoneErrorMessage: "Phone Name is required.",
                    });
                }
                if(firstName.trim() !== "" 
                    && lastName.trim() !== "" 
                    && email.trim() !== "" 
                    && phone.trim() !== "" 
                    && validateEmail(email) 
                    && validatePhone(phone)) {
                    this.setState({
                        step: 3,
                        personInputsValid: true
                    });
                } else {
                    this.setState({
                        personInputsValid: false
                    });
                }
                break;
                case 2:
                    if(city === "0" ){
                        this.setState({
                            cityErrorMessage: "City is required.",
                        });
                    }
                    if(streetName === "" ){
                        this.setState({
                            streetNameErrorMessage: "Street Name is required.",
                        });
                    }
                    if( streetName.trim() !== "" 
                        && city !== "0" 
                     ) {
                        this.setState({
                            step: 3,
                            addressInputsValid: true
                        });
                    }
                    else {
                        this.setState({
                            addressInputsValid: false

                        });
                    }
                    break;
        
            default:
                break;
        }
        
       
        
       
    }

    goPerson = () => {
        const { firstName, lastName} = this.state;
        
        if(firstName.trim() !== "") this.setState({firstNameErrorMessage: ""});
        if(lastName.trim() !== "") this.setState({lastNameErrorMessage: ""});
        this.setState({streetNameErrorMessage: ""});
        this.setState({step: 1});
    }

    goAddress = () => {
        const { step, firstName, lastName, streetName, email, phone, city} = this.state;

        if(streetName.trim() !== "") this.setState({streetNameErrorMessage: ""});

        if(city !== 0) this.setState({cityErrorMessage: ""});

        if(firstName.trim() === ""){
            this.setState({
                firstNameErrorMessage: "First Name is required.",
                personInputsValid: false
            });
        }
        if(lastName.trim() === "" ){
            this.setState({
                lastNameErrorMessage: "Last Name is required.",
                personInputsValid: false

            });
        }
        if(email.trim() === "" ){
            this.setState({
                emailErrorMessage: "Email is required.",
                personInputsValid: false

            });
        }
        if(phone.trim() === "" ){
            this.setState({
                phoneErrorMessage: "Phone is required.",
                personInputsValid: false
            });
        }
        
        if(firstName.trim() !== "" 
            && lastName.trim() !== ""
            && email.trim() !== ""
            && phone.trim() !== ""
        ) 
        {
            this.setState({
                step: 2,
                personInputsValid: true
            });

        }
        // if(firstName.trim() !== "" && lastName.trim() !== ""){
        //     this.setState({step: 2});

        // } else {
            switch (step) {
                case 1:
                    // if(firstName.trim() === ""){
                    //     this.setState({firstNameErrorMessage: "First Name is required."});
                        
                    //     if(lastName.trim() === "" ){
                    //     this.setState({lastNameErrorMessage: "Last Name is required."});
                    //     }
                    // } 
                    // else if(lastName.trim() === "" ){
                    //     this.setState({lastNameErrorMessage: "Last Name is required."});
                    // }
                    
                    break;
            
                default:
                    break;
            }
            
        //}
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
            case "email":
                if(e.target.value === ""){
                    this.setState({emailErrorMessage: "Email is required."});
                } else {
                    this.setState({emailErrorMessage: ""});
                }
                break;
            case "phone":
                if(e.target.value === ""){
                    this.setState({phoneErrorMessage: "Phone is required."});
                } else {
                    this.setState({phoneErrorMessage: ""});
                }
                break;
            case "city":
                if(e.target.value === "0"){
                    this.setState({cityErrorMessage: "City is required."});
                } else {
                    this.setState({cityErrorMessage: ""});
                }
                break
            default:
                break;
        }
    }
    
    sendPerson = () => {
        // const {step, firstName, lastName, city, streetName } = this.state;
        
        this.setState({isLoading: true});
        this.props.dispatch(CreatePerson(this.state));

        console.log("sending...")
        
        // const dataObject = {
        //     firstName: firstName,
        //     lastName: lastName,
        //     city: city,
        //     streetName: streetName
        // }
        // return this.props.dispatch(CreatePerson(this.state))
        //     .catch(err => console.log(err))
        //     .then((data) => {
        //         if(data){
        //             console.log("ver si hay data de vuelta")
        //         }
        //     })
        // Promise.all([new Promise(CreatePerson(this.state))])
        // .then(data=>{
        //     debugger
        //     if(data && data[0]) {
        //         console.log("llegó de vuelta")
        //         this.setState({isLoading: false});
        //     }
        // })
        // .catch(e => console.log("erros=>>>",e))
            
    }

    render() {
        const {
            step, 
            firstNameErrorMessage,
            lastNameErrorMessage,
            streetNameErrorMessage,
            emailErrorMessage,
            phoneErrorMessage,
            cityErrorMessage,
            enableAddress,
            enableSummary,
            isLoading,
            firstName,
            lastName,
            streetName,
            city,
            email,
            phone,
            personInputsValid,
            handleSelect,
            addressInputsValid
        } = this.state;
        return (
            <div>
                <NavigationTop 
                    goSummary={this.goSummary}
                    goPerson={this.goPerson}
                    goAddress={this.goAddress}
                    enableAddress={enableAddress}
                    enableSummary={enableSummary}
                    personInputsValid={personInputsValid}
                    addressInputsValid={addressInputsValid}
                    step={step}/>
                <StepWizard style={steperStyle} initialStep={step} isHashEnabled={true}>
                    {step === 1 && 
                        <PersonInfoStep 
                            handleChange={this.handleChange}
                            lastName={lastName}
                            firstNameErrorMessage={firstNameErrorMessage}
                            lastNameErrorMessage={lastNameErrorMessage}
                            emailErrorMessage={emailErrorMessage}
                            phoneErrorMessage={phoneErrorMessage}
                            firstName={firstName}
                            email={email}
                            phone={phone}
                            // hashKey={'person'}
                            /> }
                    {step === 2 && 
                        <AddressInfoStep 
                            handleChange={this.handleChange} 
                            handleSelect={this.handleSelect}
                            city={city}
                            streetName={streetName}
                            cityErrorMessage={cityErrorMessage}
                            handleSelect={handleSelect}
                            streetNameErrorMessage={streetNameErrorMessage}
                            // cityErrorMessage={cityErrorMessage}
                            // hashKey={'address'}
                            />}
                    {/* {step === 3 && <WarningStep hashKey={'warning'}/>} */}
                    {step === 3 && 
                        <FinishStep
                            person={this.state}
                            hashKey={'finish'}/>}
                </StepWizard>
                <Navigation 
                    nextStep={this.nextStep}
                    backStep={this.backStep}
                    sendPerson={this.sendPerson}
                    isLoading={isLoading}
                    step={step}
                    />
            </div>
        );
    }
}
const mapStateToProps = (state) => ({
 
 });
 
 const mapDispatchToProps = (dispatch) => ({
     dispatch: (action) => { dispatch(action); },
 })
 
 export default connect(mapStateToProps,mapDispatchToProps)(Form);