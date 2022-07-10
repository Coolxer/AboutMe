import styled from 'styled-components';
import mixins from 'assets/styles/mixins';

export const Wrapper = styled.section`
    ${mixins.flexCol};
    width: 100%;

    article {
        position: relative;

        width: 90%;
        padding: 10px;

        @media ${({ theme }) => theme.device.laptop} {
            width: 40%;
            height: 100%;
        }

        p {
            font-family: ${({ theme }) => theme.font.family.roboto};
            font-size: ${({ theme }) => theme.font.size.s};
            text-align: justify;

            @media ${({ theme }) => theme.device.laptop} {
                font-size: ${({ theme }) => theme.font.size.l};
            }
        }

        .person-icon {
            display: none;

            position: absolute;
            left: 0;
            top: 0;

            width: 100%;
            height: 100%;

            color: ${({ theme }) => theme.palette.accent};
            opacity: 0.5;

            @media ${({ theme }) => theme.device.laptop} {
                display: block;
            }
        }
    }

    .quote {
        margin-top: 10px;
        padding: 5px;

        font-family: ${({ theme }) => theme.font.family.indie};
        font-size: ${({ theme }) => theme.font.size.m};
        text-align: center;

        background-color: ${({ theme }) => theme.palette.secondary};
        color: ${({ theme }) => theme.palette.accent};
    }
`;
