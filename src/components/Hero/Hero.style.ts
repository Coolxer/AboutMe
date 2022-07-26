import styled from 'styled-components';
import mixins from 'assets/styles/mixins';

export const Wrapper = styled.header`
    ${mixins.flex};

    width: 100%;
    height: 100vh;

    background-color: ${({ theme }) => theme.palette.secondary};
    color: ${({ theme }) => theme.palette.dominant};

    box-shadow: 2px 2px 20px 2px ${({ theme }) => theme.palette.shadow};
    transition: all 0.2s ease-in-out;

    .left-side {
        ${mixins.flex};
        height: 100%;

        flex: 1;
        z-index: 2;

        @media ${({ theme }) => theme.device.desktop} {
            justify-content: flex-end;
            margin-right: 75px;
        }

        .info-wrapper {
            ${mixins.flexCol};
        }
    }

    .right-side {
        display: none;

        flex: 1;
        z-index: 1;

        @media ${({ theme }) => theme.device.tablet} {
            ${mixins.flex};
            position: absolute;

            width: 100%;
            height: 100%;
        }

        @media ${({ theme }) => theme.device.laptop} {
            position: static;
        }

        @media ${({ theme }) => theme.device.desktop} {
            justify-content: flex-start;
            margin-left: 75px;
        }

        .masked-image {
            width: 55%;
            max-width: 55%;
            margin-top: 80px;

            opacity: 0.2;

            @media ${({ theme }) => theme.device.laptop} {
                width: 75%;
                max-width: 480px;

                opacity: 1;
            }

            @media ${({ theme }) => theme.device.desktop} {
                max-width: 540px;
            }
        }
    }
`;

export const HelloHeader = styled.h1`
    font-size: ${({ theme }) => theme.font.size.xl};
    transition: font-size 0.2s ease-in-out;

    @media ${({ theme }) => theme.device.tablet} {
        font-size: ${({ theme }) => theme.font.size.xxl};
    }

    @media ${({ theme }) => theme.device.laptop} {
        font-size: ${({ theme }) => theme.font.size.xxxl};
    }
`;

export const NameHeader = styled.h1`
    display: block;
    padding: 0 5px;

    font-size: ${({ theme }) => theme.font.size.xl};

    background-color: ${({ theme }) => theme.palette.accent};
    color: ${({ theme }) => theme.palette.secondary};

    transition: font-size 0.2s ease-in-out;

    @media ${({ theme }) => theme.device.tablet} {
        font-size: ${({ theme }) => theme.font.size.xxl};
    }

    @media ${({ theme }) => theme.device.laptop} {
        font-size: ${({ theme }) => theme.font.size.xxxl};
    }
`;

export const ProfessionHeader = styled.h2`
    font-size: ${({ theme }) => theme.font.size.m};
    transition: font-size 0.2s ease-in-out;

    @media ${({ theme }) => theme.device.tablet} {
        font-size: ${({ theme }) => theme.font.size.l};
    }

    @media ${({ theme }) => theme.device.laptop} {
        font-size: ${({ theme }) => theme.font.size.xl};
    }
`;

export const HobbyHeader = styled.h3`
    font-size: ${({ theme }) => theme.font.size.s};
    transition: font-size 0.2s ease-in-out;

    @media ${({ theme }) => theme.device.tablet} {
        font-size: ${({ theme }) => theme.font.size.m};
    }

    @media ${({ theme }) => theme.device.laptop} {
        font-size: ${({ theme }) => theme.font.size.l};
    }
`;

export const LocationHeader = styled.h4`
    ${mixins.flex};

    font-size: ${({ theme }) => theme.font.size.xs};
    color: ${({ theme }) => theme.palette.accent};

    transition: font-size 0.2s ease-in-out;

    @media ${({ theme }) => theme.device.tablet} {
        font-size: ${({ theme }) => theme.font.size.s};
    }

    @media ${({ theme }) => theme.device.laptop} {
        font-size: ${({ theme }) => theme.font.size.m};
    }

    .location-icon {
        padding: 5px;
        font-size: ${({ theme }) => theme.font.size.l};
        color: ${({ theme }) => theme.palette.accent};
    }
`;

export const Rectangles = styled.div`
    position: absolute;
    bottom: 0;

    width: 240px;

    transition: font-size 0.2s ease-in-out;

    @media ${({ theme }) => theme.device.tablet} {
        position: static;
        padding-top: 20px;
    }

    @media only screen and (max-height: 500px) {
        display: none;
    }
`;
