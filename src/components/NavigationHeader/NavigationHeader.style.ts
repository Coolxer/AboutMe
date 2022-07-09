import styled from 'styled-components';
import mixins from 'assets/styles/mixins';

export const Wrapper = styled.header`
    position: fixed;
    top: 0;

    ${mixins.flex};
    justify-content: space-between;

    width: 100%;
    height: 80px;
    padding: 10px;

    background-color: ${({ theme }) => theme.palette.accent};
    box-shadow: 0 0 20px 2px ${({ theme }) => theme.palette.shadow};

    z-index: 100;
`;
