import React from "react";

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
    const { person } = this.props;

    return (
      <div>
        <div className="container">
            <h2>Resumen</h2>
            First Name: <b>{person.firstName}</b><br/>
            Last Name: <b>{person.lastName}</b><br/>
            City: <b>{person.city}</b><br/>
            Street Name: <b>{person.streetName}</b><br/>
        </div>
      </div>
    )
  }
}

export default FinishStep;
