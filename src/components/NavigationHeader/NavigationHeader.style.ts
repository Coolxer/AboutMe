import styled from 'styled-components';

export const Wrapper = styled.header`
    position: fixed;
    width: 100%;
    height: 80px;
    padding: 10px;
    top: 0;

    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    background-color: ${({ theme }) => theme.palette.dominant};
    //box-shadow: 0 0 2px 2px ${({ theme }) => theme.palette.shadow};

    z-index: 99;
`;
