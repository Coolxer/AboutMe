import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import {
    faAt,
    faFile,
    faFilePdf,
    faLink,
    faLocation,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import * as Styled from 'components/Footer/Footer.style';
import Logo from 'components/Logo/Logo';

const Footer = () => (
    <Styled.Wrapper>
        <div className="icons">
            <Logo colorized />
            <div className="socials">
                <a
                    href="https://github.com/Coolxer"
                    target="_blank"
                    rel="noreferrer">
                    <FontAwesomeIcon icon={faGithub} />
                </a>
                <a
                    href="https://www.linkedin.com/in/%C5%82ukasz-mi%C5%82o%C5%9B-284a5a233/"
                    target="_blank"
                    rel="noreferrer">
                    <FontAwesomeIcon icon={faLinkedin} />
                </a>
                <a href="lukasz.milos@int.pl" target="_blank" rel="noreferrer">
                    <FontAwesomeIcon icon={faAt} />
                </a>
                <a href="#cv.pdf" target="_blank" rel="noreferrer">
                    <FontAwesomeIcon icon={faFilePdf} />
                </a>
            </div>
        </div>
        <div className="info">
            <div className="links">
                <div className="header">
                    <span>LINKS</span>
                    <FontAwesomeIcon icon={faLink} />
                </div>
                <ul>
                    <li>
                        <a href="#about">About</a>
                    </li>
                    <li>
                        <a href="#skills">Skills</a>
                    </li>
                    <li>
                        <a href="#projects">Projects</a>
                    </li>
                    <li>
                        <a href="#contact">Contact</a>
                    </li>
                </ul>
            </div>
            <div className="address">
                <div className="header">
                    <FontAwesomeIcon icon={faLocation} />
                    <span>ADDRESS</span>
                </div>
                <ul>
                    <li>Borowa, Polska</li>
                    <li>(Prefer remote)</li>
                    <li>lukasz.milos@int.pl</li>
                </ul>
            </div>
        </div>
        <div className="copyright">
            Copyrights@ Łukasz Miłoś. All rights reserved.
        </div>
    </Styled.Wrapper>
);

export default Footer;
