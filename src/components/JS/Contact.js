import React, { Component } from 'react';
import ContactInfo from './ContactInfo';
import ContactForm from './ContactForm';
import '../SCSS/Contact.scss';
class Contact extends Component {
    state = {}
    render() {
        return (
            <section id="contact">
                <h1>Get in touch</h1>
                <div className="contact-grid">
                    <ContactInfo />
                    <ContactForm />
                </div>

            </section>

        );
    }
}

export default Contact;