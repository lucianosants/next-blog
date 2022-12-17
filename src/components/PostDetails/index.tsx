import Link from 'next/link';
import DateDetail from '../DateDetail';
import { StyledPostDetails } from './styled';

interface IPostDetails {
    date: string;
    author?: string;
    category?: string;
}

export default function PostDetails({ date, author, category }: IPostDetails) {
    return (
        <StyledPostDetails>
            Publicado em{' '}
            <em>
                <DateDetail date={date} />
            </em>{' '}
            por <em>{author}</em> |{' '}
            <Link href={`/categories/${category}`}>
                <em>{category}</em>
            </Link>
        </StyledPostDetails>
    );
}
