import React, { Component } from "react";

class CreatePerson extends Component {
  render() {
    return (
      <form onSubmit={""}>
        <div className="Login">
          <label>Email: </label>
          <input type="text" name="email" />
          <label>Password: </label>
          <input type="text" name="password" />
          <button to="/Worldcase">Ingresar</button>
        </div>
      </form>
    );
  }
}

export default CreatePerson;
