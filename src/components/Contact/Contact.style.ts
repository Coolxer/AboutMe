import styled from 'styled-components';
import mixins from 'assets/styles/mixins';

export const Wrapper = styled.section`
    ${mixins.flexCol};
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
        }

        @media ${({ theme }) => theme.device.laptop} {
            margin-right: 50px;
        }

        article {
            width: 100%;
            padding: 10px;

            @media ${({ theme }) => theme.device.laptop} {
                flex: 1;
            }

            @media ${({ theme }) => theme.device.desktop} {
                justify-content: flex-start;
            }

            p {
                font-family: ${({ theme }) => theme.font.family.roboto};
                font-size: ${({ theme }) => theme.font.size.s};
                text-align: justify;

                @media ${({ theme }) => theme.device.laptop} {
                    font-size: ${({ theme }) => theme.font.size.m};
                }

                @media ${({ theme }) => theme.device.tv} {
                    font-size: ${({ theme }) => theme.font.size.l};
                }
            }
        }

        .headphones-icon-wrapper {
            display: none;
            ${mixins.flex};

            position: absolute;
            left: 0;
            top: 0;

            width: 100%;
            height: 100%;

            color: ${({ theme }) => theme.palette.accent};
            opacity: 0.5;

            .headphones-icon {
                font-size: 24rem;

                @media ${({ theme }) => theme.device.desktop} {
                    font-size: 25rem;
                }
            }
        }
    }

    .contact-form {
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

                font-family: ${({ theme }) => theme.font.family.roboto};
                font-size: ${({ theme }) => theme.font.size.xs};
            }
        }

        .email input {
            height: 40px;
        }

        .message textarea {
            height: 150px;
        }

        .message {
            margin: 30px 0;
        }

        /*
        .send-btn {
            width: 90%;

            @media ${({ theme }) => theme.device.tablet} {
                width: 50%;
            }

            @media ${({ theme }) => theme.device.laptop} {
                width: 100%;
            }

            @media ${({ theme }) => theme.device.desktop} {
                width: 40%;
            }

            span {
                width: 100%;
            }
        }
        */
    }
`;
