import React, { Component } from "react";
import axios from "axios";

class PersonContainer extends Component {
  state = {
    personData: []
  };

  componentDidMount() {
    axios
      .get("http://localhost:5000/v1/persons")
      .then(res => {
        const personData = res.data;
        console.log(personData);
        this.setState({ personData });
      })
      .catch(err => {
        console.log(err);
      });
  }

  render() {
    const { personData } = this.state;
    return (
      <>
        <div>{personData}</div>
      </>
    );
  }
}

export default PersonContainer;
