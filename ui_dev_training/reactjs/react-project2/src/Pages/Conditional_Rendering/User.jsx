import React from "react";

function User(props) {
    return(
        <React.Fragment className="row">
            <div className="col-12">
                <h4> Welcome {props.fullName}! </h4>

                <button type="button" className="btn btn-info me-2 mb-2" onClick={props.clickLogout}>Logout</button>
                
            </div>
        </React.Fragment>
    )
}

export default User;