import React from "react";
import "./Contact.css";
import NavBar from "../NavBar/NavBar";
import ContactForm from "../ContactForm/ContactForm";

function Contact() {
    return (
        <>
            <NavBar />
            <section className="contact-container">
                <div className="contact-msg">
                    <h3>Would love to hear from you.</h3>
                </div>
                <div className="contact-form-container">
                    <ContactForm />
                </div>
            </section>
        </>
    );
}

export default Contact;
