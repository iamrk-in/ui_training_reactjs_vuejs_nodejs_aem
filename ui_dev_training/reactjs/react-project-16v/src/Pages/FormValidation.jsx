import React, { Component } from "react";

class FormValidation extends Component {
    // constructor
    constructor(props) {
        super(props);
        this.state = {
            // required properties
            fullName: "", 
            emailAddress: "", 
            mobileNumber: "", 

            // valid properties
            fullNameValid: false, 
            emailAddressValid: false, 
            mobileNumberValid: false, 
            formValid: false, 

            // error msgs
            formErrors: {
                fullName: "", 
                emailAddress: "", 
                mobileNumber: ""
            }
        }
    };

    // handleUserInput
    handleUserInput = () => {
        
    };


    render() {
        return(
        <div>
            { /* container */ }
            <div>
                { /* Page Heading/Breadcrumbs */ }
                <div class="row">
                    <div class="col-lg-12">
                        <h1 class="page-header">About
                            <small>Subheading</small>
                        </h1>
                        <ol class="breadcrumb">
                            <li><a href="index.html">Home</a>
                            </li>
                            <li class="active">Form Validation</li>
                        </ol>
                    </div>
                </div>
                { /* row */ }

                { /* Intro Content */ }
                <div class="row">
                    <div class="col-md-6">
                        { /* form validation */ }
                        <form name="frm" method="post">
                            <table className="table">
                                <tr>
                                    <th colspan="2"> User Registration Form </th>
                                </tr>
                                <tr className="mb-3">
                                    <td>Full Name</td>
                                    <td>
                                        <input 
                                            type="text" 
                                            name="fullName" 
                                            className="form-control" 
                                            value={this.state.fullName} 
                                            required 
                                            placeholder="john paul" 
                                            onChange={this.handleUserInput} />
                                    </td>
                                </tr>
                                <tr>
                                    <td>Email Address</td>
                                    <td>
                                        <input 
                                            type="text" 
                                            name="emailAddress"  
                                            className="form-control" 
                                            value={this.state.emailAddress} 
                                            required 
                                            placeholder="john@gmail.com" 
                                            onChange={this.handleUserInput} />
                                    </td>
                                </tr>
                                <tr>
                                    <td>Mobile Number</td>
                                    <td>
                                        <input 
                                        type="text" 
                                        name="mobileNumber" 
                                        className="form-control" 
                                        value={this.state.mobileNumber} 
                                        required 
                                        placeholder="+(564) 573 4786" 
                                        onChange={this.handleUserInput} />
                                    </td>
                                </tr>
                                <tr>
                                    <td></td>
                                    <td>
                                        <input type="submit" name="submit" className="btn btn-primary btn-sm" value="submit" disabled={!this.state.formValid} />

                                        <input type="reset" name="reset" value="reset" className="btn btn-warning btn-sm" />
                                    </td>
                                </tr>
                            </table>
                        </form>
                    </div>
                    <div class="col-md-6">
                        <h2>Form Modern Business</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed voluptate nihil eum consectetur similique? Consectetur, quod, incidunt, harum nisi dolores delectus reprehenderit voluptatem perferendis dicta dolorem non blanditiis ex fugiat.</p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe, magni, aperiam vitae illum voluptatum aut sequi impedit non velit ab ea pariatur sint quidem corporis eveniet. Odit, temporibus reprehenderit dolorum!</p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et, consequuntur, modi mollitia corporis ipsa voluptate corrupti eum ratione ex ea praesentium quibusdam? Aut, in eum facere corrupti necessitatibus perspiciatis quis?</p>
                    </div>
                </div>
                { /* row */ }

                { /* Our Customers */ }
                <div class="row">
                    <div class="col-lg-12">
                        <h2 class="page-header">Our Customers</h2>
                    </div>
                    <div class="col-md-2 col-sm-4 col-xs-6">
                        <img class="img-responsive customer-img" src={require("../images/cruise.png")} alt="" />
                    </div>
                    <div class="col-md-2 col-sm-4 col-xs-6">
                        <img class="img-responsive customer-img" src={require("../images/cruise.png")} alt="" />
                    </div>
                    <div class="col-md-2 col-sm-4 col-xs-6">
                        <img class="img-responsive customer-img" src={require("../images/cruise.png")} alt="" />
                    </div>
                </div>
                { /* row */ }
            </div>
        </div>
        )
    }
}

export default FormValidation;