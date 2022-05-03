import styled from 'styled-components';

export const Wrapper = styled.section`
    width: 100%;
    height: 100vh;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    background-color: ${({ theme }) => theme.palette.dominant};
    color: ${({ theme }) => theme.palette.secondary};

    article {
        width: 90%;
        padding: 10px;

        p {
            text-align: justify;

            font-size: ${({ theme }) => theme.font.size.s};
            font-family: ${({ theme }) => theme.font.family.roboto};
        }
    }

    .quote {
        background-color: ${({ theme }) => theme.palette.secondary};
        color: ${({ theme }) => theme.palette.accent};

        margin-top: 10px;
        padding: 5px;

        font-family: ${({ theme }) => theme.font.family.indie};
        font-size: ${({ theme }) => theme.font.size.m};
        text-align: center;
    }
`;
