import styled from 'styled-components';
import mixins from 'assets/styles/mixins';

export const Wrapper = styled.section`
    ${mixins.flexCol};
    align-items: flex-start;

    width: 100%;
    margin-top: 50px;

    @media ${({ theme }) => theme.device.tablet} {
        width: 80%;
        margin: 0 auto;
        margin-top: 50px;
    }

    @media ${({ theme }) => theme.device.laptop} {
        flex-direction: row;
    }

    @media ${({ theme }) => theme.device.tv} {
        width: 70%;
    }

    .mobile-header {
        @media ${({ theme }) => theme.device.laptop} {
            display: none;
        }
    }

    .description {
        display: none;
        position: relative;

        @media ${({ theme }) => theme.device.laptop} {
            ${mixins.flexCol};
            flex: 1;
            margin-right: 50px;
        }

        article {
            width: 100%;
            padding: 10px;

            p {
                font-family: ${({ theme }) => theme.font.family.roboto};
                font-size: ${({ theme }) => theme.font.size.s};
                text-align: justify;

                span {
                    color: ${({ theme }) => theme.palette.accent};
                }

                @media ${({ theme }) => theme.device.laptop} {
                    font-size: ${({ theme }) => theme.font.size.m};
                }
            }
        }

        .headphones-icon {
            display: none;

            position: absolute;
            left: 0;
            top: 0;

            width: 100%;
            height: 100%;
            font-size: 18rem;

            color: ${({ theme }) => theme.palette.accent};
            opacity: 0.5;

            @media ${({ theme }) => theme.device.laptop} {
                ${mixins.flex};
            }
        }
    }

    form {
        ${mixins.flexCol}

        width: 100%;
        flex: 1;

        .email,
        .message {
            ${mixins.flexCol};
            position: relative;
            width: 90%;

            @media ${({ theme }) => theme.device.tablet} {
                width: 100%;
            }

            label {
                ${mixins.flex};

                width: 100%;
                padding: 10px;

                font-family: ${({ theme }) => theme.font.family.roboto};
                font-size: ${({ theme }) => theme.font.size.m};

                background-color: ${({ theme }) => theme.palette.secondary};
                color: ${({ theme }) => theme.palette.dominant};

                .icon {
                    position: absolute;
                    right: 10px;

                    font-size: ${({ theme }) => theme.font.size.l};
                }
            }

            input,
            textarea {
                width: 100%;
                margin-top: 20px;
                padding: 10px;

                font-family: ${({ theme }) => theme.font.family.roboto};
                font-size: ${({ theme }) => theme.font.size.xs};
            }
        }

        .email input {
            height: 40px;
        }

        .message {
            margin: 30px 0;

            textarea {
                height: 150px;
            }
        }
    }

    .validationMessage {
        margin-bottom: 10px;

        font-size: ${({ theme }) => theme.font.size.s};
    }

    .success {
        color: ${({ theme }) => theme.palette.accent};
    }

    .error {
        color: red;
    }
`;
