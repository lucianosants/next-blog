import { formateDate } from '../../services/format-date';
import { StyledDate } from './styled';

interface IDateProps {
    date: string;
}

export default function DateDetail({ date }: IDateProps) {
    return <StyledDate>{formateDate(date)}</StyledDate>;
}
