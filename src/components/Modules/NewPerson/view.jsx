import React from "react";
import ProfileStep from "./Steps/ProfileStep";
import AddressStep from "./Steps/AddressStep";
import FinishStep from "./Steps/FinishStep";
import MenuAction from "./MenuActions/MenuAction";
import { connect } from "react-redux";
import MenuHeader from "./MenuHeader/MenuHeader";

class FormNewPerson extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
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
      case "email":
        if (e.target.value === "") {
          this.setState({ emailError: "Email is required" });
        }
      case "phone":
        if (e.target.value === "") {
          this.setState({
            phoneError: "Phone is required"
          });
        }
      case "street":
        if (e.target.value === "") {
          this.setState({ streetError: "Street is required" });
        }
      case "city":
        if (e.target.value === "") {
          this.setState({ cityError: "City is required" });
        }

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
      phone,
      city
    } = this.state;

    switch (activeStep) {
      case 1:
        if (firstName.trim() === "") {
          this.setState({
            firstNameError: "Firstname is required"
          });
        } else {
          this.setState({
            enabledAddress: true,
            personValid: true,
            firstNameError: null
          });
        }
        if (lastName.trim() === "") {
          this.setState({
            lastNameError: "Lastname is required"
          });
        } else {
          this.setState({
            enabledAddress: true,
            personValid: true,
            lastNameError: null
          });
        }

        if (email.trim() === "") {
          this.setState({
            emailError: "Email is required"
          });
        } else {
          this.setState({
            enabledAddress: true,
            personValid: true,
            emailError: null
          });
        }

        if (phone.trim() === "") {
          this.setState({
            phoneError: "Phone is required"
          });
        } else {
          this.setState({
            enabledAddress: true,
            personValid: true,
            phoneError: null
          });
        }

        if (
          firstName.trim() &&
          lastName.trim() &&
          email.trim() &&
          phone.trim() !== ""
        ) {
          this.setState({ activeStep: activeStep + 1 });
        }
        break;
      case 2:
        if (street.trim() === "") {
          this.setState({
            streetError: "Street is required"
          });
        } else {
          this.setState({
            enabledSummary: true,
            personValid: true,
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
          this.setState({ activeStep: activeStep + 1 });
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

      default:
        break;
    }
  };

  btnProfile = () => {
    this.setState({ activeStep: (this.state.activeStep = 1) });
  };

  btnAddress = () => {
    this.setState({ activeStep: (this.state.activeStep = 2) });
  };

  btnSummary = () => {
    this.setState({ activeStep: (this.state.activeStep = 3) });
  };

  render() {
    /*const send = () => {
      console.log(step);
    };
    console.log(this.state);*/
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
      phoneError
    } = this.state;
    return (
      <div>
        <form action="">
          <MenuHeader
            enabledAddress={enabledAddress}
            enabledAddress={enabledSummary}
            btnAddress={this.btnAddress}
            btnProfile={this.btnProfile}
            btnSummary={this.btnSummary}
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
