import { DiscussionEmbed } from 'disqus-react';
import { StyledComments } from './styled';

interface ICommentsProps {
    slug: string;
    title: string;
}

export default function Comments({ slug, title }: ICommentsProps) {
    const url = 'https://blog-nextjs-strapi.netlify.app';

    return (
        <StyledComments>
            <DiscussionEmbed
                shortname="blog-strapi"
                config={{
                    url: `${url}/post/${slug}`,
                    identifier: slug,
                    title: title,
                    language: 'pt_BR',
                }}
            />
        </StyledComments>
    );
}
