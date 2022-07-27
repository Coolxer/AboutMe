import styled from 'styled-components';
import mixins from 'assets/styles/mixins';

export const Wrapper = styled.div`
    ${mixins.flex};
    position: relative;

    width: 100px;
    padding: 10px;

    font-size: ${({ theme }) => theme.font.size.xxl};

    &:hover {
        cursor: pointer;

        .tooltip {
            opacity: 1;
        }
    }

    .tooltip {
        ${mixins.flex};
        position: absolute;
        left: 0;
        right: 0;
        top: 0;
        bottom: 0;
        margin: auto;

        padding: 5px;
        border-radius: 20px;

        opacity: 0;

        font-size: ${({ theme }) => theme.font.size.s};

        background-color: ${({ theme }) => theme.palette.accent};
        box-shadow: 2px 2px 1px 1px ${({ theme }) => theme.palette.shadow};

        transition: opacity 0.1s ease-in-out;
    }
`;
