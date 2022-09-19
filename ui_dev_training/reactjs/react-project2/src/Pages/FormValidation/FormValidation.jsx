import React, { Component } from "react";
import { FormErrors } from "./FormErrors"; 

class FormValidation extends Component {
  // constructor
  constructor(props) {
    super(props);
    this.state = {
        // required properties
        emailAddress: "", 
        password: "", 

        // valid properties
        emailAddressValid: false, 
        passwordValid: false, 
        formValid: false, 

        // error msgs
        formErrors: {
            emailAddress: "", 
            password: ""
        }
    }
  };

  // handleUserInput
  handleUserInput = (event) => {
    // declaring the local variables: to capture the fieldName and its fieldValue
    const fieldName = event.target.name;
    const fieldValue = event.target.value;

    this.setState({
      [fieldName]: fieldValue
    }, () => { this.validateField(fieldName, fieldValue) })
  };

  // validateField
  validateField(fieldName, fieldValue) {
    // let us take the defaul values from the state properties into your local variables
    let fieldValidationErrors = this.state.formErrors;
    let emailAddressValid = this.state.emailAddressValid;
    let passwordValid = this.state.passwordValid;

    switch(fieldName) {
      case "emailAddress": 
        emailAddressValid = fieldValue.match(/^([\w.]+)@([\w]+\.)+([\w]{2,5})$/);
        fieldValidationErrors.emailAddress = emailAddressValid ? "" : " is incorrect";
        break;
        
      case "password": 
        passwordValid = fieldValue.match(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])([a-zA-Z0-9]){5,9}$/);
        fieldValidationErrors.password = passwordValid ? "" : " is wrong";
        break;

      default: 
        break;
    }
    this.setState({
      formErrors: fieldValidationErrors, 
      emailAddressValid: emailAddressValid, 
      passwordValid: passwordValid
    }, this.validateForm);
  };

  // validateForm
  validateForm() {
    this.setState({
      formValid: this.state.emailAddressValid && this.state.passwordValid
    })
  }

  render() {
    return(
      <div className="row">
        <div className="col-12">
          <form name="frm">

            <div class="row mb-3">
              <FormErrors formErrors = {this.state.formErrors}  />
            </div>

            <div class="row mb-3">
                <label class="col-form-label col-sm-3 text-sm-end">Email Address</label>
                <div class="col-sm-6">
                    <input type="text" name="emailAddress" value={this.state.emailAddress} placeholder="" class="form-control" required onChange={this.handleUserInput} />
                </div>
            </div>

            <div class="row mb-3">
                <label class="col-form-label col-sm-3 text-sm-end">Password</label>
                <div class="col-sm-6">
                    <input type="password" name="password" value={this.state.password} placeholder="" class="form-control" required onChange={this.handleUserInput} />
                </div>
            </div>

            <div class="row mb-3">
                <div class="col-sm-6 offset-sm-3">
                    <button type="button" class="btn btn-primary" disabled={!this.state.formValid}>Submit</button>
                </div>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default FormValidation;