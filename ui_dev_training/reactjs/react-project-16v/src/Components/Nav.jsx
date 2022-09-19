import React from "react";
import { NavLink } from "react-router-dom";

let Nav = () => {
    return(
            <nav className="navbar navbar-inverse navbar-fixed-top" role="navigation">
                <div className="container">
                    { /* Brand and toggle get grouped for better mobile display*/ } 
                    <div className="navbar-header">
                        <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
                            <span className="sr-only">Toggle navigation</span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                        </button>
                        <NavLink className="navbar-brand" activeClassName="active" to="/">My Bootstrap Theme</NavLink>
                    </div>

                    <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                        <ul className="nav navbar-nav navbar-right">
                            <li>
                                <NavLink exact activeClassName="active" to="/">Home</NavLink>
                            </li>
                            <li>
                                <NavLink activeClassName="active" to="/aboutus">About Us</NavLink>
                            </li>
                            <li>
                                <NavLink activeClassName="active" to="/products">Products</NavLink>
                            </li>
                            <li>
                                <NavLink activeClassName="active" to="/users">Users</NavLink>
                            </li>
                            <li>
                                <NavLink activeClassName="active" to="/formvalidation">Form Validation</NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
    )
}

export default Nav;