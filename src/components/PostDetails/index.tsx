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
            por <em>{author}</em> | <em>{category}</em>
        </StyledPostDetails>
    );
}
