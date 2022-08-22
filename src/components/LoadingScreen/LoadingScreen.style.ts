import styled from 'styled-components';
import mixins from 'assets/styles/mixins';

export const Wrapper = styled.div`
    position: fixed;
    left: 0;
    top: 0;

    ${mixins.flexCol};
    width: 100vw;
    height: 100vh;

    z-index: 9999;

    animation: discovering 1s linear 1;

    .spinner {
        width: 200px;
        height: 200px;

        border: 12px solid #cccccc;
        border-top: 12px solid ${({ theme }) => theme.palette.accent};
        border-radius: 50%;

        animation: spinning 1s linear infinite;
    }

    .text {
        margin-top: 20px;
        font-size: ${({ theme }) => theme.font.size.l};
    }

    @keyframes discovering {
        from {
            opacity: 0;
        }
        to {
            opacity: 1;
        }
    }

    @keyframes spinning {
        from {
            transform: rotate(0deg);
        }
        to {
            transform: rotate(360deg);
        }
    }
`;
