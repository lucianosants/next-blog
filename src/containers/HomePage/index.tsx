import { PostData } from '../../domain/posts/post';
import { StyledContainer } from './styles';

type HomeProps = {
    posts: PostData[];
};

export default function HomePage({ posts }: HomeProps) {
    return (
        <StyledContainer>
            <h2>Next Blog with Strapi</h2>

            {posts.map((post) => {
                return (
                    <div key={post.id}>
                        <p>{post.attributes.title}</p>
                        <br />
                        <hr />
                    </div>
                );
            })}
        </StyledContainer>
    );
}
