import React, { useState, useContext } from "react";
import { ContactContext } from "../context/contact-context";

export default function ContactTable() {
    const [state, dispatch] = useContext(ContactContext);
    const [selectedId, setSelectedId] = useState();

    const delContact = id => {
        dispatch({
            type: "DEL_CONTACT", 
            payload: id
        })
    }

    const onRemoveUser = () => {
        delContact(selectedId);
        console.log(selectedId);
        setSelectedId(null);
    }

    const rows = state.contacts.map((contact, index) => (
        <tr key={contact.id}
            onClick={() => setSelectedId(contact.id)} 
        >
            <td>{contact.id}</td>
            <td>{contact.name}</td>
            <td>{contact.email}</td>
        </tr>
    ));

    return(
        <div className="row">
            <div className="col-12">
                <table className="table table-bordered table-striped">
                    <tr className="table-dark">
                        <th>Id</th>
                        <th>Name</th>
                        <th>Email</th>
                    </tr>
                    {rows}
                    <tr>
                        <td>
                            <button 
                                type="button" 
                                disabled={!selectedId}
                                onClick={onRemoveUser}
                            >
                                Del Contact 
                            </button>
                        </td>
                    </tr>
                </table>
            </div>
        </div>
    )
}