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
    // const { userName } = this.setState({
    //   activeStep:
    //     this.state.activeStep < 4
    //       ? this.state.activeStep + 1
    //       : this.state.activeStep
    // });
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
      case 2:
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
      case 3:
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

      case 4:
        if (firstName.trim() && lastName.trim() && email.trim() !== "") {
          this.setState({ activeStep: activeStep + 1 });
        }

        break;

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
      firstNameError,
      email,
      emailError
    } = this.state;
    return (
      <div>
        <form action="">
          <MenuHeader
            enabledAddress={enabledAddress}
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
              handleChange={this.handleChange}
            />
          )}
          {this.state.activeStep === 2 && (
            <AddressStep handleChange={this.handleChange} />
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
