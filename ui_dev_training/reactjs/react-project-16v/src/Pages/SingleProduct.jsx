import React from "react";

let SingleProduct = (props) => {
    return(
        <div className="card">
            <div className="card-body">
                <ul className="list-group">
                    <li className="list-group-item list-group-item-action">
                        <strong>Id</strong> {props.id}
                    </li>
                    <li className="list-group-item list-group-item-action">
                        <strong>Name</strong> {props.name}
                    </li>
                    <li className="list-group-item list-group-item-action" onClick={props.updateAllRecords}>
                        update all records 
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default SingleProduct;