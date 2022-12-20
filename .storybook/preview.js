import { ThemeProvider } from "styled-components";
import { theme } from "../src/styles/theme";

export const parameters = {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
        matchers: {
            color: /(background|color)$/i,
            date: /Date$/,
        },
    },
};

const withThemeProvider = (Story, context) => {
    // const theme = getTheme(context.globals.theme);
    return (
        <ThemeProvider theme={theme}>
            <Story {...context} />
        </ThemeProvider>
    );
};
export const decorators = [withThemeProvider];
