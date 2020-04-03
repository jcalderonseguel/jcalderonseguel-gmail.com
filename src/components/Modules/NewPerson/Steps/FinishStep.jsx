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
    const { summary } = this.props;
    return (
      <div className="container">
        <div className="col-lg-12">
          <h2>Terms and Conditions</h2>
          <input
            id="acceptTerms"
            name="acceptTerms"
            type="checkbox"
            className="required"
            value={summary}
          />
          <label htmlFor="acceptTerms">
            I agree with the Terms and Conditions.
          </label>
        </div>
      </div>
    );
  }
}

export default FinishStep;
