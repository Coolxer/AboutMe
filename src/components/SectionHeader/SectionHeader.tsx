import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import * as Styled from 'components/SectionHeader/SectionHeader.style';

type Props = {
    text: string;
    icon: IconDefinition;
    className?: string;
};

const SectionHeader = ({ text, icon, className }: Props) => (
    <Styled.Wrapper className={className}>
        <span>{text.toUpperCase()}</span>
        <FontAwesomeIcon icon={icon} className="icon" width="16" />
    </Styled.Wrapper>
);

export default SectionHeader;
