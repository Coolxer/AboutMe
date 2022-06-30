import styled from 'styled-components';
import mixins from 'assets/styles/mixins';

export const Wrapper = styled.div`
    width: 90%;

    ${mixins.flexCol}

    margin: 10px 0;
    padding: 10px;
    border: 5px solid ${({ theme }) => theme.palette.secondary};

    .header {
        width: 100%;

        ${mixins.flex};
        padding: 5px;

        font-family: ${({ theme }) => theme.font.family.roboto};
        font-size: ${({ theme }) => theme.font.size.m};

        background-color: ${({ theme }) => theme.palette.secondary};
        color: ${({ theme }) => theme.palette.dominant};
    }

    .description {
        font-size: ${({ theme }) => theme.font.size.xs};
        padding: 20px 0;
    }

    .buttons {
        width: 100%;

        ${mixins.flex};
        justify-content: space-evenly;
    }
`;
