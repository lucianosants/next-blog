import { GetServerSideProps } from 'next';
import HomePage from '../../src/containers/HomePage';
import { getAllCategories } from '../../src/data/posts/get-all-categories';
import { PostData } from '../../src/domain/posts/post';

type CategoryProps = {
    posts: [
        {
            attributes: {
                posts: {
                    data: PostData[];
                };
            };
        }
    ];
    category: string;
};

export default function Category({ posts, category }: CategoryProps) {
    const data = posts[0].attributes.posts.data;
    return <>{<HomePage category={category} posts={data} />}</>;
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
    const url = ctx.query.category;
    const posts = await getAllCategories(`${url}`);

    return {
        props: { posts, category: ctx.query.category },
    };
};
