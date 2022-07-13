import styled from 'styled-components';
import mixins from 'assets/styles/mixins';

export const Wrapper = styled.section`
    ${mixins.flexCol};
    position: relative;

    width: 100%;
    height: 270px;
    margin-top: 50px;

    font-family: ${({ theme }) => theme.font.family.roboto};

    background-color: ${({ theme }) => theme.palette.secondary};

    box-shadow: 0 0 20px -2px ${({ theme }) => theme.palette.shadow};

    a {
        color: ${({ theme }) => theme.palette.dominant};

        transition: color 0.15s ease-in-out;

        &:hover {
            color: ${({ theme }) => theme.palette.accent};
        }
    }

    .icons {
        ${mixins.flex};
        justify-content: space-between;

        position: absolute;

        width: 95%;
        top: 10px;

        .socials {
            ${mixins.flex};
            justify-content: space-evenly;

            width: 80%;

            a {
                font-size: ${({ theme }) => theme.font.size.l};
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

                margin-bottom: 5px;

                span {
                    padding: 10px;
                }
            }
        }

        .links {
            align-items: flex-start;
            margin-left: 30px;
        }

        .address {
            align-items: flex-end;
            margin-right: 30px;

            .cv-btn {
                width: 140px;
                margin-top: 10px;
            }
        }
    }

    .copyright {
        ${mixins.flex};

        position: absolute;
        bottom: 0;

        width: 100%;
        height: 40px;

        font-size: ${({ theme }) => theme.font.size.xs};

        background-color: ${({ theme }) => theme.palette.accent};
        color: ${({ theme }) => theme.palette.secondary};

        box-shadow: 0 0 20px -2px ${({ theme }) => theme.palette.shadow};
    }
`;
