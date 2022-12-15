import { PostData } from '../../domain/posts/post';
import { fetchJson } from '../../services/fetchJson';
import { markdownToHtml } from '../../services/markdown-to-html';

const env = process.env.API_POST_SLUG;
// const sort = process.env.API_SORT_POSTS; // alternative to sort without query in function

export const getPost = async (slug: string | string[]): Promise<PostData[]> => {
    const slugString = Array.isArray(slug) ? slug[0] : slug;
    const url = `${env}?filters[slug]=${slug}&populate=%2A`;

    // new structure to Strapi v4
    // https://strapi-production-0af2.up.railway.app/api/posts ?filters[slug]= my-slug &populate=%2A

    const jsonPosts = await fetchJson<PostData[]>(url);
    const content = await markdownToHtml(jsonPosts[0].attributes.content);
    const finalContent = { ...jsonPosts[0], content };

    return [finalContent];
};
