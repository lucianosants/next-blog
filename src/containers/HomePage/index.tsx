import Header from '../../components/Header';
import { PostData } from '../../domain/posts/post';
import { StyledContainer } from './styles';

type HomeProps = {
    posts: PostData[];
};

export default function HomePage({ posts }: HomeProps) {
    // console.log(posts);

    return (
        <>
            <Header />
            <StyledContainer>
                <h2>Next Blog with Strapi</h2>

                {posts.map((post) => {
                    const thumbnail =
                        post.attributes.cover.data.attributes.formats.thumbnail
                            .url;

                    return (
                        <div key={post.id}>
                            <img src={thumbnail} alt="" />
                            <p>{post.attributes.slug}</p>
                            <br />
                            <hr />
                        </div>
                    );
                })}
            </StyledContainer>
        </>
    );
}
