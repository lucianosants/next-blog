import { PostData } from '../../domain/posts/post';
import { fetchJson } from '../../services/fetchJson';

const env = process.env.API_POSTS;
// const sort = process.env.API_SORT_POSTS; // alternative to sort without query in function

export const getAllPosts = async (query = ''): Promise<PostData[]> => {
    const url = `${env}&${query}`;
    const posts = await fetchJson<PostData[]>(url);
    return posts;
};
