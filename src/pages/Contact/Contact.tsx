import React from "react";
import "./Contact.css";
import ContactForm from "../../components/ContactForm/ContactForm";

function Contact() {
    return (
        <>
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
