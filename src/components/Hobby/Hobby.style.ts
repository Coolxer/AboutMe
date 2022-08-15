import styled from 'styled-components';
import mixins from 'assets/styles/mixins';

export const Wrapper = styled.section`
    margin-top: 50px;

    @media ${({ theme }) => theme.device.tablet} {
        width: 80%;
        margin: 0 auto;
        margin-top: 50px;
    }

    .hobbies {
        ${mixins.flexCol};
        align-items: flex-start;

        @media ${({ theme }) => theme.device.tablet} {
            width: 100%;
        }

        @media ${({ theme }) => theme.device.laptop} {
            flex-direction: row;
            flex-wrap: wrap;
        }

        .hobby-item {
            ${mixins.flexCol};

            width: 90%;
            margin: 0 auto;
            margin-bottom: 20px;
            padding: 10px;

            @media ${({ theme }) => theme.device.laptop} {
                width: 50%;
            }

            span {
                width: 100%;

                font-size: ${({ theme }) => theme.font.size.m};
                font-weight: bold;
                text-align: center;

                background-color: ${({ theme }) => theme.palette.secondary};
                color: ${({ theme }) => theme.palette.dominant};
            }

            article {
                font-size: ${({ theme }) => theme.font.size.s};
                text-align: justify;

                padding: 10px;
            }
        }
    }
`;
