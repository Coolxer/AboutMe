import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

import * as Styled from 'components/ProjectBox/ProjectBox.style';
import Button from 'components/Button/Button';

type Props = {
    title: string;
    subtitle: string;
    description: string;
    technologies?: IconDefinition[];
    githubLink: string;
};

const ProjectBox = ({
    title,
    subtitle,
    description,
    technologies,
    githubLink,
}: Props) => (
    <Styled.Wrapper>
        <div className="header">{title.toUpperCase()}</div>
        <hr />
        <div className="technologies">
            {technologies &&
                technologies.map((icon, index) => {
                    return (
                        <div key={index} className="tech">
                            <FontAwesomeIcon icon={icon as IconDefinition} />
                        </div>
                    );
                })}
        </div>

        <div className="info">
            <p className="subtitle">{subtitle.toUpperCase()}</p>
            <p className="description"> {description}</p>
            <a href={githubLink} target="_blank" rel="noreferrer">
                <Button
                    text="Github"
                    icon={faGithub as IconDefinition}
                    onClick={(): void => {}}
                />
            </a>
        </div>
    </Styled.Wrapper>
);

export default ProjectBox;
