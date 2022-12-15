import { StyledPostCover } from './styles';

interface IPostCoverProps {
    src: string;
    alt: string;
}

export default function PostCover({ src, alt }: IPostCoverProps) {
    return <StyledPostCover src={src} alt={alt} />;
}
