import React, { createContext, useReducer } from "react";

export const ContactContext = createContext();

const initialState = {
    contacts: [
        { id: 1, name: "peter", email: "peter@gmail.com" }, 
        { id: 2, name: "john", email: "john@gmail.com" }, 
        { id: 3, name: "paul", email: "paul@gmail.com" }, 
        { id: 4, name: "smith", email: "smith@gmail.com" }
    ], 
    loading: false, 
    error: null
};

const reducer = (state, action) => {
    switch(action.type) {
        case "ADD_CONTACT": 
            return {
                contacts: [...state.contacts, action.payload]
            };

        case "DEL_CONTACT": 
            return {
                contacts: state.contacts.filter(contact => contact.id !== action.payload)
            };

        case "START": 
            return {
                loading: true 
            }

        default: 
            throw new Error();
    }
}

export const ContactContextProvider = (props) => {
    const [state, dispatch] = useReducer(reducer, initialState);
    return(
        <ContactContext.Provider value={[state, dispatch]}>
            {props.children}
        </ContactContext.Provider>
    );
}