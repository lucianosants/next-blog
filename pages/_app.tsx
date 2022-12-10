import type { AppProps } from "next/app";
import { ThemeProvider } from "styled-components";

import { GlobalStyles } from "../src/styles/globalstyles";
import { theme } from "../src/styles/theme";

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <ThemeProvider theme={theme}>
            <GlobalStyles />
            <Component {...pageProps} />
        </ThemeProvider>
    );
}

export default MyApp;
