import { StyledPostContainer } from './styled';

interface IPostContainerProps {
    content: string;
}

export default function PostContainer({ content }: IPostContainerProps) {
    return (
        <StyledPostContainer dangerouslySetInnerHTML={{ __html: content }} />
    );
}
