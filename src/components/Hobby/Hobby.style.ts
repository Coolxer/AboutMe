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

        .hobby-items {
            width: 100%;

            @media ${({ theme }) => theme.device.tablet} {
                width: 50%;
            }

            .hobby-item {
                width: 100% !important;
            }
        }

        .hobbies {
            width: 90%;
            ${mixins.flexCol};
            align-items: flex-start;

            padding: 20px;

            @media ${({ theme }) => theme.device.tablet} {
                width: 100%;
                gap: 50px;
                flex-direction: row;
            }

            @media ${({ theme }) => theme.device.tv} {
                width: 80%;
                gap: 50px;
                flex-direction: row;
            }

            .hobby-item {
                ${mixins.flexCol};

                width: 100%;

                margin: 0 auto;
                margin-bottom: 20px;

                @media ${({ theme }) => theme.device.tablet} {
                    width: 50%;
                }

                span {
                    width: 100%;

                    font-size: ${({ theme }) => theme.font.size.s};
                    font-weight: bold;
                    text-align: center;

                    background-color: ${({ theme }) => theme.palette.accent};
                    color: ${({ theme }) => theme.palette.dominant};
                }

                article {
                    padding: 10px;

                    font-size: ${({ theme }) => theme.font.size.xs};
                    text-align: justify;

                    color: ${({ theme }) => theme.palette.dominant};
                }
            }
        }
    }
`;
