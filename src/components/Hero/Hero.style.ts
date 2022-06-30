import styled from 'styled-components';
import mixins from 'assets/styles/mixins';

export const Wrapper = styled.header`
    ${mixins.flexCol};
    width: 100%;
    height: 100vh;
`;

export const HelloHeader = styled.h1`
    font-size: ${({ theme }) => theme.font.size.xl};
`;

export const NameHeader = styled.h1`
    display: block;
    padding: 0 5px;

    font-size: ${({ theme }) => theme.font.size.xl};

    background-color: ${({ theme }) => theme.palette.secondary};
    color: ${({ theme }) => theme.palette.accent};
`;

export const ProfessionHeader = styled.h2`
    font-size: ${({ theme }) => theme.font.size.m};
`;

export const HobbyHeader = styled.h3`
    font-size: ${({ theme }) => theme.font.size.s};
`;

export const LocationHeader = styled.h4`
    ${mixins.flex};

    font-size: ${({ theme }) => theme.font.size.xs};

    .icon {
        padding: 5px;
        font-size: ${({ theme }) => theme.font.size.l};
        color: ${({ theme }) => theme.palette.accent};
    }
`;

export const Image = styled.div`
    position: absolute;
    bottom: 0;

    width: 240px;
`;
