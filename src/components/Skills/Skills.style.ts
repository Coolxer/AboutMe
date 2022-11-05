import styled from 'styled-components';
import mixins from 'assets/styles/mixins';

export const Wrapper = styled.section`
    ${mixins.flexCol};
    width: 100%;
    margin-top: 50px;

    background-color: ${({ theme }) => theme.palette.dominant};

    @media ${({ theme }) => theme.device.tablet} {
        width: 80%;
        margin: 0 auto;
        margin-top: 50px;
    }

    @media ${({ theme }) => theme.device.laptop} {
        flex-direction: row;
        align-items: flex-start;
    }

    @media ${({ theme }) => theme.device.tv} {
        width: 70%;
    }

    .mobile-header {
        @media ${({ theme }) => theme.device.laptop} {
            display: none;
        }
    }

    .skills-box {
        flex: 1;
        order: 2;

        width: 90%;
        margin: 0 auto;

        .skills-row {
            ${mixins.flex};

            padding: 10px;

            .skill-col {
                ${mixins.flex};
                width: 100%;

                &:nth-child(2) {
                    border-left: 2px solid
                        ${({ theme }) => theme.palette.secondary};
                    border-right: 2px solid
                        ${({ theme }) => theme.palette.secondary};
                }
            }
        }

        hr {
            margin: 0 30px;

            color: ${({ theme }) => theme.palette.secondary};
        }
    }

    .description {
        ${mixins.flexCol};
        align-items: space-between;

        position: relative;

        width: 100%;
        height: 100%;
        flex: 1;

        order: 1;
        @media ${({ theme }) => theme.device.desktop} {
            margin-right: 50px;
        }

        .desktop-header {
            display: none;

            @media ${({ theme }) => theme.device.laptop} {
                display: flex;
            }
        }

        article {
            padding: 20px;

            @media ${({ theme }) => theme.device.laptop} {
                flex: 1;
            }

            @media ${({ theme }) => theme.device.desktop} {
                justify-content: flex-start;
            }

            p {
                font-size: ${({ theme }) => theme.font.size.s};
                text-align: justify;

                &:last-child {
                    color: ${({ theme }) => theme.palette.accent};
                }
            }
        }

        .graduate-icon {
            display: none;

            position: absolute;
            left: 0;
            top: 0;

            width: 100%;
            height: 100%;
            font-size: 18rem;

            color: ${({ theme }) => theme.palette.accent};
            opacity: 0.5;

            @media ${({ theme }) => theme.device.laptop} {
                ${mixins.flex};
            }
        }
    }
`;
