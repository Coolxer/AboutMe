import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
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
import SkillTooltip from 'components/SkillTooltip/SkillTooltip';

const Skills = () => (
    <Styled.Wrapper id="skills">
        <SectionHeader
            text="skills"
            icon={faSuperpowers as IconDefinition}
            className="mobile-header"
        />
        <div className="skills-box">
            <div className="skills-row">
                <div className="skill-col">
                    <SkillTooltip
                        icon={faHtml5 as IconDefinition}
                        text="HTML"
                    />
                </div>
                <div className="skill-col">
                    <SkillTooltip
                        icon={faCss3Alt as IconDefinition}
                        text="CSS"
                    />
                </div>
                <div className="skill-col">
                    <SkillTooltip
                        icon={faJs as IconDefinition}
                        text="JavaScript"
                    />
                </div>
            </div>
            <hr />
            <div className="skills-row">
                <div className="skill-col">
                    <SkillTooltip icon={faPhp as IconDefinition} text="PHP" />
                </div>
                <div className="skill-col">
                    <SkillTooltip icon={faSass as IconDefinition} text="SASS" />
                </div>
                <div className="skill-col">
                    <SkillTooltip
                        icon={faDatabase as IconDefinition}
                        text="Database"
                    />
                </div>
            </div>
            <hr />
            <div className="skills-row">
                <div className="skill-col">
                    <SkillTooltip
                        icon={faReact as IconDefinition}
                        text="ReactJS"
                    />
                </div>
                <div className="skill-col">
                    <SkillTooltip
                        icon={faVuejs as IconDefinition}
                        text="Vue.js"
                    />
                </div>
                <div className="skill-col">
                    <SkillTooltip
                        icon={faWordpress as IconDefinition}
                        text="WordPress"
                    />
                </div>
            </div>
            <hr />
            <div className="skills-row">
                <div className="skill-col">
                    <SkillTooltip
                        icon={faPython as IconDefinition}
                        text="Python"
                    />
                </div>
                <div className="skill-col">
                    <SkillTooltip icon={faC as IconDefinition} text="C" />
                </div>
                <div className="skill-col">
                    <SkillTooltip
                        icon={faMicrochip as IconDefinition}
                        text="Microchip"
                    />
                </div>
            </div>
            <hr />
            <div className="skills-row">
                <div className="skill-col">
                    <SkillTooltip icon={faGit as IconDefinition} text="Git" />
                </div>
                <div className="skill-col">
                    <SkillTooltip
                        icon={faTrello as IconDefinition}
                        text="Trello"
                    />
                </div>
                <div className="skill-col">
                    <SkillTooltip
                        icon={faLinux as IconDefinition}
                        text="Linux"
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
                    Here are the basic technologies I know (in different
                    levels). There are some general things like database, git,
                    linux and otherwise some tech-cases like frameworks or
                    libraries.
                </p>
                <br />
                <p>
                    I also have a general knowledge from engineering study like
                    computer science architecture, networking, information
                    looking and electronic. I know the broad terminology of the
                    industry.
                </p>
                <br />
                <p>
                    If you do not see technology you are looking for, do not
                    worry - I can learn really quickly, based on things I
                    already learned.
                </p>
                <br />
            </article>
            <div className="graduate-icon">
                <FontAwesomeIcon
                    icon={faUserGraduate as IconDefinition}
                    width="16"
                />
            </div>
        </div>
    </Styled.Wrapper>
);

export default Skills;
