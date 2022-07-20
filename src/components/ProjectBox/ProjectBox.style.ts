import styled from 'styled-components';
import mixins from 'assets/styles/mixins';

export const Wrapper = styled.div`
    width: 90%;

    ${mixins.flexCol};

    margin: 10px 0;
    padding: 10px;
    border: 5px solid ${({ theme }) => theme.palette.secondary};

    @media ${({ theme }) => theme.device.tablet} {
        width: 45%;
    }

    @media ${({ theme }) => theme.device.desktop} {
        width: 32%;
    }

    @media ${({ theme }) => theme.device.tv} {
        width: 24%;
    }

    .header {
        width: 100%;

        ${mixins.flex};
        padding: 5px;

        font-family: ${({ theme }) => theme.font.family.roboto};
        font-size: ${({ theme }) => theme.font.size.m};

        background-color: ${({ theme }) => theme.palette.secondary};
        color: ${({ theme }) => theme.palette.dominant};

        @media ${({ theme }) => theme.device.tablet} {
            font-size: ${({ theme }) => theme.font.size.l};
        }
    }

    .description {
        padding: 20px 0;
        font-size: ${({ theme }) => theme.font.size.xs};

        @media ${({ theme }) => theme.device.tablet} {
            font-size: ${({ theme }) => theme.font.size.s};
        }

        text-align: justify;

        .short-description {
            font-weight: bold;
            text-align: center;
        }
    }

    .buttons {
        width: 100%;

        ${mixins.flex};
        justify-content: space-evenly;

        @media ${({ theme }) => theme.device.tablet} {
            flex-direction: column;
        }

        @media ${({ theme }) => theme.device.desktop} {
            flex-direction: row;
        }}

        a {
            ${mixins.flex}
            width: 100%;
        }
    }
`;
