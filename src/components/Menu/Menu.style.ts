import styled from 'styled-components';

import Button from 'components/Button/Button';

export const Menu = styled.nav<{ isOpen: boolean }>`
    position: fixed;
    left: 0;
    top: 80px;

    width: 100%;
    height: calc(100% - 80px);

    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: column;

    padding: 20px 0;

    background-color: ${({ theme }) => theme.palette.dominant};

    transform: translateX(${({ isOpen }) => (isOpen ? '0' : '-100%')});
    transition: transform 0.5s ease-in-out;

    ul {
        width: 100%;

        li {
            width: 100%;
            display: flex;
            justify-content: center;

            a {
                width: 75%;
                display: flex;
                justify-content: center;

                padding: 10px;
                margin: 10px 0;

                font-family: ${({ theme }) => theme.font.family.roboto};
                font-size: ${({ theme }) => theme.font.size.l};
                text-decoration: none;

                background-color: ${({ theme }) => theme.palette.secondary};
                color: ${({ theme }) => theme.palette.dominant};
                box-shadow: 0 0 10px 0 ${({ theme }) => theme.palette.shadow};

                transition: background-color 0.2s ease-in-out,
                    box-shadow 0.2s ease-in-out;

                &:hover {
                    background-color: ${({ theme }) => theme.palette.accent};
                    box-shadow: 0 0 10px 0
                        ${({ theme }) => theme.palette.accent};
                    cursor: pointer;
                }
            }
        }
    }
`;

export const CircleButton = styled(Button)`
    width: ${({ theme }) => theme.font.size.xxl};
    display: flex;
    justify-content: center;

    border: none;
    box-shadow: none;

    background-color: transparent;

    .icon {
        font-size: ${({ theme }) => theme.font.size.xxxl};
        color: ${({ theme }) => theme.palette.accent};
    }
`;
