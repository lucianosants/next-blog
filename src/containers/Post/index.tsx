import Head from 'next/head';
import Comments from '../../components/Comments';
import Heading from '../../components/Heading';
import { MainContainer } from '../../components/MainContainer';
import PostContainer from '../../components/PostContainer';
import PostCover from '../../components/PostCover';
import PostDetails from '../../components/PostDetails';
import { PostData } from '../../domain/posts/post';

interface IPostProps {
    post: PostData;
}

export const Post = ({ post }: IPostProps) => {
    // console.log(post);
    return (
        <>
            <Head>
                <title>{post?.attributes.title} - Next Blog</title>
                <meta name="description" content={post?.attributes.slug} />
            </Head>
            <MainContainer>
                <Heading>{post?.attributes.title}</Heading>
                <PostCover
                    src={
                        post?.attributes.cover.data.attributes.formats.large.url
                    }
                    alt={`Image from post ${post?.attributes.title}`}
                />
                <PostDetails
                    date={post?.attributes.publishedAt}
                    author={post?.attributes.author.data.attributes.name}
                    category={post?.attributes.category.data.attributes.name}
                />
                <PostContainer content={post?.content} />
                <Comments
                    slug={post?.attributes.slug}
                    title={post?.attributes.title}
                />
            </MainContainer>
        </>
    );
};
