import React, { Component } from 'react';
import ContactInfo from './ContactInfo';
import ContactForm from './ContactForm';
import '../SCSS/Contact.scss';
class Contact extends Component {
    state = {
        errorEmail: false,
        errorTopic: false,
        errorPhone: false,
        errorMessage: false,
        errorSubmit: false,
        validEmail: false,
        validTopic: false,
        validPhone: false,
        validMessage: false,
        submitValid: false
    }

    handleEmailOnChange = (e) => {
        /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e.target.value) ? this.setState(() => ({
            validEmail: true,
            errorEmail: false
        })) : this.setState(() => ({
            validEmail: false,
            errorEmail: true
        }))
    }
    handleTopicOnChange = (e) => {
        let value = e.target.value;
        (value === "" || value === null) ? this.setState(() => ({
            validTopic: false,
            errorTopic: true
        })) : this.setState(() => ({
            validTopic: true,
            errorTopic: false
        }))
    }
    handleNrOnChange = (e) => {
        let value = e.target.value;
        if (value === "" || value === null) {
            this.setState(() => ({
                validPhone: true,
                errorPhone: false
            }))
        }
        else {
            /^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s\./0-9]*$/.test(value) ? this.setState(() => ({
                validPhone: true,
                errorPhone: false
            })) : this.setState(() => ({
                validPhone: false,
                errorPhone: true
            }))
        }
    }
    handleMessageOnChange = (e) => {
        (e.target.value <= 0) ? this.setState(() => ({
            validMessage: false,
            errorMessage: true
        })) : this.setState(() => ({
            validMessage: true,
            errorMessage: false
        }))
    }
    handleOnSubmit = () => {
        const { validEmail, validTopic, validPhone, validMessage } = this.state;
        (validEmail && validTopic && validPhone && validMessage) ? this.setState(() => ({
            submitValid: true,
            errorSubmit: false
        })) : this.setState(() => ({
            submitValid: false,
            errorSubmit: true
        }))
    }
    render() {
        console.log(this.state.validEmail);
        return (
            <section id="contact">
                <h1>Get in touch</h1>
                <div className="contact-grid">
                    <ContactInfo />
                    <ContactForm
                        handleEmailOnChange={this.handleEmailOnChange}
                        handleTopicOnChange={this.handleTopicOnChange}
                        handleNrOnChange={this.handleNrOnChange}
                        handleMessageOnChange={this.handleMessageOnChange}
                        handleOnSubmit={this.handleOnSubmit}
                        errorEmail={this.state.errorEmail}
                        errorTopic={this.state.errorTopic}
                        errorPhone={this.state.errorPhone}
                        errorMessage={this.state.errorMessage}
                        errorSubmit={this.state.errorSubmit}
                    />
                </div>

            </section>

        );
    }
}

export default Contact;