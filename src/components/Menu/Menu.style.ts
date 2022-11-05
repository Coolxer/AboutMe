import styled from 'styled-components';
import mixins from 'assets/styles/mixins';

export const Menu = styled.nav<{ isOpen: boolean }>`
    ${mixins.flexCol};
    justify-content: center;

    position: fixed;
    left: 0;
    top: 80px;

    width: 100%;
    height: calc(100% - 80px);
    padding: 20px 0;

    background-color: ${({ theme }) => theme.palette.accent};

    transform: translateX(${({ isOpen }) => (isOpen ? '0' : '-100%')});
    transition: transform 0.5s ease-in-out;

    @media ${({ theme }) => theme.device.tablet} {
        ${mixins.flex};
        align-items: flex-end;

        position: static;
        transform: none;
        transition: none;

        margin-right: 20px;
    }

    ul {
        width: 100%;

        @media ${({ theme }) => theme.device.tablet} {
            ${mixins.flexRow};
        }

        @media ${({ theme }) => theme.device.desktop} {
            width: 55%;
        }

        li {
            ${mixins.flex};
            width: 100%;

            a {
                ${mixins.flex};

                width: 75%;
                margin: 10px 0;
                padding: 10px;

                border: 5px solid ${({ theme }) => theme.palette.secondary};

                font-family: ${({ theme }) => theme.font.family.ubuntu};
                font-size: ${({ theme }) => theme.font.size.m};
                text-decoration: none;

                background-color: ${({ theme }) => theme.palette.secondary};
                color: ${({ theme }) => theme.palette.dominant};
                box-shadow: 0 0 10px 0 ${({ theme }) => theme.palette.shadow};

                transition: background-color 0.2s ease-in-out,
                    color 0.2s ease-in-out, box-shadow 0.2s ease-in-out;

                @media ${({ theme }) => theme.device.tablet} {
                    border: none;
                    background-color: transparent;
                    box-shadow: none;

                    font-size: ${({ theme }) => theme.font.size.s};
                }

                &:hover {
                    background-color: ${({ theme }) => theme.palette.dominant};
                    color: ${({ theme }) => theme.palette.secondary};
                    box-shadow: 0 0 10px 0
                        ${({ theme }) => theme.palette.accent};
                    cursor: pointer;

                    @media ${({ theme }) => theme.device.tablet} {
                        background-color: ${({ theme }) =>
    // eslint-disable-next-line indent
                            theme.palette.accent};

                        transition: none;
                    }
                }
            }
        }
    }
`;
