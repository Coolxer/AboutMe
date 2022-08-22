import type { AppProps } from 'next/app';
import { ThemeProvider } from 'styled-components';

import { GlobalStyles } from 'assets/styles/globalStyles';
import { theme } from 'assets/styles/theme';
import { useState, useEffect } from 'react';
import LoadingScreen from 'components/LoadingScreen/LoadingScreen';

import 'assets/styles/fonts.css';

const MyApp = ({ Component, pageProps }: AppProps) => {
    const [isLoading, setIsLoading] = useState<boolean>(true);
    useEffect(() => {
        setTimeout(() => {
            setIsLoading(false);
        }, 1000);
    }, []);
    return (
        <ThemeProvider theme={theme}>
            <GlobalStyles />
            {isLoading ? <LoadingScreen /> : <Component {...pageProps} />}
        </ThemeProvider>
    );
};

export default MyApp;
