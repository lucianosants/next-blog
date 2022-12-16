import styled, { css } from 'styled-components';

const StyledPostDetails = styled.div`
    ${({ theme }) => css`
        color: ${theme.colors.secondary_100};
        font-size: ${theme.font.sizes.small};
        margin: ${theme.spacings.medium} 0;
        font-style: italic;

        em {
            text-decoration: underline;
            color: var(--brand);
        }
    `}
`;

export { StyledPostDetails };
