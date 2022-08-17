import styled from 'styled-components';
import mixins from 'assets/styles/mixins';

export const Wrapper = styled.section`
    ${mixins.flex};
    width: 100%;
    margin-top: 50px;

    background-color: ${({ theme }) => theme.palette.secondary};

    @media ${({ theme }) => theme.device.tablet} {
        margin: 0 auto;
        margin-top: 50px;
    }

    .box {
        ${mixins.flexCol};
        width: 100%;

        @media ${({ theme }) => theme.device.tablet} {
            width: 80%;
        }

        @media ${({ theme }) => theme.device.tv} {
            width: 70%;
        }

        .section-header {
            background-color: ${({ theme }) => theme.palette.accent};
        }

        .hobbies {
            ${mixins.flexCol};
            align-items: flex-start;

            width: 100%;

            @media ${({ theme }) => theme.device.tablet} {
                flex-direction: row;
                flex-wrap: wrap;
            }

            .hobby-item {
                ${mixins.flexCol};

                margin: 0 auto;
                margin-bottom: 20px;
                padding: 30px;

                @media ${({ theme }) => theme.device.tablet} {
                    width: 50%;
                }

                span {
                    width: 100%;

                    font-size: ${({ theme }) => theme.font.size.m};
                    font-weight: bold;
                    text-align: center;

                    background-color: ${({ theme }) => theme.palette.accent};
                    color: ${({ theme }) => theme.palette.dominant};
                }

                article {
                    padding: 10px;

                    font-size: ${({ theme }) => theme.font.size.s};
                    text-align: justify;

                    color: ${({ theme }) => theme.palette.dominant};
                }
            }
        }
    }
`;
