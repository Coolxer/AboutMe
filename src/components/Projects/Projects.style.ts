import styled from 'styled-components';
import mixins from 'assets/styles/mixins';

export const Wrapper = styled.section`
    width: 100%;
    margin-top: 50px;

    @media ${({ theme }) => theme.device.tablet} {
        width: 80%;
        margin: 0 auto;
        margin-top: 50px;
    }

    .projects-list {
        ${mixins.flexCol};
        width: 100%;

        @media ${({ theme }) => theme.device.tablet} {
            flex-direction: row;
            flex-wrap: wrap;

            justify-content: space-between;
            align-items: flex-start;
        }
    }
`;
