import type { AppProps } from 'next/app';
import { ThemeProvider } from 'styled-components';
import Footer from '../src/components/Footer';
import Header from '../src/components/Header';

import { GlobalStyles } from '../src/styles/globalstyles';
import { theme } from '../src/styles/theme';

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <ThemeProvider theme={theme}>
            <GlobalStyles />
            <Header />
            <Component {...pageProps} />
            <Footer />
        </ThemeProvider>
    );
}

export default MyApp;
