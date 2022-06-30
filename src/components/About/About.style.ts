import styled from 'styled-components';
import mixins from 'assets/styles/mixins';

export const Wrapper = styled.section`
    ${mixins.flexCol};
    width: 100%;

    article {
        width: 90%;
        padding: 10px;

        p {
            font-family: ${({ theme }) => theme.font.family.roboto};
            font-size: ${({ theme }) => theme.font.size.s};
            text-align: justify;
        }
    }

    .quote {
        margin-top: 10px;
        padding: 5px;

        font-family: ${({ theme }) => theme.font.family.indie};
        font-size: ${({ theme }) => theme.font.size.m};
        text-align: center;

        background-color: ${({ theme }) => theme.palette.secondary};
        color: ${({ theme }) => theme.palette.accent};
    }
`;
