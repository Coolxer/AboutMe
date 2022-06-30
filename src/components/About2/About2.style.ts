import styled from 'styled-components';
import mixins from 'assets/styles/mixins';

export const Wrapper = styled.section`
    position: relative;
    overflow: hidden;

    ${mixins.flexRow};
    flex-wrap: wrap;
    align-content: flex-start;

    width: 100%;
    margin-top: 30px;

    .profession {
        ${mixins.flex};

        width: 50%;
        height: 60px;
        padding: 5px;

        font-size: ${({ theme }) => theme.font.size.s};
        text-align: center;

        background-color: ${({ theme }) => theme.palette.secondary};
        color: ${({ theme }) => theme.palette.dominant};

        box-shadow: 0 0 10px 0 ${({ theme }) => theme.palette.shadow};
        z-index: 10;
    }

    .empty {
        width: 50%;
        background: transparent;
    }

    .face {
        position: absolute;
        left: 0;
        top: 0;

        width: 100%;
        height: auto;

        opacity: 0.5;
        z-index: 0;
    }
`;
