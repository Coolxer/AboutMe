import styled from 'styled-components';

export const Wrapper = styled.header`
    width: 100%;
    height: 80px;
    position: fixed;
    top: 0;

    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 10px;

    background-color: ${({ theme }) => theme.palette.success};
`;

export const Author = styled.h2`
    font-family: ${({ theme }) => theme.font.family.caveat};
    font-weight: bold;
`;
