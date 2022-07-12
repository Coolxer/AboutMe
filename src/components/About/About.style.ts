import styled from 'styled-components';
import mixins from 'assets/styles/mixins';

export const Wrapper = styled.section`
    @media ${({ theme }) => theme.device.tablet} {
        width: 80%;
        margin: 0 auto;
    }

    @media ${({ theme }) => theme.device.desktop} {
        ${mixins.flexRow};
    }

    .description-wrapper {
        ${mixins.flexCol};
        flex: 1;

        @media ${({ theme }) => theme.device.desktop} {
            flex: 1;
            order: 3;

            position: relative;
        }

        .description {
            ${mixins.flex};
            width: 100%;

            article {
                position: relative;

                width: 100%;
                padding: 10px;

                @media ${({ theme }) => theme.device.laptop} {
                    flex: 1;
                }

                p {
                    font-family: ${({ theme }) => theme.font.family.roboto};
                    font-size: ${({ theme }) => theme.font.size.s};
                    text-align: justify;

                    @media ${({ theme }) => theme.device.laptop} {
                        font-size: ${({ theme }) => theme.font.size.m};
                    }

                    @media ${({ theme }) => theme.device.desktop} {
                        font-size: ${({ theme }) => theme.font.size.l};
                    }
                }
            }

            .icon-wrapper {
                display: none;

                position: absolute;
                left: 0;
                top: 0;

                width: 100%;
                height: 100%;

                color: ${({ theme }) => theme.palette.accent};
                opacity: 0.5;

                @media ${({ theme }) => theme.device.laptop} {
                    position: static;
                    ${mixins.flex};
                    width: 50%;
                }

                @media ${({ theme }) => theme.device.desktop} {
                    position: absolute;
                    ${mixins.flex};
                    width: 100%;
                }

                .person-icon {
                    font-size: 16rem;

                    @media ${({ theme }) => theme.device.desktop} {
                        font-size: 25rem;
                    }
                }
            }
        }
    }

    .quote {
        margin-top: 10px;
        padding: 5px;

        font-family: ${({ theme }) => theme.font.family.indie};
        font-size: ${({ theme }) => theme.font.size.m};
        text-align: center;

        background-color: ${({ theme }) => theme.palette.secondary};
        color: ${({ theme }) => theme.palette.accent};

        @media ${({ theme }) => theme.device.laptop} {
            font-size: ${({ theme }) => theme.font.size.l};
        }
    }

    .roles {
        position: relative;
        overflow: hidden;

        ${mixins.flexRow};
        flex-wrap: wrap;
        align-content: flex-start;

        width: 100%;
        margin-top: 30px;

        @media ${({ theme }) => theme.device.desktop} {
            flex: 1;
            order: 1;
        }

        .profession {
            ${mixins.flex};

            width: 50%;
            height: 60px;
            padding: 5px;

            font-size: ${({ theme }) => theme.font.size.s};
            text-align: center;

            background-color: ${({ theme }) => theme.palette.secondary};
            color: ${({ theme }) => theme.palette.dominant};

            box-shadow: 0 0 10px 0 ${({ theme }) => theme.palette.shadow};
            z-index: 10;

            @media ${({ theme }) => theme.device.laptop} {
                font-size: ${({ theme }) => theme.font.size.m};
            }

            @media ${({ theme }) => theme.device.desktop} {
                width: 80%;
            }
        }

        .empty {
            width: 50%;
            background: transparent;

            @media ${({ theme }) => theme.device.desktop} {
                display: none;
            }
        }
    }

    .face {
        //position: absolute;
        left: 0;
        top: 0;

        width: 100%;
        height: auto;

        opacity: 0.5;
        z-index: 0;

        @media ${({ theme }) => theme.device.desktop} {
            position: static;
            flex: 1;
            order: 2;
        }
    }
`;
