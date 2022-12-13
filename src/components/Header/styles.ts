import styled from 'styled-components';

const StyledHeader = styled.header`
    padding: 1.8rem;
    background-color: ${({ theme }) => theme.colors.primary_100};
    border-bottom: 1px solid ${({ theme }) => theme.colors.secondary_100};

    nav {
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: min(120rem, 100%);
        margin: 0 auto;

        img {
            width: 110px;

            &:hover {
                opacity: 0.9;
            }
        }
    }
`;

export { StyledHeader };
