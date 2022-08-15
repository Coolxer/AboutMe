import { useState } from 'react';
import {
    faAt,
    faContactBook,
    faHeadphones,
    faMessage,
    faPaperPlane,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import emailjs from '@emailjs/browser';

import * as Styled from 'components/Contact/Contact.style';
import SectionHeader from 'components/SectionHeader/SectionHeader';
import Button from 'components/Button/Button';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';

const Contact = () => {
    const [email, setEmail] = useState<string>('');
    const [message, setMessage] = useState<string>('');

    const [validationMessage, setValidationMessage] = useState<string>('');

    const validateFormData = (): boolean => {
        if (email.trim().length == 0 || message.trim().length == 0) {
            setValidationMessage('You must fill in all the fields!');
            return false;
        }

        const reg = /\S+@\S+\.\S+/;

        if (!reg.test(email)) {
            setValidationMessage('Invalid email address given!');
            return false;
        }

        return true;
    };

    const sendEmail = (e) => {
        e.preventDefault();

        if (!validateFormData()) return;

        console.log('validated good!');

        emailjs
            .send(
                'service_iaypeqh',
                'template_noyoxk6',
                {
                    email: email,
                    message: message,
                },
                '_vTfQ1BIjjwNhaChN'
            )
            .then(
                () => {
                    setValidationMessage('Message was sent successfully!');
                },
                () => {
                    setValidationMessage(
                        'An error occurred while sending a message!'
                    );
                }
            );
    };

    return (
        <Styled.Wrapper id="contact">
            <SectionHeader
                text="contact"
                icon={faContactBook as IconDefinition}
                className="mobile-header"
            />
            <div className="description">
                <SectionHeader
                    text="Contact"
                    icon={faContactBook as IconDefinition}
                    className="desktop-header"
                />
                <article>
                    <p>
                        If you have any questions or want to cooperate with me,
                        just fill out the form. I would answer as fast as it
                        possible.
                    </p>
                    <br />
                    <p>
                        Do not worry, your email do not be used for any ads or
                        compaign.
                    </p>
                    <br />
                    <p>
                        If you prefer contact me directly from your post client,
                        please write on lukasz.milos@int.pl
                    </p>
                </article>
                <div className="headphones-icon">
                    <FontAwesomeIcon icon={faHeadphones as IconDefinition} />
                </div>
            </div>
            <form>
                <div className="email">
                    <label htmlFor="email">
                        <span>Email </span>
                        <FontAwesomeIcon
                            icon={faAt as IconDefinition}
                            className="icon"
                        />
                    </label>
                    <input
                        type="email"
                        name="email"
                        placeholder="Your email to get response later"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </div>
                <div className="message">
                    <label htmlFor="message">
                        <span>Message </span>
                        <FontAwesomeIcon
                            icon={faMessage as IconDefinition}
                            className="icon"
                        />
                    </label>
                    <textarea
                        name="message"
                        placeholder="Your message to me"
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        required
                    />
                </div>
                {validationMessage && (
                    <span
                        className={`validationMessage ${
                            validationMessage ===
                            'Message was sent successfully!'
                                ? 'success'
                                : 'error'
                        }`}>
                        {validationMessage}
                    </span>
                )}

                <Button
                    className="send-btn"
                    text="Send Message"
                    icon={faPaperPlane as IconDefinition}
                    onClick={sendEmail}
                />
            </form>
        </Styled.Wrapper>
    );
};

export default Contact;
