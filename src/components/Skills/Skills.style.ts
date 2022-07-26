import styled from 'styled-components';
import mixins from 'assets/styles/mixins';

export const Wrapper = styled.section`
    width: 100%;
    margin-top: 50px;

    background-color: ${({ theme }) => theme.palette.dominant};

    @media ${({ theme }) => theme.device.tablet} {
        width: 80%;
        margin: 0 auto;
        margin-top: 50px;
    }

    @media ${({ theme }) => theme.device.laptop} {
        ${mixins.flex};
        align-items: flex-start;
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
            justify-content: space-around;

            width: 100%;
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

                .skill-item {
                    font-size: ${({ theme }) => theme.font.size.xxl};
                    padding: 10px;
                }
            }
        }

        hr {
            margin: 0 30px;

            color: ${({ theme }) => theme.palette.secondary};
        }
    }

    .description {
        display: none;
        position: relative;
        order: 1;

        @media ${({ theme }) => theme.device.laptop} {
            ${mixins.flexCol};
            align-items: space-between;

            width: 100%;
            flex: 1;
        }

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
            width: 100%;
            padding: 10px;

            @media ${({ theme }) => theme.device.laptop} {
                flex: 1;
            }

            @media ${({ theme }) => theme.device.desktop} {
                justify-content: flex-start;
            }

            p {
                font-family: ${({ theme }) => theme.font.family.roboto};
                font-size: ${({ theme }) => theme.font.size.s};
                text-align: justify;

                @media ${({ theme }) => theme.device.laptop} {
                    font-size: ${({ theme }) => theme.font.size.m};
                }
            }
        }

        .graduate-icon-wrapper {
            display: none;
            ${mixins.flex};

            position: absolute;
            left: 0;
            top: 0;

            width: 100%;
            height: 100%;

            color: ${({ theme }) => theme.palette.accent};
            opacity: 0.5;

            .graduate-icon {
                font-size: 18rem;
            }
        }
    }
`;
