import React from 'react';
import ErrorFormMessage from './ErrorFormMessage';
import send from '../../images/icons/send24.png';
import '../SCSS/ContactForm.scss';

const ContactForm = ({ handleEmailOnChange, validEmail, handleTopicOnChange, validTopic, handleNrOnChange, validPhone, handleMessageOnChange, validMessage, handleOnSubmit, submitValid }) => {
    return (
        <div className="contact-form">
            <form onSubmit={(e) => {
                e.preventDefault();
                handleOnSubmit()
            }} autoComplete="off" className="form" noValidate method="POST">
                <div className="form-grid">
                    <div className="form-grid-item">
                        <fieldset>
                            <input id="email" type="email" name="email" placeholder="E-mail" onChange={handleEmailOnChange} />
                            <ErrorFormMessage valid={validEmail} message={"E-mail address is not valid"} />
                            <input id="topic" type="text" name="topic" placeholder="Topic" onChange={handleTopicOnChange} />
                            <ErrorFormMessage valid={validTopic} message={"Type topic of message"} />
                            <input id="phoneNumber" type="tel" name="tel" placeholder="(Optional) phone number" maxLength="15"
                                minLength="9" onChange={handleNrOnChange} />
                            <ErrorFormMessage valid={validPhone} message={"Form of number is incorrect"} />
                        </fieldset>
                    </div>
                    <div className="form-grid-item">
                        <fieldset>
                            <textarea id="textarea" name="wiadomosc" placeholder="Message" onChange={handleMessageOnChange}></textarea>
                            <ErrorFormMessage valid={validMessage} message={"Write message before sending"} />
                        </fieldset>
                    </div>
                </div>
                <span className="submit-span">
                    <input id="submit" type="submit" value="Send" />

                    <img src={send} alt="" />
                </span>
                <ErrorFormMessage valid={submitValid} message={"Check if each field is filled properly"} />
            </form>
        </div>
    );
}

export default ContactForm;