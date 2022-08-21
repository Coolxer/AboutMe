import { Link } from 'react-scroll';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import {
    faAt,
    faFilePdf,
    faLink,
    faLocation,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import * as Styled from 'components/Footer/Footer.style';
import Logo from 'components/Logo/Logo';

const links = ['home', 'about', 'skills', 'projects', 'hobbies', 'contact'];

const Footer = () => (
    <Styled.Wrapper>
        <div className="box">
            <div className="icons">
                <Logo colorized className="logo" />
                <div className="socials">
                    <a
                        href="https://github.com/Coolxer"
                        target="_blank"
                        rel="noreferrer"
                        aria-label="Github">
                        <FontAwesomeIcon
                            icon={faGithub as IconDefinition}
                            width="16"
                        />
                    </a>
                    <a
                        href="https://www.linkedin.com/in/lukasz-milos/"
                        target="_blank"
                        rel="noreferrer"
                        aria-label="Linkedin">
                        <FontAwesomeIcon
                            icon={faLinkedin as IconDefinition}
                            width="16"
                        />
                    </a>
                    <a
                        href="lukasz.milos.it@gmail.com"
                        target="_blank"
                        rel="noreferrer"
                        aria-label="Email">
                        <FontAwesomeIcon
                            icon={faAt as IconDefinition}
                            width="16"
                        />
                    </a>
                    <a
                        href="cv.pdf"
                        target="_blank"
                        rel="noreferrer"
                        aria-label="CV">
                        <FontAwesomeIcon
                            icon={faFilePdf as IconDefinition}
                            width="16"
                        />
                    </a>
                </div>
            </div>
            <div className="info">
                <div className="links-wrapper">
                    <div className="links">
                        <div className="header">
                            <span>LINKS</span>
                            <FontAwesomeIcon
                                icon={faLink as IconDefinition}
                                width="16"
                            />
                        </div>
                        <ul>
                            {links.map((item) => (
                                <li key={item}>
                                    <Link
                                        activeClass="active"
                                        to={item}
                                        spy={true}
                                        smooth={true}
                                        offset={-100}
                                        duration={500}>
                                        {item.toUpperCase()}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
                <div className="address-wrapper">
                    <div className="address">
                        <div className="header">
                            <FontAwesomeIcon
                                className="icon"
                                icon={faLocation as IconDefinition}
                                width="16"
                            />
                            <span>ADDRESS</span>
                        </div>
                        <ul>
                            <li>Borowa, Polska</li>
                            <li>(Prefer remote)</li>
                            <li className="email">lukasz.milos.it</li>
                            <li className="email">@gmail.com</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        <div className="copyright">
            Copyright &copy; {new Date().getFullYear()} Łukasz Miłoś. All rights
            reserved.
        </div>
    </Styled.Wrapper>
);

export default Footer;
