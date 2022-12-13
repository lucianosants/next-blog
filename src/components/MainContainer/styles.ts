import styled, { css } from 'styled-components';

const StyledMainContainer = styled.main`
    width: min(96rem, 100%);
    margin: 0 auto;

    ${({ theme }) => css`
        font-size: ${theme.font.sizes.medium};
        padding: ${theme.spacings.medium};
    `}
`;

export { StyledMainContainer };
