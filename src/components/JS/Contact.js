import React, { Component } from 'react';
import ContactInfo from './ContactInfo';
import ContactForm from './ContactForm';
import '../SCSS/Contact.scss';
class Contact extends Component {
    state = {
        validEmail: false,
        validTopic: false,
        validPhone: false,
        validMessage: false,
        submitValid: false
    }

    handleEmailOnChange = (e) => {
        /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e.target.value) ? this.setState(() => ({
            validEmail: true
        })) : this.setState(() => ({
            validEmail: false
        }))
    }
    handleTopicOnChange = (e) => {
        let value = e.target.value;
        (value === "" || value === null) ? this.setState(() => ({
            validTopic: false
        })) : this.setState(() => ({
            validTopic: true
        }))
    }
    handleNrOnChange = (e) => {
        let value = e.target.value;
        if (value === "" || value === null) {
            this.setState(() => ({
                validPhone: true
            }))
        }
        else {
            /^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s\./0-9]*$/.test(value) ? this.setState(() => ({
                validPhone: true
            })) : this.setState(() => ({
                validPhone: false
            }))
        }
    }
    handleMessageOnChange = (e) => {
        (e.target.value <= 0) ? this.setState(() => ({
            validMessage: false
        })) : this.setState(() => ({
            validMessage: true
        }))
    }
    handleOnSubmit = () => {
        const { validEmail, validTopic, validPhone, validMessage } = this.state;
        (validEmail && validTopic && validPhone && validMessage) ? this.setState(() => ({
            submitValid: true
        })) : this.setState(() => ({
            submitValid: false
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
                        validEmail={this.state.validEmail}
                        validTopic={this.state.validTopic}
                        validPhone={this.state.validPhone}
                        validMessage={this.state.validMessage}
                        submitValid={this.state.submitValid}
                    />
                </div>

            </section>

        );
    }
}

export default Contact;