import styled from 'styled-components';

export const Wrapper = styled.div`
    width: 100%;
    height: 70px;
    padding: 10px;

    display: flex;
    justify-content: center;
    align-items: center;

    margin-top: 45px;

    font-size: ${({ theme }) => theme.font.size.l};

    background-color: ${({ theme }) => theme.palette.secondary};
    color: ${({ theme }) => theme.palette.dominant};
    box-shadow: 0 0 10px 0 ${({ theme }) => theme.palette.shadow};

    .icon {
        padding-left: 10px;
        font-size: ${({ theme }) => theme.font.size.xl};
    }
`;
