import styled from 'styled-components';

export const Wrapper = styled.div`
    width: 90%;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    border: 5px solid ${({ theme }) => theme.palette.secondary};
    padding: 10px;

    margin: 10px 0;

    .header {
        width: 100%;

        display: flex;
        justify-content: center;
        align-items: center;

        font-family: ${({ theme }) => theme.font.family.roboto};
        font-size: ${({ theme }) => theme.font.size.m};

        padding: 5px;

        color: ${({ theme }) => theme.palette.dominant};
        background-color: ${({ theme }) => theme.palette.secondary};
    }

    .description {
        font-size: ${({ theme }) => theme.font.size.xs};
        padding: 20px 0;
    }

    .buttons {
        width: 100%;

        display: flex;
        justify-content: space-evenly;
        align-items: center;
    }
`;
