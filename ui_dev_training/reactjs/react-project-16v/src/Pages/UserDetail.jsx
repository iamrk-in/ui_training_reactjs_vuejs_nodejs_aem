import React from "react";

const UserDetail = (props) => {
    let statusStyle = null;
    if(props.userStatus === true) {
        statusStyle = {
            color: "#0f0", 
            fontWeight: "bold"
        }
    } else {
        statusStyle = {
            color: "#f00", 
            fontWeight: "bold"
        }
    }
    
    return(
        <div className="col-sm-3">
            <strong>userId</strong> : {props.userId} <br />
            <strong>userName</strong> : {props.userName} <br />
            <strong>userType</strong> : {props.userType} <br /> 
            <strong>userStatus</strong> :{(props.userStatus === true ? (<span style={statusStyle}>{props.userStatus ? 'active': 'inactive'}</span>) : (<span style={statusStyle}>{props.userStatus ? 'active': 'inactive'}</span>))}
            <hr />
            <input type="text" className="form-control" onChange={props.changeName} />
            <hr />
            <button type="button" onClick={props.updateRecord} className="btn btn-sm btn-info me-2">update record</button>
            
            <button type="button" onClick={props.deleteRecord} className="btn btn-sm btn-danger">delete record</button>
        </div>
    );
}

export default UserDetail;