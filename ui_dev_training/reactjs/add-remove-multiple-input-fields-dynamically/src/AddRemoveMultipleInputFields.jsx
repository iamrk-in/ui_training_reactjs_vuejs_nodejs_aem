import { useState } from "react";

function AddRemoveMultipleInputFields() {
    const [inputFields, setInputFields] = useState([{
        fullName: "", 
        emailAddress: "", 
        salary: ""
    }]);

    // handleChange 
    const handleChange = (index, event) => {
        const { name, value } = event.target;
        const list = [...inputFields];
        list[index][name] = value;
        setInputFields(list);
    }

    // addInputFields
    const addInputFields = () => {
        setInputFields([...inputFields, {
            fullName: "", 
            emailAddress: "", 
            salary: ""
        }])
    }

    // removeInputFields
    const removeInputFields = (index) => {
        const rows = [...inputFields];
        rows.splice(index, 1);
        setInputFields(rows);
    }

    return(
        <div className="container">
            <div className="row">
                <div className="col-sm-8 offset-sm-2">
                    {inputFields.map((data, index) => {
                        const { fullName, emailAddress, salary } = data;
                        return(
                            <div className="row my-3" key={index}>
                                <div className="col">
                                    <div className="form-group">
                                        <input type="text" onChange={(event) => handleChange(index, event)} value={fullName} name="fullName" className="form-control" placeholder="full name" />
                                    </div>
                                </div>
                                <div className="col">
                                    <div className="form-group">
                                        <input type="text" onChange={(event) => handleChange(index, event)} value={emailAddress} name="emailAddress" className="form-control" placeholder="email address" />
                                    </div>
                                </div>
                                <div className="col">
                                    <div className="form-group">
                                        <input type="text" onChange={(event) => handleChange(index, event)} value={salary} name="salary" className="form-control" placeholder="salary" />
                                    </div>
                                </div>
                                <div className="col">
                                    {(inputFields.length !== 1) ? <button type="button" className="btn btn-outline-danger" onClick={removeInputFields}> Remove </button> : ''}
                                </div>
                            </div>
                        )
                    })}

                    <div className="row">
                        <div className="col-sm-12">
                            <button type="button" className="btn btn-outline-success" onClick={addInputFields}> Add </button>
                        </div>
                    </div>
                </div>
                <div className="col-sm-2"></div>
            </div>
        </div>
    )
}

export default AddRemoveMultipleInputFields;