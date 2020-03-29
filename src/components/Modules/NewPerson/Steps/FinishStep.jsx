import React from "react";
import PropTypes from "prop-types";

/*const AccountStep = props => {
  return <div></div>;
};

AccountStep.propTypes = {};

export default AccountStep;*/

class FinishStep extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const {firstName, lastName, city, streetName } = this.props;

    return <div>
      <h2>Resumen</h2>
      First Name: <b>{firstName}</b><br/>
      Last Name: <b>{lastName}</b><br/>
      City: <b>{city}</b><br/>
      Street Name: <b>{streetName}</b><br/>
    </div>;
  }
}

export default FinishStep;
