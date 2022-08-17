import styled from 'styled-components';
import mixins from 'assets/styles/mixins';

export const Wrapper = styled.div`
    ${mixins.flexCol};

    width: 100%;
    height: 100vh;

    background-color: ${({ theme }) => theme.palette.secondary};
    color: ${({ theme }) => theme.palette.dominant};

    a {
        ${mixins.flex};

        width: 50%;
        height: 50px;
        margin-top: 20px;

        font-size: ${({ theme }) => theme.font.size.m};
        text-decoration: none;

        background-color: ${({ theme }) => theme.palette.accent};
        color: ${({ theme }) => theme.palette.dominant};

        border: 5px solid ${({ theme }) => theme.palette.accent};

        transition: all 0.25s ease-in-out;

        &:hover {
            cursor: pointer;

            background-color: ${({ theme }) => theme.palette.secondary};
            color: ${({ theme }) => theme.palette.accent};
        }
    }
`;
