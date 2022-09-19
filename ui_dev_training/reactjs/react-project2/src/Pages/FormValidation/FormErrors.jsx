import React from "react";

export const FormErrors = ({formErrors}) => 
    <div className="row">
        <div className="col-12">
            {Object.keys(formErrors).map((fieldName, index) => {
                if(formErrors[fieldName].length > 0) {
                    return(
                        <p>{fieldName} {formErrors[fieldName]}</p>
                    )
                } else {
                    return("");
                }
            })}
        </div>
    </div>