import styled from 'styled-components';
import mixins from 'assets/styles/mixins';

export const Wrapper = styled.section`
    margin-top: 50px;

    @media ${({ theme }) => theme.device.tablet} {
        width: 80%;
        margin: 0 auto;
        margin-top: 50px;
    }

    @media ${({ theme }) => theme.device.desktop} {
        display: flex;
    }

    .description-wrapper {
        ${mixins.flexCol};
        flex: 1;

        @media ${({ theme }) => theme.device.desktop} {
            position: relative;
            order: 3;

            justify-content: flex-start;
        }

        .description {
            @media ${({ theme }) => theme.device.laptop} {
                ${mixins.flex};
                width: 100%;
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

                    @media ${({ theme }) => theme.device.tv} {
                        font-size: ${({ theme }) => theme.font.size.l};
                    }
                }
            }

            .person-icon-wrapper {
                display: none;

                position: absolute;
                left: 0;
                top: 0;

                width: 100%;
                height: 100%;

                color: ${({ theme }) => theme.palette.accent};
                opacity: 0.5;

                @media ${({ theme }) => theme.device.laptop} {
                    ${mixins.flex};
                    position: static;
                    width: 50%;
                }

                @media ${({ theme }) => theme.device.desktop} {
                    ${mixins.flex};
                    position: absolute;
                    width: 100%;
                }

                .person-icon {
                    font-size: 24rem;

                    @media ${({ theme }) => theme.device.desktop} {
                        font-size: 25rem;
                    }
                }
            }
        }
    }

    .quote {
        width: 100%;
        margin-top: 10px;
        padding: 5px;

        font-family: ${({ theme }) => theme.font.family.indie};
        font-size: ${({ theme }) => theme.font.size.m};
        text-align: center;

        background-color: ${({ theme }) => theme.palette.secondary};
        color: ${({ theme }) => theme.palette.accent};

        @media ${({ theme }) => theme.device.tv} {
            font-size: ${({ theme }) => theme.font.size.l};
        }
    }

    .roles {
        ${mixins.flexRow};
        flex-wrap: wrap;
        align-content: flex-start;

        position: relative;
        overflow: hidden;

        width: 100%;
        margin-top: 30px;

        @media ${({ theme }) => theme.device.desktop} {
            flex: 1;
            order: 1;
            justify-content: flex-start;

            margin-top: 0;
            margin-right: 50px;
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

            opacity: 0.75;

            box-shadow: 0 0 10px 0 ${({ theme }) => theme.palette.shadow};
            z-index: 10;

            @media ${({ theme }) => theme.device.laptop} {
                font-size: ${({ theme }) => theme.font.size.m};
                margin-bottom: 1vw;
            }

            @media ${({ theme }) => theme.device.desktop} {
                width: 100%;
                //margin-bottom: 20px;
                //margin-bottom: 13.2px;

                &:last-child {
                    margin-bottom: 0;
                }
            }
        }

        .empty {
            width: 50%;
            background: transparent;

            @media ${({ theme }) => theme.device.desktop} {
                display: none;
            }
        }

        .face-image-wrapper-small {
            position: absolute;
            left: 0;
            top: 0;

            width: 100%;
            height: auto;

            opacity: 0.5;
            z-index: 0;

            @media ${({ theme }) => theme.device.tablet} {
                top: -80px;
            }

            @media ${({ theme }) => theme.device.laptop} {
                top: -200px;
            }

            @media ${({ theme }) => theme.device.desktop} {
                top: 0;
            }

            @media ${({ theme }) => theme.device.tv} {
                display: none;
            }
        }
    }

    .face-image-wrapper-big {
        display: none;

        position: static;
        flex: 1;
        order: 2;

        opacity: 0.5;

        @media ${({ theme }) => theme.device.tv} {
            display: block;
        }
    }
`;
