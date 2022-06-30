import styled from 'styled-components';
import mixins from 'assets/styles/mixins';

export const Wrapper = styled.section`
    width: 100%;

    background-color: ${({ theme }) => theme.palette.dominant};

    .skills-row {
        ${mixins.flex};
        justify-content: space-around;

        width: 100%;
        padding: 10px;

        .skill-col {
            ${mixins.flex};
            width: 100%;

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
