import styled from 'styled-components';

export const Wrapper = styled.button<{
    secondary?: boolean;
    disabled?: boolean;
    big?: boolean;
    rounded?: boolean;
    glowed?: boolean;
}>`
    display: flex;

    padding: 10px;

    font-family: ${({ theme }) => theme.font.family.roboto};

    font-size: ${({ theme, big }) =>
        big ? theme.font.size.l : theme.font.size.xs};

    background-color: ${({ theme, secondary }) =>
        secondary ? theme.palette.secondary : theme.palette.accent};

    border: 3px solid ${({ theme }) => theme.palette.accent}};
    border-radius: ${({ rounded }) => (rounded ? 50 : 0)}px;
    box-shadow: ${({ theme, glowed }) =>
        glowed
            ? '0px 0px 20px 0px ' + theme.palette.accent
            : '5px 5px 10px 10px' + theme.palette.shadow};
    
    &:hover {
        background-color: ${({ theme, secondary }) =>
        secondary ? theme.palette.accent : theme.palette.dominant};
    }

    &:disabled {
        background-color: ${({ theme }) => theme.palette.secondary};
        border-color: ${({ theme }) => theme.palette.secondary};
        box-shadow: none;
        opacity: 50%;
    }
`;
