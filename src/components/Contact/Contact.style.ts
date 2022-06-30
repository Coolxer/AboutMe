import styled from 'styled-components';
import mixins from 'assets/styles/mixins';

export const Wrapper = styled.section`
    ${mixins.flexCol};
    width: 100%;

    .email,
    .message {
        position: relative;
        ${mixins.flexCol};
        width: 90%;

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
`;
