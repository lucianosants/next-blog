import 'styled-components';

declare module 'styled-components' {
    export interface DefaultTheme {
        colors: {
            primary_100: string;
            primary_200: string;
            primary_300: string;
            primary_400: string;
            secondary_100: string;
            secondary_200: string;
            secondary_300: string;
        };
        spacings: {
            small: string;
            medium: string;
            large: string;
        };
        font: {
            sizes: {
                small: string;
                medium: string;
                large: string;
                xl: string;
            };
        };
    }
}
