import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import * as Styled from 'components/SectionHeader/SectionHeader.style';

type Props = {
    text: string;
    icon: IconDefinition;
};

const SectionHeader = ({ text, icon }: Props) => (
    <Styled.Wrapper>
        <span>{text.toUpperCase()}</span>
        <FontAwesomeIcon icon={icon} className="icon" />
    </Styled.Wrapper>
);

export default SectionHeader;
