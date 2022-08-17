import type { AppProps } from 'next/app';
import { ThemeProvider } from 'styled-components';

import { GlobalStyles } from 'assets/styles/globalStyles';
import { theme } from 'assets/styles/theme';

const MyApp = ({ Component, pageProps }: AppProps) => {
    return (
        <ThemeProvider theme={theme}>
            <GlobalStyles />
            <Component {...pageProps} />
        </ThemeProvider>
    );
};

export default MyApp;
