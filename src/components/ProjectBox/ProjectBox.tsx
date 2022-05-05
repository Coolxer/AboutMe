import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';
import Button from 'components/Button/Button';
import * as Styled from 'components/ProjectBox/ProjectBox.style';
import { useState } from 'react';

type Props = {
    title: string;
    shortDescription: string;
    longDescription: string;
    githubLink: string;
};

const ProjectBox = ({
    title,
    shortDescription,
    longDescription,
    githubLink,
}: Props) => {
    const [isExpanded, setIsExpanded] = useState(false);

    return (
        <Styled.Wrapper>
            <div className="header">{title.toUpperCase()}</div>
            <div className="description">
                <p>{isExpanded ? longDescription : shortDescription}</p>
            </div>
            <div className="buttons">
                {isExpanded ? (
                    <Button
                        text="Show less"
                        icon={faChevronUp}
                        onClick={() => setIsExpanded(false)}
                        rounded
                        glowed
                    />
                ) : (
                    <Button
                        text="Show more"
                        icon={faChevronDown}
                        onClick={() => setIsExpanded(true)}
                        rounded
                        glowed
                    />
                )}
                <Button
                    text="Github"
                    icon={faGithub}
                    onClick={() => console.log('move to the github')}
                    rounded
                    glowed
                />
            </div>
        </Styled.Wrapper>
    );
};

export default ProjectBox;
