import { useState } from 'react';
import nodemailer from 'nodemailer';
import {
    faAt,
    faContactBook,
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
            <SectionHeader text="contact" icon={faContactBook} />
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
                text="Send Message"
                icon={faPaperPlane}
                onClick={handleSubmit}
            />
            <input type="submit" />
        </Styled.Wrapper>
    );
};

export default Contact;
