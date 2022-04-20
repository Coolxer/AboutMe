import type { AppProps } from 'next/app';
import { GlobalStyles } from 'assets/styles/globalStyles';
import { themes } from 'assets/styles/themes';

import { useState } from 'react';
import { ThemeProvider } from 'styled-components';

const MyApp = ({ Component, pageProps }: AppProps) => {
    const [theme, setTheme] = useState<string>('light');

    return (
        <ThemeProvider theme={themes[theme]}>
            <GlobalStyles />
            <Component {...pageProps} />
        </ThemeProvider>
    );
};

export default MyApp;
