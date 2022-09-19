import React from "react";
import ContactForm from "../components/contact-form";
import ContactTable from "../components/contact-table";
import { ContactContextProvider } from "../context/contact-context";

export default function ContactView() {
    return(
        <ContactContextProvider>
            <h4>Contacts Details</h4>

            <ContactForm />
            <ContactTable />
        </ContactContextProvider>
    )
}