import Link from 'next/link';
import {
    StyledPostCard,
    StyledPostedBy,
    StyledPostHeading,
    StyledPostCover,
    StyledPostTitle,
    StyledPostContent,
} from './styles';

export interface PostCardProps {
    title: string;
    cover: string;
    createdBy: string;
    slug: string;
    content: string;
}

export default function PostCard({
    title,
    cover,
    createdBy,
    slug,
    content,
}: PostCardProps) {
    return (
        <StyledPostCard>
            <StyledPostHeading>
                <StyledPostedBy>- {createdBy}</StyledPostedBy>
                <StyledPostTitle>
                    <Link href="/post/[slug]" as={`/post/${slug}`}>
                        {title}
                    </Link>
                </StyledPostTitle>
                <StyledPostContent>
                    <Link href="/post/[slug]" as={`/post/${slug}`}>
                        {content}
                    </Link>
                </StyledPostContent>
            </StyledPostHeading>

            <StyledPostCover>
                <Link href="/post/[slug]" as={`/post/${slug}`}>
                    <img src={cover} alt={title} />
                </Link>
            </StyledPostCover>
        </StyledPostCard>
    );
}
