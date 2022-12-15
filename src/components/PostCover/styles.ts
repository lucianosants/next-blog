import styled, { css } from 'styled-components';

const StyledPostCover = styled.img`
    ${({ theme }) => css`
        max-width: 100%;
        margin: ${theme.spacings.medium + ' 0'};
    `}
`;

export { StyledPostCover };
