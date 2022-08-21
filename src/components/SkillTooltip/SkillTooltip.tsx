import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import * as Styled from 'components/SkillTooltip/SkillTooltip.style';

type Props = {
    icon: IconDefinition;
    text: string;
};

const SkillTooltip = ({ icon, text }: Props) => (
    <Styled.Wrapper>
        <div className="icon-wrapper">
            <FontAwesomeIcon icon={icon} width="16" />
        </div>
        <div className="tooltip">{text}</div>
    </Styled.Wrapper>
);

export default SkillTooltip;
