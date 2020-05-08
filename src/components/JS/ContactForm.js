import React from 'react';
import ErrorFormMessage from './ErrorFormMessage';
import '../SCSS/ContactForm.scss';

const ContactForm = ({ handleEmailOnChange, validEmail, handleTopicOnChange, validTopic, handleNrOnChange, validPhone, handleMessageOnChange, validMessage }) => {
    return (
        <div className="contact-form">
            <form autoComplete="off" className="form" noValidate method="POST">
                <div className="form-grid">
                    <div className="form-grid-item">
                        <fieldset>
                            <input id="email" type="email" name="email" placeholder="E-mail" onChange={handleEmailOnChange} />
                            {/* <span class="email-span">Proszę prawidłowo wpisać adres e-mail</span> */}
                            <ErrorFormMessage valid={validEmail} message={"E-mail address is not valid"} />
                            <input id="topic" type="text" name="topic" placeholder="Topic" onChange={handleTopicOnChange} />
                            {/* <span class="topic-span">Proszę podać temat wiadomości</span> */}
                            <ErrorFormMessage valid={validTopic} message={"Type topic of message"} />
                            <input id="phoneNumber" type="tel" name="tel" placeholder="(Optional) phone number" maxLength="15"
                                minLength="9" onChange={handleNrOnChange} />
                            {/* <span class="nr-span">Proszę poprawnie numer telefonu</span> */}
                            <ErrorFormMessage valid={validPhone} message={"Form of number is incorrect"} />
                        </fieldset>
                    </div>
                    <div className="form-grid-item">
                        <fieldset>
                            <textarea id="textarea" name="wiadomosc" placeholder="Message" onChange={handleMessageOnChange}></textarea>
                            {/* <span class="textarea-span">Proszę napisać wiadomość przed wysłaniem</span> */}
                            <ErrorFormMessage valid={validMessage} message={"Write message before sending"} />
                        </fieldset>
                    </div>
                </div>
                <input id="submit" type="submit" value="Send" />
                {/* <ErrorFormMessage message={"Check if each field is filled properly"} /> */}
                {/* <span class="submit-span">Proszę sprawdzić poprawność wszystkich pól.</span> */}
            </form>
        </div>
    );
}

export default ContactForm;