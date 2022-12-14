import styled, { css } from 'styled-components';

const StyledPostCard = styled.article`
    display: flex;
    justify-content: space-between;
    gap: 3rem;
`;

const StyledPostHeading = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;
`;

const StyledPostedBy = styled.p`
    ${({ theme }) => css`
        color: ${theme.colors.secondary_200};
        font-size: ${theme.font.sizes.small};
        font-weight: 600;
    `}
`;

const StyledPostTitle = styled.p`
    a {
        ${({ theme }) => css`
            color: ${theme.colors.secondary_300};
            font-size: ${theme.font.sizes.medium};
            font-weight: 600;

            &:hover {
                color: ${theme.colors.secondary_200};
            }
        `};
    }
`;

const StyledPostContent = styled.p`
    a {
        display: block;
        white-space: nowrap;
        width: 15rem;
        height: 6rem;
        overflow: hidden;
        text-overflow: ellipsis;
    }
`;

const StyledPostCover = styled.div`
    img {
        width: 100%;
    }

    width: 80px;
    height: 80px;
`;

export {
    StyledPostCard,
    StyledPostHeading,
    StyledPostedBy,
    StyledPostTitle,
    StyledPostContent,
    StyledPostCover,
};
