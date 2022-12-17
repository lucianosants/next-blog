import styled, { css } from 'styled-components';

const StyledContainer = styled.section`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
    gap: 3rem;

    article {
        border-radius: 7px;

        ${({ theme }) => css`
            border: 1px solid ${theme.colors.primary_400};
            background-color: ${theme.colors.primary_200};
            padding: ${theme.spacings.small};

            &:hover {
                border-color: ${theme.colors.secondary_100};
            }
        `}
    }
`;

const StyledCategory = styled.div`
    text-align: center;

    p {
        ${({ theme }) => css`
            margin: ${theme.spacings.medium} auto;

            strong {
                color: var(--brand);
                text-transform: uppercase;
                text-decoration: 1px underline solid
                    ${theme.colors.secondary_300};
            }
        `}
    }
`;

export { StyledContainer, StyledCategory };
