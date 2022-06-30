import styled from 'styled-components';
import mixins from 'assets/styles/mixins';
import Button from 'components/Button/Button';

export const Menu = styled.nav<{ isOpen: boolean }>`
    position: fixed;
    left: 0;
    top: 80px;

    ${mixins.flexCol};
    justify-content: space-between;

    width: 100%;
    height: calc(100% - 80px);
    padding: 20px 0;

    background-color: ${({ theme }) => theme.palette.accent};

    transform: translateX(${({ isOpen }) => (isOpen ? '0' : '-100%')});
    transition: transform 0.5s ease-in-out;

    ul {
        width: 100%;

        li {
            ${mixins.flex};
            width: 100%;

            a {
                ${mixins.flex};

                width: 75%;
                margin: 10px 0;
                padding: 10px;

                border: 5px solid ${({ theme }) => theme.palette.secondary};

                font-family: ${({ theme }) => theme.font.family.roboto};
                font-size: ${({ theme }) => theme.font.size.l};
                text-decoration: none;

                background-color: ${({ theme }) => theme.palette.secondary};
                color: ${({ theme }) => theme.palette.dominant};
                box-shadow: 0 0 10px 0 ${({ theme }) => theme.palette.shadow};

                transition: background-color 0.2s ease-in-out,
                    color 0.2s ease-in-out, box-shadow 0.2s ease-in-out;

                &:hover {
                    background-color: ${({ theme }) => theme.palette.dominant};
                    color: ${({ theme }) => theme.palette.secondary};
                    box-shadow: 0 0 10px 0
                        ${({ theme }) => theme.palette.accent};
                    cursor: pointer;
                }
            }
        }
    }
`;

export const CircleButton = styled(Button)`
    ${mixins.flex};

    border: none;
    box-shadow: none;

    .icon {
        font-size: ${({ theme }) => theme.font.size.xxxl};
        color: ${({ theme }) => theme.palette.secondary};
    }

    &:hover {
        background-color: transparent;
        .icon {
            color: ${({ theme }) => theme.palette.dominant};
        }
    }
`;
