import styled from 'styled-components';
import mixins from 'assets/styles/mixins';

export const Wrapper = styled.section`
    width: 100%;
    margin-top: 50px;

    @media ${({ theme }) => theme.device.tablet} {
        width: 80%;
        margin: 0 auto;
        margin-top: 50px;
    }

    .projects-list {
        ${mixins.flexCol};
        width: 100%;

        @media ${({ theme }) => theme.device.tablet} {
            flex-direction: row;
            flex-wrap: wrap;

            justify-content: space-between;
            align-items: flex-start;
        }

        .more-link {
            ${mixins.flex};
            width: 90%;

            margin: 0 auto;
            margin-top: 20px;

            @media ${({ theme }) => theme.device.laptop} {
                width: 45%;
            }

            @media ${({ theme }) => theme.device.desktop} {
                width: 32%;
            }

            @media ${({ theme }) => theme.device.tv} {
                width: 24%;
            }

            .more-btn {
                position: relative;

                width: 100%;
                height: 200px;

                span {
                    font-size: ${({ theme }) => theme.font.size.l};
                    color: ${({ theme }) => theme.palette.secondary};

                    z-index: 2;
                }

                .icon {
                    position: absolute;
                    font-size: 16rem;

                    z-index: 1;
                    opacity: 0.5;
                }
            }
        }
    }
`;
