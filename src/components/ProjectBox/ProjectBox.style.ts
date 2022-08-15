import styled from 'styled-components';
import mixins from 'assets/styles/mixins';

export const Wrapper = styled.div`
    ${mixins.flexCol};

    width: 90%;
    margin: 20px auto;
    padding: 10px;
    border-radius: 25px;

    background-color: ${({ theme }) => theme.palette.secondary};

    box-shadow: 2px 2px 1px 1px ${({ theme }) => theme.palette.shadow};

    @media ${({ theme }) => theme.device.laptop} {
        width: 45%;
    }

    @media ${({ theme }) => theme.device.desktop} {
        width: 32%;
    }

    @media ${({ theme }) => theme.device.tv} {
        width: 24%;
    }

    .header {
        ${mixins.flex};
        padding: 10px;

        font-size: ${({ theme }) => theme.font.size.m};
        color: ${({ theme }) => theme.palette.dominant};

        @media ${({ theme }) => theme.device.tablet} {
            font-size: ${({ theme }) => theme.font.size.l};
        }
    }

    hr {
        width: 80%;
        opacity: 0.5;
    }

    .technologies {
        ${mixins.flexRow};
        justify-content: space-evenly;

        width: 100%;
        padding: 5px;

        .tech {
            padding: 10px;

            font-size: ${({ theme }) => theme.font.size.l};
            color: ${({ theme }) => theme.palette.accent};
        }
    }

    .info {
        ${mixins.flexCol};

        width: 100%;
        height: 100%;

        border-radius: 15px;
        background-color: ${({ theme }) => theme.palette.dominant};

        .subtitle {
            margin-top: 10px;
            padding: 10px;

            font-size: ${({ theme }) => theme.font.size.s};
            font-weight: bold;

            text-align: center;
        }

        .description {
            padding: 20px 20px;

            font-size: ${({ theme }) => theme.font.size.s};
            text-align: justify;
        }

        a {
            ${mixins.flex}
            width: 100%;
        }
    }
`;
