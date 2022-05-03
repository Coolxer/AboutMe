import styled from 'styled-components';

export const Wrapper = styled.section`
    width: 100%;
    height: 100vh;

    display: flex;
    flex-direction: row;
    flex-wrap: wrap;

    position: relative;
    overflow: hidden;

    align-content: flex-start;

    .profession {
        width: 50%;
        height: 60px;

        display: flex;
        justify-content: center;
        align-items: center;

        padding: 5px;

        font-family: ${({ theme }) => theme.font.family.roboto};
        font-size: ${({ theme }) => theme.font.size.s};
        text-align: center;

        background-color: ${({ theme }) => theme.palette.secondary};
        color: ${({ theme }) => theme.palette.dominant};

        box-shadow: 0 0 10px 0 ${({ theme }) => theme.palette.shadow};
    }

    .empty {
        width: 50%;
        background: transparent;
    }

    .face {
        width: 100%;
        height: auto;

        position: absolute;
        left: 0;
        top: 0;

        opacity: 0.5;
        z-index: -1;
    }
`;
