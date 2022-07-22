import styled from 'styled-components';
import mixins from 'assets/styles/mixins';

export const Wrapper = styled.button`
    ${mixins.flex}

    width: 90%;
    margin: 10px;
    padding: 10px;
    
    border: 3px solid ${({ theme }) => theme.palette.accent}};
    border-radius: 50px;

    font-family: ${({ theme }) => theme.font.family.roboto};
    font-size: ${({ theme }) => theme.font.size.s};

    background-color: ${({ theme }) => theme.palette.accent};
    color: ${({ theme }) => theme.palette.dominant};
    
    box-shadow: ${({ theme }) => '0px 0px 20px 0px ' + theme.palette.accent};
    
    transition: background-color 0.35s ease-in-out, color 0.35s ease-in-out;

    @media ${({ theme }) => theme.device.tablet} {
        //font-size: ${({ theme }) => theme.font.size.m};
    }

    &:hover {
        background-color: ${({ theme }) => theme.palette.dominant};
        border-color: ${({ theme }) => theme.palette.accent};

            span {
                color: ${({ theme }) => theme.palette.accent};
            }

            .icon {
                color: ${({ theme }) => theme.palette.accent};
            }

        cursor: pointer;
    }

    &:disabled {
        background-color: ${({ theme }) => theme.palette.secondary};
        border-color: ${({ theme }) => theme.palette.secondary};
       
        box-shadow: none;
        opacity: 50%;
    }

    span {
        width: 100%;
        text-align: center;
    }
    
    .icon {

        @media ${({ theme }) => theme.device.laptop} {
            font-size: ${({ theme }) => theme.font.size.m};
        }
    }
`;
