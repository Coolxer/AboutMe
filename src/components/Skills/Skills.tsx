import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
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
} from '@fortawesome/free-solid-svg-icons';

import * as Styled from 'components/Skills/Skills.style';
import SectionHeader from 'components/SectionHeader/SectionHeader';

const Skills = () => (
    <Styled.Wrapper>
        <SectionHeader text="skills" icon={faSuperpowers} />

        <div className="skills-row">
            <div className="skill-col">
                <FontAwesomeIcon
                    icon={faHtml5 as IconProp}
                    className="skill-item"
                />
            </div>
            <div className="skill-col">
                <FontAwesomeIcon icon={faCss3Alt} className="skill-item" />
            </div>
            <div className="skill-col">
                <FontAwesomeIcon icon={faJs} className="skill-item" />
            </div>
        </div>
        <hr />
        <div className="skills-row">
            <div className="skill-col">
                <FontAwesomeIcon icon={faPhp} className="skill-item" />
            </div>

            <div className="skill-col">
                <FontAwesomeIcon icon={faSass} className="skill-item" />
            </div>

            <div className="skill-col">
                <FontAwesomeIcon icon={faDatabase} className="skill-item" />
            </div>
        </div>
        <hr />
        <div className="skills-row">
            <div className="skill-col">
                <FontAwesomeIcon icon={faReact} className="skill-item" />
            </div>
            <div className="skill-col">
                <FontAwesomeIcon icon={faVuejs} className="skill-item" />
            </div>
            <div className="skill-col">
                <FontAwesomeIcon icon={faWordpress} className="skill-item" />
            </div>
        </div>
        <hr />
        <div className="skills-row">
            <div className="skill-col">
                <FontAwesomeIcon icon={faPython} className="skill-item" />
            </div>
            <div className="skill-col">
                <FontAwesomeIcon icon={faC} className="skill-item" />
            </div>
            <div className="skill-col">
                <FontAwesomeIcon icon={faMicrochip} className="skill-item" />
            </div>
        </div>
        <hr />
        <div className="skills-row">
            <div className="skill-col">
                <FontAwesomeIcon icon={faGit} className="skill-item" />
            </div>
            <div className="skill-col">
                <FontAwesomeIcon icon={faTrello} className="skill-item" />
            </div>
            <div className="skill-col">
                <FontAwesomeIcon icon={faLinux} className="skill-item" />
            </div>
        </div>
        <hr />
    </Styled.Wrapper>
);

export default Skills;
