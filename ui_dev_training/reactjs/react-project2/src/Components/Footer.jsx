import React from "react";
import { NavLink } from "react-router-dom";

let Footer = () => {
    return(
            <div class="row footer">
                <div class="col-sm-6">
                    <a href="#" class="text-dark"> Home </a> 
                    <span> | </span> 
                    <a href="#" class="text-dark"> About Us </a>
                </div>
                <div class="col-sm-6 text-sm-end">
                    <a href="#" class="text-dark"> Privacy Policy </a> 
                    <span> | </span> 
                    <a href="#" class="text-dark"> Contact Us </a>
                </div>
            </div>
    );
}

export default Footer;