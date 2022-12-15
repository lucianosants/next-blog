import { GetStaticPaths, GetStaticProps } from 'next';
import { ParsedUrlQuery } from 'querystring';
import { Post } from '../../src/containers/Post';
import { getAllPosts } from '../../src/data/posts/get-all-posts';
import { getPost } from '../../src/data/posts/get-post';
import { PostData } from '../../src/domain/posts/post';

export interface DynamicPostProps {
    post: PostData;
}

export interface IParams extends ParsedUrlQuery {
    slug: string;
}

export default function DynamicPosts({ post }: DynamicPostProps) {
    return <Post post={post} />;
}

export const getStaticPaths: GetStaticPaths = async () => {
    const posts = await getAllPosts();

    return {
        paths: posts.map((post) => {
            return {
                params: {
                    slug: post.attributes.slug,
                },
            };
        }),
        fallback: true,
    };
};

export const getStaticProps: GetStaticProps = async (ctx) => {
    const { slug } = ctx.params as IParams;

    const posts = await getPost(slug);

    return {
        props: { post: posts[0] },
    };
};
