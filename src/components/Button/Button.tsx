import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import * as Styled from 'components/Button/Button.style';

type Props = {
    secondary?: boolean;
    disabled?: boolean;

    text?: string;
    icon?: IconDefinition;

    big?: boolean;
    rounded?: boolean;
    glowed?: boolean;

    className?: string;

    onClick: () => void;
};

const Button = ({
    secondary,
    disabled,
    text,
    icon,
    big,
    rounded,
    glowed,
    className,
    onClick,
}: Props) => {
    return (
        <Styled.Button
            secondary={secondary}
            disabled={disabled}
            big={big}
            rounded={rounded}
            glowed={glowed}
            className={className}
            onClick={onClick}>
            {text}
            {icon && <FontAwesomeIcon className="icon" icon={icon} />}
        </Styled.Button>
    );
};

export default Button;
