import styled, { css } from 'styled-components';

const StyledHeading = styled.h2`
    ${({ theme }) => css`
        font-size: ${theme.font.sizes.xl};
        margin: ${theme.spacings.medium} 0;
        text-align: center;
        color: var(--brand);
        position: relative;
        padding-bottom: ${theme.spacings.medium};

        &::before {
            content: ' ★★★ ';
            position: absolute;
            font-size: 0.6rem;
            width: 100%;
            color: ${theme.colors.primary_400};
            letter-spacing: 0.5rem;

            display: flex;
            justify-content: center;
            height: 10px;
            bottom: 0;
        }
    `}
`;

export { StyledHeading };
