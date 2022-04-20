import * as styled from 'styled-components';

export const GlobalStyles = styled.createGlobalStyle`
    *,
    *:before,
    *:after {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
    }

    html {
        font-size: 62.5%; // make 10px is base font-size to easy calculating
        font-family: 'Roboto', sans-serif;
    }

    body {
        font-size: 1.6rem; // restore basic 16px font-size
    }
`;
