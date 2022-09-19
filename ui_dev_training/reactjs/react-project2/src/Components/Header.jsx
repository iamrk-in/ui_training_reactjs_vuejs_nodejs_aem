import React from "react";
import { NavLink } from "react-router-dom";

let Header = () => {
    return(
            <div class="row header">
                <div class="col-sm-3">
                    <h3>Responsive Website</h3>
                </div>

                <div class="col-sm-9 text-sm-end">
                    <NavLink activeClassName="active" className="text-dark" to="/"> home </NavLink>
                    <span> | </span>
                    <NavLink activeClassName="active" className="text-dark" to="/form-validation"> form validation </NavLink>
                    <span> | </span>
                    <NavLink activeClassName="active" className="text-dark" to="/file-upload"> file upload </NavLink>
                    <span> | </span>
                    <NavLink activeClassName="active" className="text-dark" to="/ref"> ref </NavLink>
                    <span> | </span>
                    <NavLink activeClassName="active" className="text-dark" to="/restapi"> restapi </NavLink>
                    <span> | </span>
                    <NavLink activeClassName="active" className="text-dark" to="/todoapp"> todoapp </NavLink>
                    <span> | </span>
                    <NavLink activeClassName="active" className="text-dark" to="/cblch-todoapp"> class based lch - todoapp </NavLink>
                    <span> | </span>
                    <NavLink activeClassName="active" className="text-dark" to="/fblch-photosapp"> function based lch - photosapp </NavLink>
                    <span> | </span>
                    <NavLink activeClassName="active" className="text-dark" to="/styled-components"> styled components </NavLink>
                    <span> | </span>
                    <NavLink activeClassName="active" className="text-dark" to="/context-api"> context api </NavLink>
                    {/* <span> | </span>
                    <NavLink activeClassName="active" className="text-dark" to="/mui-crud-operations"> material ui crud operations </NavLink> */}
                    <span> | </span>
                    <NavLink activeClassName="active" className="text-dark" to="/conditional-rendering"> conditional rendering </NavLink>
                    {/* <span> | </span>
                    <NavLink activeClassName="active" className="text-dark" to="/protected-routing"> protected routing </NavLink> */}
                    <span> | </span>
                    <NavLink activeClassName="active" className="text-dark" to="/accordion"> accordion </NavLink>
                    <span> | </span>
                    <NavLink activeClassName="active" className="text-dark" to="/gallery-filter"> gallery filter </NavLink>
                </div>
            </div>
    );
}

export default Header;