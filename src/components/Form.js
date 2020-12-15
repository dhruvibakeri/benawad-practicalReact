import React from "react";

const initialState = {
  firstName: "",
  fnameError: "",
  lastName: "",
  lnameError: "",
  email: "",
  emailError: "",
  over21: false,
  title: "Mr.",
};

export default class Form extends React.Component {
  state = {
    firstName: "",
    fnameError: "",
    lastName: "",
    lnameError: "",
    email: "",
    emailError: "",
    over21: false,
    title: "Mr.",
  };

  handleChange = (event) => {
    const isCheckBox = event.target.type === "checkbox";
    this.setState({
      [event.target.name]: isCheckBox
        ? event.target.checked
        : event.target.value,
      fnameError: "",
      lnameError: "",
      emailError: "",
    });
  };

  handleSubmit = (event) => {
    const valid = this.validate();
    event.preventDefault();
    if (valid) {
      console.log(this.state);
      this.setState(initialState);
    }
  };

  validate = () => {
    let emailError = "";
    let fnameError = "";
    let lnameError = "";

    if (this.state.firstName === "") {
      fnameError = "name cannot be blank";
    }
    if (this.state.lastName === "") {
      lnameError = "name cannot be blank";
    }
    if (!this.state.email.includes("@")) {
      emailError = "invalid email";
    }

    if (emailError !== "" || fnameError !== "" || lnameError !== "") {
      this.setState({ emailError, fnameError, lnameError });
      return false;
    }

    return true;
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          name="firstName"
          placeholder="first name"
          value={this.state.firstName}
          onChange={this.handleChange}
        />
        <div style={{ fontSize: 12, color: "red" }}>
          {this.state.fnameError}
        </div>
        <br />
        <input
          name="lastName"
          placeholder="last name"
          value={this.state.lastName}
          onChange={this.handleChange}
        />
        <div style={{ fontSize: 12, color: "red" }}>
          {this.state.lnameError}
        </div>
        <br />
        <div>
          <input
            name="email"
            placeholder="email"
            value={this.state.email}
            onChange={this.handleChange}
          />
          <div style={{ fontSize: 12, color: "red" }}>
            {this.state.emailError}
          </div>
        </div>
        <br />
        <input
          name="over21"
          type="checkbox"
          value={this.state.over21}
          onChange={this.handleChange}
        />
        <br />
        <div>
          <select
            name="title"
            placeholder="title"
            value={this.state.title}
            onChange={this.handleChange}
          >
            <option>Mr.</option>
            <option>Ms.</option>
            <option>Mrs.</option>
          </select>
          <br />
        </div>
        <br />
        <button type="submit">Submit Form</button>
      </form>
    );
  }
}
