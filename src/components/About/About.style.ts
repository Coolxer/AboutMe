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

    @media ${({ theme }) => theme.device.tv} {
        width: 70%;
    }

    .description-wrapper {
        ${mixins.flexCol};
        flex: 1;

        @media ${({ theme }) => theme.device.desktop} {
            position: relative;
            order: 2;
        }

        .description {
            height: 100%;

            @media ${({ theme }) => theme.device.laptop} {
                ${mixins.flex};
                width: 100%;
            }

            article {
                padding: 20px;
                flex: 1;

                p {
                    font-size: ${({ theme }) => theme.font.size.s};
                    text-align: justify;

                    @media ${({ theme }) => theme.device.laptop} {
                        font-size: ${({ theme }) => theme.font.size.m};
                    }
                }
            }

            .person-icon {
                display: none;

                position: absolute;
                left: 0;
                top: 0;

                font-size: 28rem;

                color: ${({ theme }) => theme.palette.accent};
                opacity: 0.5;

                @media ${({ theme }) => theme.device.laptop} {
                    ${mixins.flex};
                    position: static;
                    flex: 1;
                }

                @media ${({ theme }) => theme.device.desktop} {
                    position: absolute;

                    width: 100%;
                    height: 100%;

                    font-size: 18rem;
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
`;

export const Roles = styled.div`
    ${mixins.flexRow};
    flex-wrap: wrap;

    position: relative;
    overflow: hidden;

    width: 100%;
    margin-top: 30px;

    @media ${({ theme }) => theme.device.desktop} {
        flex: 1;
        order: 1;

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
        }

        @media ${({ theme }) => theme.device.desktop} {
            width: 100%;
        }
    }

    .empty {
        width: 50%;

        @media ${({ theme }) => theme.device.desktop} {
            display: none;
        }
    }

    .face-image {
        position: absolute;
        left: 0;
        top: 0;

        width: 100%;

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
    }
`;
