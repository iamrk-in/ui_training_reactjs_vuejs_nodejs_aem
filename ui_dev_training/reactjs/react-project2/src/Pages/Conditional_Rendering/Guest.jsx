import React from "react";


function Guest(props) {
    return(
        <React.Fragment className="row">
            <div className="col-12">
                <h4> Welcome Guest! </h4>

                <button type="button" className="btn btn-info me-2 mb-2" onClick={props.clickLogin}>Login</button>
                
                <button type="button" className="btn btn-info me-2 mb-2">Signup</button>
            </div>
        </React.Fragment>
    )
}

export default Guest;