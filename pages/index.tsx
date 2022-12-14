import { GetStaticProps } from 'next';
import Head from 'next/head';

import { getAllPosts } from '../src/data/posts/get-all-posts';
import { PostData } from '../src/domain/posts/post';

import HomePage from '../src/containers/HomePage';

type HomeProps = {
    posts: PostData[];
};

export default function Home({ posts }: HomeProps) {
    return (
        <>
            <Head>
                <title>Next Blog</title>
            </Head>

            <HomePage posts={posts} />
        </>
    );
}

export const getStaticProps: GetStaticProps = async () => {
    const posts = await getAllPosts(
        'deep&sort=id:desc&pagination[start]=0&pagination[limit]=30'
    );

    return {
        props: { posts },
    };
};
