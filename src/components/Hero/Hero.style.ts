import styled from 'styled-components';
import mixins from 'assets/styles/mixins';

export const Wrapper = styled.header`
    ${mixins.flex};
    width: 100%;
    height: 100vh;

    .left-side {
        position: relative;
        top: 80px;

        ${mixins.flex};
        flex: 1;
        height: 100%;

        @media ${({ theme }) => theme.device.laptop} {
            justify-content: flex-end;
        }

        .info-wrapper {
            ${mixins.flexCol};
            height: 100%;

            @media ${({ theme }) => theme.device.laptop} {
                height: auto;
            }
        }
    }

    .right-side {
        display: none;

        @media ${({ theme }) => theme.device.laptop} {
            position: relative;
            top: 80px;

            ${mixins.flex};
            flex: 1;
            height: 100%;

            .image-wrapper {
                width: 55%;
            }
        }
    }
`;

export const HelloHeader = styled.h1`
    font-size: ${({ theme }) => theme.font.size.xl};

    @media ${({ theme }) => theme.device.laptop} {
        font-size: ${({ theme }) => theme.font.size.xxxl};
    }
`;

export const NameHeader = styled.h1`
    display: block;
    padding: 0 5px;

    font-size: ${({ theme }) => theme.font.size.xl};

    background-color: ${({ theme }) => theme.palette.secondary};
    color: ${({ theme }) => theme.palette.accent};

    @media ${({ theme }) => theme.device.laptop} {
        font-size: ${({ theme }) => theme.font.size.xxxl};
    }
`;

export const ProfessionHeader = styled.h2`
    font-size: ${({ theme }) => theme.font.size.m};

    @media ${({ theme }) => theme.device.laptop} {
        font-size: ${({ theme }) => theme.font.size.xl};
    }
`;

export const HobbyHeader = styled.h3`
    font-size: ${({ theme }) => theme.font.size.s};

    @media ${({ theme }) => theme.device.laptop} {
        font-size: ${({ theme }) => theme.font.size.l};
    }
`;

export const LocationHeader = styled.h4`
    ${mixins.flex};

    font-size: ${({ theme }) => theme.font.size.xs};

    .icon {
        padding: 5px;
        font-size: ${({ theme }) => theme.font.size.l};
        color: ${({ theme }) => theme.palette.accent};
    }

    @media ${({ theme }) => theme.device.laptop} {
        font-size: ${({ theme }) => theme.font.size.m};
    }
`;

export const Image = styled.div`
    position: absolute;
    bottom: 0;

    width: 240px;

    @media ${({ theme }) => theme.device.laptop} {
        position: static;
        padding-top: 20px;
    }
`;
