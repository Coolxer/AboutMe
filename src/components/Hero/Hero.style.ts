import styled from 'styled-components';

export const Wrapper = styled.header`
    width: 100%;
    height: 100vh;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    background-color: ${({ theme }) => theme.palette.dominant};

    font-family: ${({ theme }) => theme.font.family.roboto};
    color: ${({ theme }) => theme.palette.secondary};
`;

export const HelloHeader = styled.h1`
    font-size: ${({ theme }) => theme.font.size.xl};
`;

export const NameHeader = styled.h1`
    display: block;
    background-color: ${({ theme }) => theme.palette.secondary};
    padding: 0 5px;

    font-size: ${({ theme }) => theme.font.size.xl};
    color: ${({ theme }) => theme.palette.accent};
`;

export const ProfessionHeader = styled.h2`
    font-size: ${({ theme }) => theme.font.size.m};
`;

export const HobbyHeader = styled.h3`
    font-size: ${({ theme }) => theme.font.size.s};
`;

export const LocationHeader = styled.h4`
    display: flex;
    align-items: center;

    font-size: ${({ theme }) => theme.font.size.xs};

    .icon {
        font-size: ${({ theme }) => theme.font.size.l};
        color: ${({ theme }) => theme.palette.accent};
        padding: 5px;
    }
`;

export const Image = styled.div`
    width: 240px;

    position: absolute;
    bottom: 0;
`;
