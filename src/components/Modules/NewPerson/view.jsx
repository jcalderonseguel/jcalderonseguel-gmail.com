import React from "react";
import ProfileStep from "./Steps/ProfileStep";
import AddressStep from "./Steps/AddressStep";
import FinishStep from "./Steps/FinishStep";
import MenuAction from "./MenuActions/MenuAction";
import { connect } from "react-redux";
import MenuHeader from "./MenuHeader/MenuHeader";
import { CreatePerson } from "./action";

class FormNewPerson extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      addressValid: true,
      personValidInput: true,
      personValid: true,
      activeStep: 1,
      firstName: "",
      lastName: "",
      email: "",
      street: "",
      phone: "",
      city: ""
    };
  }

  handleChange = input => e => {
    this.setState({ [input]: e.target.value });
    switch (input) {
      case "firstName":
        if (e.target.value === "") {
          this.setState({ firstNameError: "Firstname is required" });
        }
        break;
      case "lastName":
        if (e.target.value === "") {
          this.setState({ lastNameError: "Lastname is required" });
        }
        break;
      case "email":
        if (e.target.value === "") {
          this.setState({ emailError: "Email is required" });
        }
        break;
      case "phone":
        if (e.target.value === "") {
          this.setState({
            phoneError: "Phone is required"
          });
        }
        break;
      case "street":
        if (e.target.value === "") {
          this.setState({ streetError: "Street is required" });
        }
        break;
      case "city":
        if (e.target.value === "") {
          this.setState({ cityError: "City is required" });
        }
        break;

      default:
        break;
    }
  };

  backStep = () => {
    this.setState({
      activeStep:
        this.state.activeStep > 1
          ? this.state.activeStep - 1
          : this.state.activeStep
    });
  };

  nextStep = () => {
    const {
      activeStep,
      firstName,
      lastName,
      email,
      street,
      phone
    } = this.state;

    switch (activeStep) {
      case 1:
        if (firstName.trim() === "") {
          this.setState({
            firstNameError: "Firstname is required",
            personValid: false
          });
        } else {
          this.setState({
            firstNameError: null
          });
        }
        if (lastName.trim() === "") {
          this.setState({
            lastNameError: "Lastname is required",
            personValid: false
          });
        } else {
          this.setState({
            lastNameError: null
          });
        }

        if (email.trim() === "") {
          this.setState({
            emailError: "Email is required",
            personValid: false
          });
        } else {
          this.setState({
            emailError: null
          });
        }

        if (phone.trim() === "") {
          this.setState({
            phoneError: "Phone is required",
            personValid: false
          });
        } else {
          this.setState({
            phoneError: null
          });
        }

        if (
          firstName.trim() !== "" &&
          lastName.trim() !== "" &&
          email.trim() !== "" &&
          phone.trim() !== ""
        ) {
          this.setState({
            activeStep: activeStep + 1,
            enabledAddress: true,
            personValid: true
          });
        }
        break;
      case 2:
        if (street.trim() === "") {
          this.setState({
            streetError: "Street is required",
            addressValid: false
          });
        } else {
          this.setState({
            streetError: null
          });
        }

        // if (city.trim() === "") {
        //   this.setState({ cityError: "City is required" });
        // } else {
        //   this.setState({
        //     enabledSummary: true,
        //     personValid: true,
        //     cityError: null
        //   });
        // }

        if (street.trim() !== "") {
          this.setState({
            activeStep: activeStep + 1,
            addressValid: true,
            enabledSummary: true
          });
        }

        // if (city.trim() === "") {
        //   this.setState({ cityError: "City is required" });
        // } else {
        //   this.setState({
        //     enabledSummary: true,
        //     personValid: true,
        //     cityError: null
        //   });
        // }
        break;
      default:
        break;
    }
  };

  btnProfile = () => {
    this.setState({ activeStep: 1 });
  };

  btnAddress = () => {
    const { firstName, lastName, email, phone, activeStep } = this.state;

    switch (activeStep) {
      case 1:
        if (firstName.trim() === "") {
          this.setState({
            personValid: false,
            firstNameError: "Firstname is required"
          });
        } else {
          this.setState({ firstNameError: null });
        }

        if (lastName.trim() === "") {
          this.setState({
            personValid: false,
            lastNameError: "Lastname is required"
          });
        } else {
          this.setState({ lastNameError: false });
        }

        if (email.trim() === "") {
          this.setState({
            personValid: false,
            emailError: "Email is required"
          });
        } else {
          this.setState({ emailError: false });
        }

        if (phone.trim() === "") {
          this.setState({
            personValid: false,
            phoneError: "Phone is required"
          });
        } else {
          this.setState({ phoneError: false });
        }

        if (
          firstName.trim() !== "" &&
          lastName.trim() !== "" &&
          email.trim() !== "" &&
          phone.trim() !== ""
        ) {
          this.setState({
            activeStep: 2,
            personValid: true
          });
        }
        break;
      default:
        break;
    }
  };

  btnSummary = () => {
    this.setState({ activeStep: 3 });
  };

  btnSend = () => {
    Promise.all([new Promise(CreatePerson(this.state))])
      .then(data => {
        debugger;
        if (data && data[0]) {
          console.log("exitoso");
        }
      })
      .catch(err => console.log(err));
  };

  render() {
    console.log(this.state);
    const {
      activeStep,
      firstName,
      lastName,
      lastNameError,
      enabledAddress,
      enabledSummary,
      firstNameError,
      email,
      emailError,
      street,
      streetError,
      city,
      cityError,
      phone,
      phoneError,
      personValidInput,
      personValid,
      addressValid
    } = this.state;
    return (
      <div>
        <form action="">
          <MenuHeader
            enabledAddress={enabledAddress}
            enabledSummary={enabledSummary}
            btnProfile={this.btnProfile}
            btnAddress={this.btnAddress}
            btnSummary={this.btnSummary}
            personValid={personValid}
            activeStep={activeStep}
            addressValid={addressValid}
          ></MenuHeader>
          {this.state.activeStep === 1 && (
            <ProfileStep
              firstName={firstName}
              firstNameError={firstNameError}
              lastName={lastName}
              lastNameError={lastNameError}
              email={email}
              emailError={emailError}
              phone={phone}
              phoneError={phoneError}
              personValidInput={personValidInput}
              handleChange={this.handleChange}
            />
          )}
          {this.state.activeStep === 2 && (
            <AddressStep
              street={street}
              streetError={streetError}
              city={city}
              cityError={cityError}
              handleChange={this.handleChange}
            />
          )}
          {this.state.activeStep === 3 && <FinishStep />}
          <div>
            <MenuAction
              nextStep={this.nextStep}
              backStep={this.backStep}
              step={activeStep}
              btnSend={this.btnSend}
            ></MenuAction>
          </div>
        </form>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    activeStep: state.activeStep
  };
};

const mapDispatchToProps = dispatch => ({
  dispatch: action => {
    dispatch(action);
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(FormNewPerson);
