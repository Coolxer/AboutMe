import styled from 'styled-components';

export const Hamburger = styled.button`
    text-decoration: none;
    border: none;
    background: transparent;
    font-size: 4rem;

    color: ${({ theme }) => theme.palette.background};
`;
