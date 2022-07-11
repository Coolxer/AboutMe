import styled from 'styled-components';

export const Wrapper = styled.div<{ big?: boolean }>`
    width: ${({ big }) => (big ? 120 : 60)}px;
    height: ${({ big }) => (big ? 120 : 60)}px;

    flex-basis: 60px;
    flex-grow: 0;
    flex-shrink: 0;
`;
