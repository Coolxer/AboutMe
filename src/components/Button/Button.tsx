import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import * as Styled from 'components/Button/Button.style';

type Props = {
    disabled?: boolean;
    big?: boolean;

    text: string;
    icon?: IconDefinition;

    onClick?: () => void;
};

const Button = ({ disabled, big, text, icon, onClick }: Props) => {
    return (
        <Styled.Wrapper disabled={disabled} big={big} onClick={onClick}>
            <span>{text}</span>
            {icon && <FontAwesomeIcon className="icon" icon={icon} />}
        </Styled.Wrapper>
    );
};

export default Button;
