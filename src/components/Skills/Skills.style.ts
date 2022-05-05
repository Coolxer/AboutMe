import styled from 'styled-components';

export const Wrapper = styled.section`
    width: 100%;

    background-color: ${({ theme }) => theme.palette.dominant};

    .skills-row {
        width: 100%;

        display: flex;
        justify-content: space-around;
        align-items: center;

        padding: 10px;

        .skill-col {
            width: 100%;

            display: flex;
            justify-content: center;
            align-items: center;

            &:nth-child(2) {
                border-left: 2px solid ${({ theme }) => theme.palette.secondary};
                border-right: 2px solid
                    ${({ theme }) => theme.palette.secondary};
            }

            .skill-item {
                font-size: ${({ theme }) => theme.font.size.xxl};
                padding: 10px;
            }
        }
    }

    hr {
        margin: 0 30px;

        color: ${({ theme }) => theme.palette.secondary};
    }
`;
