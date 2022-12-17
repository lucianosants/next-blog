import { PostData } from '../../domain/posts/post';
import { fetchJson } from '../../services/fetchJson';

const env = process.env.API_POSTS_CATEGORY;

export const getAllCategories = async (query = ''): Promise<PostData[]> => {
    const url = `${env}?filters[name]=${query}&populate=%2A`;

    const posts = await fetchJson<PostData[]>(url);

    return posts;
};
