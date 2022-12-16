import styled, { css } from 'styled-components';

const StyledPostContainer = styled.article`
    ${({ theme }) => css`
        img {
            max-width: 100%;
        }

        h1 {
            font-size: ${theme.font.sizes.xl};
        }

        h2,
        h3 {
            font-size: ${theme.font.sizes.large};
        }

        h1,
        h2,
        h3,
        h4,
        h5,
        p {
            margin: ${theme.spacings.medium} 0;
        }

        hr {
            border: 1px solid ${theme.colors.primary_300};
            /* color: #; */
        }

        ul,
        ol {
            margin: ${theme.spacings.medium};
        }

        pre {
            width: 100%;
            overflow-x: auto;
            background-color: ${theme.colors.primary_200};
            padding: ${theme.spacings.large};
            margin: ${theme.spacings.large} 0;
            line-height: 1.5;
            font-size: ${theme.font.sizes.medium};
        }

        a {
            color: var(--brand);
        }
    `};
`;

export { StyledPostContainer };
