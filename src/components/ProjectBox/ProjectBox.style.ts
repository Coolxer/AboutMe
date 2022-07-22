import styled from 'styled-components';
import mixins from 'assets/styles/mixins';

export const Wrapper = styled.div<{
    isExpanded: boolean;
}>`
    ${mixins.flexCol};

    width: 90%;
    margin: 20px 0;
    padding: 10px;
    
    border: 5px solid ${({ theme }) => theme.palette.secondary};

    order: ${(props) => (props.isExpanded ? 0 : 1)};

    transition: all 0.25s ease-in-out;
    transition: order 0.25s ease-in-out, width 0.25s 0.25s  ease-in-out;

    @media ${({ theme }) => theme.device.tablet} {
        width: ${(props) => (props.isExpanded ? 100 : 45)}%;
    }

    @media ${({ theme }) => theme.device.desktop} {
        width: ${(props) => (props.isExpanded ? 100 : 32)}%;
    }

    @media ${({ theme }) => theme.device.tv} {
        width: ${(props) => (props.isExpanded ? 100 : 24)}%;
    }


    .header {
        ${mixins.flex};

        width: 100%;
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
        ${mixins.flex};
        justify-content: space-evenly;
        width: 100%;

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
