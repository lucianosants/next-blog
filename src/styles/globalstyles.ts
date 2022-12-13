import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        outline: none;
        -webkit-font-smoothing: antialiased;
    }

    :root {
        font-size: 62.5%;

        --brand: #BB8AFF;
        --primary-100: #030303;
        --primary-200: #1A1A1B;
        --primary-300: #272729;
        --primary-400: #343536;
        --secondary-100: #808384;
        --secondary-200: #777A7C;
        --secondary-300: #D7DADC;

        --small: 1.6rem;
        --medium: 3.2rem;
        --large: 4.8rem;

        --text-small: 1.2rem;
        --text-medium: 1.6rem;
        --text-large: 1.8rem;
        --text-xl: 2.4rem;


    }

    html {
        min-height: 100%;
        scroll-behavior: smooth;
    }

    html, #__next {
        display: flex;
        flex-direction: column;
    }

    body {
        background-color: ${({ theme }) => theme.colors.primary_100};
        color: ${({ theme }) => theme.colors.secondary_300};
        font-size: ${({ theme }) => theme.font.sizes.medium};
        display: flex;
        flex: 1;
        overflow-x: hidden;
    }

    body * {
        font-family: sans-serif;
    }

    #__next {
        flex: 1;
        flex-wrap: nowrap;
        justify-content: flex-start;
        align-content: flex-start;
        flex-shrink: 0;
    }
`;
