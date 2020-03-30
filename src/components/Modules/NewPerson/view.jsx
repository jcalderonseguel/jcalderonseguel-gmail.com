import React from "react";
import AccountStep from "./Steps/AccountStep";
import ProfileStep from "./Steps/ProfileStep";
import WarningStep from "./Steps/WarningStep";
import FinishStep from "./Steps/FinishStep";
import MenuAction from "./MenuActions/MenuAction";
import { connect } from "react-redux";
import { nextStepActions } from "./action";

class FormNewPerson extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeStep: 1
    };
    // console.log(props);
  }

  render() {
    /*const backStep = () => {
      console.log("backStep");
    };*/

    const nextStep = () => {
      // this.state = Object.assign({}, this.state, { activeStep: 2 });

      // this.props.dispatch(nextStepActions(2));
      this.setState({
        activeStep:
          this.state.activeStep < 4
            ? this.state.activeStep + 1
            : this.state.activeStep
      });

      console.log(this.state);
    };

    /*const send = () => {
      console.log(step);
    };
    console.log(this.state);*/

    return (
      <div>
        {console.log(this.state)}
        {this.state.activeStep === 1 && <AccountStep />}
        {this.state.activeStep === 2 && <ProfileStep />}
        {this.state.activeStep === 3 && <WarningStep />}
        {this.state.activeStep === 4 && <FinishStep />}
        <MenuAction nextStep={nextStep}></MenuAction>
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
