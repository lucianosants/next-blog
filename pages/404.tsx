import styled from 'styled-components';

const Styled404 = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100%;
    gap: 7rem;
    img {
        width: 25rem;
    }
`;

export default function PageNotFound() {
    return (
        <Styled404>
            <img src="/page-not-found.svg" alt="" />
            <p>PAGE NOT FOUND</p>
        </Styled404>
    );
}
