import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import * as Styled from 'components/Button/Button.style';

type Props = {
    disabled?: boolean;

    text: string;
    icon?: IconDefinition;

    className?: string;

    onClick?: () => void;
};

const Button = ({ disabled, text, icon, className, onClick }: Props) => {
    return (
        <Styled.Wrapper
            className={className}
            disabled={disabled}
            onClick={onClick}>
            <span>{text}</span>
            {icon && <FontAwesomeIcon className="icon" icon={icon} />}
        </Styled.Wrapper>
    );
};

export default Button;
