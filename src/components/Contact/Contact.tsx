import { useState } from 'react';
import nodemailer from 'nodemailer';
import {
    faAt,
    faContactBook,
    faHeadphones,
    faMessage,
    faPaperPlane,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import * as Styled from 'components/Contact/Contact.style';
import SectionHeader from 'components/SectionHeader/SectionHeader';
import Button from 'components/Button/Button';

const Contact = () => {
    const [email, setEmail] = useState<string>('');
    const [message, setMessage] = useState<string>('');
    const [submitted, setSubmitted] = useState<boolean>(false);

    const handleSubmit = (e) => {
        e.preventDefault();

        console.log('send');

        if (email && message) {
            let data = { email, message };
        }
    };

    return (
        <Styled.Wrapper>
            <SectionHeader
                text="contact"
                icon={faContactBook}
                className="mobile-header"
            />
            <div className="description">
                <SectionHeader
                    text="Contact"
                    icon={faContactBook}
                    className="desktop-header"
                />
                <article>
                    <p>
                        If you have any questions or want to cooperate with me,
                        just fill out the form. I would answer as fast as it
                        possibble.
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
                <div className="headphones-icon-wrapper">
                    <FontAwesomeIcon
                        className="headphones-icon"
                        icon={faHeadphones}
                    />
                </div>
            </div>
            <div className="contact-form">
                <div className="email">
                    <label htmlFor="email">
                        <span>Email </span>
                        <FontAwesomeIcon icon={faAt} className="icon" />
                    </label>
                    <input
                        type="email"
                        placeholder="Your email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
                <div className="message">
                    <label htmlFor="message">
                        <span>Message </span>
                        <FontAwesomeIcon icon={faMessage} className="icon" />
                    </label>
                    <textarea
                        placeholder="Your message"
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                    />
                </div>
                <Button
                    className="send-btn"
                    text="Send Message"
                    icon={faPaperPlane}
                    onClick={handleSubmit}
                />
            </div>
        </Styled.Wrapper>
    );
};

export default Contact;
