import { GetStaticPaths, GetStaticProps } from 'next';
import Error from 'next/error';
import { useRouter } from 'next/router';
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
    const router = useRouter();

    if (router.isFallback) {
        return <div>Página ainda carregando, por favor aguarde...</div>;
    }

    if (!post) {
        return <Error statusCode={404} />;
    }

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
        revalidate: 5,
    };
};
