import React, { useState, useContext } from "react";
import _ from "lodash";
import { ContactContext } from "../context/contact-context";

export default function ContactForm() {
    const name = useFormInput("");
    const email = useFormInput("");

    const [state, dispatch] = useContext(ContactContext);

    const onSubmit = () => {
        dispatch({
            type: "ADD_CONTACT", 
            payload: {
                id: _.uniqueId(10), 
                name: name.value, 
                email: email.value
            }
        })

        name.onReset();
        email.onReset();
    }

    return(
        <div className="row">
            <div className="col-12">
                <form onSubmit={onSubmit}>
                    <div className="row">
                        <label className="col-4 col-form-label"> Name </label>
                        <div className="col-6">
                            <input className="form-control" {...name} required />
                        </div>
                    </div>

                    <div className="row">
                        <label className="col-4 col-form-label"> Email Address </label>
                        <div className="col-6">
                            <input className="form-control" {...email} required />
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-6">
                            <input type="submit" className="btn btn-primary" value="Add Contact" />
                        </div>
                    </div>

                </form>
            </div>
        </div>
    )
}

function useFormInput(initialValue) {
    const [value, setValue] = useState(initialValue);

    const handleChange = event => {
        setValue(event.target.value);
    }

    const handleReset = () => {
        setValue("");
    }

    return {
        value, 
        onChange: handleChange, 
        onReset: handleReset
    }

}