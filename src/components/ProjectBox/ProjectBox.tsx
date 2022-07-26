import { faGithub } from '@fortawesome/free-brands-svg-icons';

import * as Styled from 'components/ProjectBox/ProjectBox.style';
import Button from 'components/Button/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconDefinition } from '@fortawesome/free-regular-svg-icons';

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
}: Props) => {
    return (
        <Styled.Wrapper>
            <div className="header">{title.toUpperCase()}</div>
            <hr />
            <div className="technologies">
                {technologies &&
                    technologies.map((icon, index) => {
                        return (
                            <div key={index}>
                                <FontAwesomeIcon className="tech" icon={icon} />
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
                        icon={faGithub}
                        onClick={(): void => {}}
                    />
                </a>
            </div>
        </Styled.Wrapper>
    );
};

export default ProjectBox;
