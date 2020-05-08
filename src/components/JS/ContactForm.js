import React from 'react';
import '../SCSS/ContactForm.scss';

const ContactForm = () => {
    return (
        <div className="contact-form">
            <form autocomplete="off" class="form" novalidate method="POST">
                <div class="form-grid">
                    <div class="form-grid-item">
                        <fieldset>
                            <input id="email" type="email" name="email" placeholder="E-mail" />
                            <span class="email-span">Proszę prawidłowo wpisać adres e-mail</span>
                            <input id="topic" type="text" name="topic" placeholder="Topic" />
                            <span class="topic-span">Proszę podać temat wiadomości</span>
                            <input id="phoneNumber" type="tel" name="tel" placeholder="(Optional) phone number" maxlength="15"
                                minlength="9" />
                            <span class="nr-span">Proszę poprawnie numer telefonu</span>
                        </fieldset>
                    </div>
                    <div class="form-grid-item">
                        <fieldset>
                            <textarea id="textarea" name="wiadomosc" placeholder="Message"></textarea>
                            <span class="textarea-span">Proszę napisać wiadomość przed wysłaniem</span>
                        </fieldset>
                    </div>
                </div>
                <input id="submit" type="submit" value="Send" />
                {/* <span class="submit-span">Proszę sprawdzić poprawność wszystkich pól.</span> */}
            </form>
        </div>
    );
}

export default ContactForm;