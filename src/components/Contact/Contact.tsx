import { useState } from 'react';
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
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = () => {
        if (email && message) {
            setEmail('');
            setMessage('');
        } else console.log('fill in details');
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
        </Styled.Wrapper>
    );
};

export default Contact;
