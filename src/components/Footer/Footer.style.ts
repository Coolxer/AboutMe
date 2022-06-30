import styled from 'styled-components';
import mixins from 'assets/styles/mixins';

export const Wrapper = styled.section`
    position: relative;
    ${mixins.flexCol};

    width: 100%;
    height: 270px;
    margin-top: 50px;

    font-family: ${({ theme }) => theme.font.family.roboto};

    background-color: ${({ theme }) => theme.palette.secondary};

    box-shadow: 0 0 20px -2px ${({ theme }) => theme.palette.shadow};

    a {
        color: ${({ theme }) => theme.palette.dominant};
        opacity: 0.7;

        transition: opacity 0.15s ease-in-out;

        &:hover {
            opacity: 1;
        }
    }

    .icons {
        position: absolute;

        ${mixins.flex};
        justify-content: space-between;

        width: 95%;
        top: 10px;

        .socials {
            ${mixins.flex};
            justify-content: space-evenly;

            width: 80%;

            a {
                font-size: ${({ theme }) => theme.font.size.l};
                color: ${({ theme }) => theme.palette.dominant};
            }
        }
    }

    .info {
        ${mixins.flexRow};
        justify-content: space-between;
        align-items: flex-start;

        width: 100%;
        margin-top: 30px;

        font-family: ${({ theme }) => theme.font.family.roboto};
        color: ${({ theme }) => theme.palette.dominant};

        .links,
        .address {
            ${mixins.flexCol};
            flex: 1;

            .header {
                font-size: ${({ theme }) => theme.font.size.s};
                color: ${({ theme }) => theme.palette.accent};

                span {
                    padding-right: 10px;
                }
            }
        }

        .address .cv-btn {
            margin-top: 10px;
        }
    }

    .copyright {
        position: absolute;
        bottom: 0;

        ${mixins.flex};

        width: 100%;
        height: 40px;

        font-size: ${({ theme }) => theme.font.size.xs};

        background-color: ${({ theme }) => theme.palette.accent};
        color: ${({ theme }) => theme.palette.secondary};

        box-shadow: 0 0 20px -2px ${({ theme }) => theme.palette.shadow};
    }
`;
