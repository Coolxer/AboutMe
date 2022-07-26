import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconDefinition, IconProp } from '@fortawesome/fontawesome-svg-core';
import {
    faCss3Alt,
    faGit,
    faHtml5,
    faJs,
    faLinux,
    faPhp,
    faPython,
    faReact,
    faSass,
    faSuperpowers,
    faTrello,
    faVuejs,
    faWordpress,
} from '@fortawesome/free-brands-svg-icons';
import {
    faC,
    faDatabase,
    faMicrochip,
    faUserGraduate,
} from '@fortawesome/free-solid-svg-icons';

import * as Styled from 'components/Skills/Skills.style';
import SectionHeader from 'components/SectionHeader/SectionHeader';

const Skills = () => (
    <Styled.Wrapper>
        <SectionHeader
            text="skills"
            icon={faSuperpowers as IconDefinition}
            className="mobile-header"
        />
        <div className="skills-box">
            <div className="skills-row">
                <div className="skill-col">
                    <FontAwesomeIcon
                        icon={faHtml5 as IconDefinition}
                        className="skill-item"
                    />
                </div>
                <div className="skill-col">
                    <FontAwesomeIcon
                        icon={faCss3Alt as IconDefinition}
                        className="skill-item"
                    />
                </div>
                <div className="skill-col">
                    <FontAwesomeIcon
                        icon={faJs as IconDefinition}
                        className="skill-item"
                    />
                </div>
            </div>
            <hr />
            <div className="skills-row">
                <div className="skill-col">
                    <FontAwesomeIcon
                        icon={faPhp as IconDefinition}
                        className="skill-item"
                    />
                </div>

                <div className="skill-col">
                    <FontAwesomeIcon
                        icon={faSass as IconDefinition}
                        className="skill-item"
                    />
                </div>

                <div className="skill-col">
                    <FontAwesomeIcon
                        icon={faDatabase as IconDefinition}
                        className="skill-item"
                    />
                </div>
            </div>
            <hr />
            <div className="skills-row">
                <div className="skill-col">
                    <FontAwesomeIcon
                        icon={faReact as IconDefinition}
                        className="skill-item"
                    />
                </div>
                <div className="skill-col">
                    <FontAwesomeIcon
                        icon={faVuejs as IconDefinition}
                        className="skill-item"
                    />
                </div>
                <div className="skill-col">
                    <FontAwesomeIcon
                        icon={faWordpress as IconDefinition}
                        className="skill-item"
                    />
                </div>
            </div>
            <hr />
            <div className="skills-row">
                <div className="skill-col">
                    <FontAwesomeIcon
                        icon={faPython as IconDefinition}
                        className="skill-item"
                    />
                </div>
                <div className="skill-col">
                    <FontAwesomeIcon
                        icon={faC as IconDefinition}
                        className="skill-item"
                    />
                </div>
                <div className="skill-col">
                    <FontAwesomeIcon
                        icon={faMicrochip as IconDefinition}
                        className="skill-item"
                    />
                </div>
            </div>
            <hr />
            <div className="skills-row">
                <div className="skill-col">
                    <FontAwesomeIcon
                        icon={faGit as IconDefinition}
                        className="skill-item"
                    />
                </div>
                <div className="skill-col">
                    <FontAwesomeIcon
                        icon={faTrello as IconDefinition}
                        className="skill-item"
                    />
                </div>
                <div className="skill-col">
                    <FontAwesomeIcon
                        icon={faLinux as IconDefinition}
                        className="skill-item"
                    />
                </div>
            </div>
        </div>
        <div className="description">
            <SectionHeader
                text="skills"
                icon={faSuperpowers as IconDefinition}
                className="desktop-header"
            />
            <article>
                <p>
                    Here are the basic technologies I know. There are some
                    general things like SQL database, git, linux, python and
                    otherwise some tech-cases like frameworks or libraries.
                </p>
                <br />
                <p>
                    If you do not see technology you are looking for, do not
                    worry - I can learn really quickly, based on things I
                    already learned.
                </p>
                <br />
                <p>
                    I also have a general knowledge from engineering study like
                    computer science architecture, networking and information
                    looking.
                </p>
            </article>
            <div className="graduate-icon-wrapper">
                <FontAwesomeIcon
                    className="graduate-icon"
                    icon={faUserGraduate as IconDefinition}
                />
            </div>
        </div>
    </Styled.Wrapper>
);

export default Skills;
