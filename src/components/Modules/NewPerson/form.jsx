import React, { isValidElement } from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import StepWizard from 'react-step-wizard';
import PersonInfoStep from "./Steps/PersonInfoStep";
import AddressInfoStep from "./Steps/AddressInfoStep";
// import WarningStep from "./Steps/WarningStep";
import FinishStep from "./Steps/FinishStep";
import Navigation from "./navigation";
import NavigationTop from "./navigationTop";
import { CreatePerson, openModalSuccess, openModalError } from './actions';
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

        switch (step) {
            case 1:
            let notifications = validateStep1(this.state);     
            if(firstName.trim() === "" ){
                    this.setState({
                        firstNameErrorMessage: "First Name is required.", 
                        personInputsValid: false,
                        firstNameErrorStyle: true
                    });
                    
                    if(lastName.trim() === ""){
                    this.setState({
                        lastNameErrorMessage: "Last Name is required.", 
                        personInputsValid: false,
                        lastNameErrorStyle: true
                    });
                    }
                    if(email.trim() === "") {
                        this.setState({
                            emailErrorMessage: "Email is required.",
                            emailErrorStyle: true
                        });
                    }
                    if(phone.trim() === "") {
                        this.setState({
                            phoneErrorMessage: "Phone is required.",
                            phoneErrorStyle: true
                        });
                    }
                } else if(email.trim() === ""){
                    this.setState({
                        emailErrorMessage: "Email is required.",
                        emailErrorStyle: true
                    });
                }
                else if(lastName.trim() === ""){
                    this.setState({
                        lastNameErrorMessage: "Last Name is required.", 
                        personInputsValid: false,
                        lastNameErrorStyle: true
                    });
    
                } else if(phone.trim() === ""){
                    this.setState({
                        phoneErrorMessage: "Phone is required.", 
                        personInputsValid: false,
                        phoneErrorStyle: true
                    
                    });
                    }
                else {
                    if(!validateEmail(email)) {
                        this.setState({
                            emailErrorMessage: "Email is not valid.",
                            emailErrorStyle:true
                        });
                        if(!validatePhone(phone)){
                            this.setState({
                                phoneErrorMessage: "Phone is not valid.",
                                phoneErrorStyle: true
                            });
                        }
                    } else{
                        if(!validatePhone(phone)){
                            this.setState({
                                phoneErrorMessage: "Phone is not valid.",
                                phoneErrorStyle: true
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
                        streetNameErrorStyle: true,
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
                    this.setState({
                        firstNameErrorMessage: "First Name is required.",
                        firstNameErrorStyle: true
                    });
                } else {
                    this.setState({
                        firstNameErrorMessage: "",
                        firstNameErrorStyle: false
                    });
                }
                break;
            case "lastName":
                if(e.target.value === ""){
                    this.setState({
                        lastNameErrorMessage: "Last Name is required.",
                        lastNameErrorStyle: true
                    });
                } else {
                    this.setState({
                        lastNameErrorMessage: "",
                        lastNameErrorStyle: false
                    });
                } 
                break;
            case "streetName":
                if(e.target.value === ""){
                    this.setState({
                        streetNameErrorMessage: "Street Name is required.",
                        streetNameErrorStyle: true
                    });
                } else {
                    this.setState({
                        streetNameErrorMessage: "",
                        streetNameErrorStyle: false
                });
                }
                break
            case "email":
                if(e.target.value === ""){
                    this.setState({
                        emailErrorMessage: "Email is required.",
                        emailErrorStyle: true
                    });
                } else {
                    this.setState({
                        emailErrorMessage: "",
                        emailErrorStyle: false
                    });
                }
                let presentArroba = false;
                const checkArroba = this.state.email.slice(-1);
                let lastCharacter = e.target.value.slice(-1);
                if(checkArroba ==="@") presentArroba = true;
                debugger

                if((checkArroba === "" 
                    || lastCharacter === "" 
                    || lastCharacter === "."  
                    || e.target.value === ""  
                    || presentArroba) 
                    && lastCharacter !== " "
                    && !validateEmail(e.target.value)){
                    this.setState({
                        emailErrorMessage: "Please enter a valid email address.",
                        emailErrorStyle: true
                    });
                } else {
                    this.setState({
                        emailErrorMessage: "",
                        emailErrorStyle: false
                    });
                }
                break;
            case "phone":
                if(e.target.value === ""){
                    this.setState({
                        phoneErrorMessage: "Phone is required.",
                        phoneErrorStyle: true
                    });
                } else {
                    this.setState({
                        phoneErrorMessage: "",
                        phoneErrorStyle: false
                    });
                }
                break;
            case "city":
                if(e.target.value === "0"){
                    this.setState({
                        cityErrorMessage: "City is required.",
                        cityErrorStyle: true
                    });
                } else {
                    this.setState({
                        cityErrorMessage: "",
                        cityErrorStyle: false
                });
                }
                break
            default:
                break;
        }
    }
    
    sendPerson = () => {
        this.props.dispatch(CreatePerson(this.state))
    }

    handleClose = () => {
        this.props.dispatch(openModalSuccess(false));
    }
    handleCloseModalError = () => {
        this.props.dispatch(openModalError(false));

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
            firstName,
            lastName,
            streetName,
            city,
            email,
            phone,
            personInputsValid,
            handleSelect,
            addressInputsValid,
            firstNameErrorStyle,
            lastNameErrorStyle,
            emailErrorStyle,
            phoneErrorStyle,
            streetNameErrorStyle
        } = this.state;
        const {isOpenModalSuccess, isOpenModalError} = this.props;
        return (
            <div>
                <Modal 
                    show={isOpenModalSuccess} 
                    onHide={this.handleClose}
                    aria-labelledby="contained-modal-title-vcenter"
                    centered
                >
                    <Modal.Header closeButton>
                    <Modal.Title>Success!</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>Person created successfully!</Modal.Body>
                    <Modal.Footer>
                    <Button variant="primary" onClick={this.handleClose}>
                        OK
                    </Button>
                    </Modal.Footer>
                </Modal>
                <Modal 
                    show={isOpenModalError} 
                    onHide={this.handleCloseModalError}
                    aria-labelledby="contained-modal-title-vcenter"
                    centered
                >
                    <Modal.Header closeButton>
                    <Modal.Title>Oops! Something went wrong</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>An error has ocurred creating a Person</Modal.Body>
                    <Modal.Footer>
                    <Button variant="primary" onClick={this.handleCloseModalError}>
                        OK
                    </Button>
                    </Modal.Footer>
                </Modal>
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
                            personInputsValid={personInputsValid}
                            firstNameErrorStyle={firstNameErrorStyle}
                            lastNameErrorStyle={lastNameErrorStyle}
                            phoneErrorStyle={phoneErrorStyle}
                            emailErrorStyle={emailErrorStyle}
                            firstName={firstName}
                            email={email}
                            phone={phone}
                            personInputsValid={personInputsValid}
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
                            streetNameErrorStyle={streetNameErrorStyle}
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
                    isLoading={this.props.isLoading}
                    step={step}
                    />
            </div>
        );
    }
}
const mapStateToProps = (state) => ({
    isLoading: state.personReducer.isLoading,
    isOpenModalSuccess: state.personReducer.isOpenModalSuccess,
    isOpenModalError: state.personReducer.isOpenModalError
 });
 
 const mapDispatchToProps = (dispatch) => ({
     dispatch: (action) => { dispatch(action); },
 })
 
 export default connect(mapStateToProps,mapDispatchToProps)(Form);