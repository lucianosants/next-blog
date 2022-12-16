import Heading from '../../components/Heading';
import { MainContainer } from '../../components/MainContainer';
import PostCover from '../../components/PostCover';
import { PostData } from '../../domain/posts/post';

interface IPostProps {
    post: PostData;
}

export const Post = ({ post }: IPostProps) => {
    console.log(post);
    return (
        <>
            <MainContainer>
                <Heading>{post?.attributes.title}</Heading>
                <PostCover
                    src={
                        post?.attributes.cover.data.attributes.formats.large.url
                    }
                    alt={`Image from post ${post?.attributes.title}`}
                />
                <div dangerouslySetInnerHTML={{ __html: post?.content }} />
            </MainContainer>
        </>
    );
};
