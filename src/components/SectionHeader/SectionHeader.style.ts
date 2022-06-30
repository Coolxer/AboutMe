import styled from 'styled-components';
import mixins from 'assets/styles/mixins';

export const Wrapper = styled.div`
    position: relative;

    ${mixins.flex};

    width: 100%;
    height: 70px;

    margin: 50px 0 30px 0;
    padding: 10px;

    font-size: ${({ theme }) => theme.font.size.l};

    background-color: ${({ theme }) => theme.palette.secondary};
    color: ${({ theme }) => theme.palette.dominant};
    box-shadow: 0 0 10px 0 ${({ theme }) => theme.palette.shadow};

    .icon {
        position: absolute;
        right: 0;

        padding-right: 10px;

        font-size: ${({ theme }) => theme.font.size.xl};
    }
`;
