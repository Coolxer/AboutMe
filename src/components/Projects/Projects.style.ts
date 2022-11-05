import styled from 'styled-components';
import mixins from 'assets/styles/mixins';

export const Wrapper = styled.section`
    margin-top: 50px;

    @media ${({ theme }) => theme.device.tablet} {
        width: 80%;
        margin: 0 auto;
        margin-top: 50px;
    }

    @media ${({ theme }) => theme.device.tv} {
        width: 70%;
    }

    .projects-list {
        ${mixins.flexCol};

        @media ${({ theme }) => theme.device.tablet} {
            flex-direction: row;
            flex-wrap: wrap;

            justify-content: space-between;
            align-items: flex-start;
        }

        .more-link {
            ${mixins.flex};
            width: 100%;

            margin-top: 20px;
            padding: 10px;

            @media ${({ theme }) => theme.device.tablet} {
                width: 50%;
            }

            @media ${({ theme }) => theme.device.desktop} {
                width: 33%;
            }

            .more-btn {
                width: 100%;
                height: 200px;

                span {
                    font-size: ${({ theme }) => theme.font.size.m};
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

        .empty-project {
            display: none;

            @media ${({ theme }) => theme.device.desktop} {
                display: block;
                width: 33%;
            }
        }
    }
`;
