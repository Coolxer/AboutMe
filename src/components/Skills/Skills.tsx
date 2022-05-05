import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import * as Styled from 'components/Skills/Skills.style';

import SectionHeader from 'components/SectionHeader/SectionHeader';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import {
    faCss3Alt,
    faGit,
    faHtml5,
    faJs,
    faLinux,
    faPython,
    faReact,
    faSass,
    faSuperpowers,
    faSymfony,
    faVuejs,
} from '@fortawesome/free-brands-svg-icons';
import { faC, faDatabase } from '@fortawesome/free-solid-svg-icons';

const Skills = () => (
    <Styled.Wrapper>
        <SectionHeader text="SKILLS" icon={faSuperpowers} />

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
                <FontAwesomeIcon icon={faReact} className="skill-item" />
            </div>
            <div className="skill-col">
                <FontAwesomeIcon icon={faVuejs} className="skill-item" />
            </div>
            <div className="skill-col">
                <FontAwesomeIcon icon={faSass} className="skill-item" />
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
                <FontAwesomeIcon icon={faDatabase} className="skill-item" />
            </div>
        </div>
        <hr />
        <div className="skills-row">
            <div className="skill-col">
                <FontAwesomeIcon icon={faSymfony} className="skill-item" />
            </div>
            <div className="skill-col">
                <FontAwesomeIcon icon={faGit} className="skill-item" />
            </div>
            <div className="skill-col">
                <FontAwesomeIcon icon={faLinux} className="skill-item" />
            </div>
        </div>
        <hr />
    </Styled.Wrapper>
);

export default Skills;
