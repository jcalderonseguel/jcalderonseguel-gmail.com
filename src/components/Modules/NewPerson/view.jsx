import React from "react";
import AccountStep from "./Steps/AccountStep";
import ProfileStep from "./Steps/ProfileStep";
import WarningStep from "./Steps/WarningStep";
import FinishStep from "./Steps/FinishStep";
import MenuAction from "./MenuActions/MenuAction";

class FormNewPerson extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeStep: 1
    };
  }

  render() {
    return (
      <div>
        <form id="form" action="#" className="wizard-big wizard clearfix">
          {this.state.activeStep === 1 && <AccountStep />}
          {this.state.activeStep === 2 && <ProfileStep />}
          {this.state.activeStep === 3 && <WarningStep />}
          {this.state.activeStep === 4 && <FinishStep />}
        </form>
        <MenuAction></MenuAction>
      </div>
    );
  }
}

export default FormNewPerson;
