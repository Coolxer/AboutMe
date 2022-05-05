import styled from 'styled-components';

export const Wrapper = styled.div`
    width: 100%;
    height: 70px;
    padding: 10px;

    position: relative;

    display: flex;
    justify-content: center;
    align-items: center;

    margin: 50px 0 30px 0;

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
