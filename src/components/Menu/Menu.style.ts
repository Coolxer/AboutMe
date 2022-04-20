import styled from 'styled-components';

export const Menu = styled.nav`
    position: absolute; //fixed
    left: 0;
    top: 80px;

    width: 100%;
    height: calc(100% - 80px); // 100vh; z-index: 9998;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    background-color: ${({ theme }) => theme.palette.background};

    ul {
        width: 100%;
        list-style-type: none;

        li {
            display: flex;
            justify-content: center;
            align-items: center;
            padding: 10px;
            margin: 10px 0;

            background-color: ${({ theme }) => theme.palette.color.lightGray};
            color: ${({ theme }) => theme.palette.text};
            font-weight: bold;
            font-size: 2rem;

            opacity: 0.8;

            transition: background-color 0.2s ease-in-out,
                opacity 0.2s ease-in-out;

            &:hover {
                background-color: ${({ theme }) => theme.palette.primary};
                opacity: 1;
                cursor: pointer;
            }
        }
    }
`;
