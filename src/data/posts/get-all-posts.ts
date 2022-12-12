import { PostData } from '../../domain/posts/post';
import { fetchJson } from '../../services/fetchJson';

const env = process.env.API_POSTS;

export const getAllPosts = async (): Promise<PostData[]> => {
    const url = `${env}`;
    const posts = await fetchJson<PostData[]>(url);
    return posts;
};
