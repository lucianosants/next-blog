import { DefaultTheme } from 'styled-components';

const theme: DefaultTheme = {
    colors: {
        primary_100: 'var(--primary-100)',
        primary_200: 'var(--primary-200)',
        primary_300: 'var(--primary-300)',
        primary_400: 'var(--primary-400)',
        secondary_100: 'var(--secondary-100)',
        secondary_200: 'var(--secondary-200)',
        secondary_300: 'var(--secondary-300)',
    },
    spacings: {
        small: 'var(--small)',
        medium: 'var(--medium)',
        large: 'var(--large)',
    },
    font: {
        sizes: {
            small: 'var(--text-small)',
            medium: 'var(--text-medium)',
            large: 'var(--text-large)',
            xl: 'var(--text-xl)',
        },
    },
};

export { theme };
