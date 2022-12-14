import styled, { css } from 'styled-components';

const StyledFooter = styled.header`
    ${({ theme }) => css`
        padding: ${theme.spacings.medium};
        border-top: 1px solid ${theme.colors.primary_400};
        text-align: center;
        margin: ${theme.spacings.medium};
        color: ${theme.colors.secondary_200};
        font-size: ${theme.font.sizes.small};
    `}
`;

export { StyledFooter };
