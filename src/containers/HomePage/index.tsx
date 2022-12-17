import Head from 'next/head';
import { MainContainer } from '../../components/MainContainer';
import PostCard from '../../components/PostCard';
import { PostData } from '../../domain/posts/post';
import { StyledContainer } from './styles';

type HomeProps = {
    posts: PostData[];
};

export default function HomePage({ posts }: HomeProps) {
    // console.log(posts);

    return (
        <>
            <Head>
                <title>Next Blog</title>
                <meta
                    name="description"
                    content="Generated by create next app"
                />
            </Head>

            <MainContainer>
                <StyledContainer>
                    {posts.map((post) => {
                        const thumbnail =
                            post.attributes.cover.data.attributes.formats
                                .thumbnail.url;

                        return (
                            <PostCard
                                key={post.id}
                                title={post.attributes.title}
                                slug={post.attributes.slug}
                                cover={thumbnail}
                                createdBy={
                                    post.attributes.author.data.attributes.name
                                }
                                content={post.attributes.content}
                            />
                        );
                    })}
                </StyledContainer>
            </MainContainer>
        </>
    );
}
