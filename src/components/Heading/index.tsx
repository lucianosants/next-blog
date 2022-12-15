import { StyledHeading } from './styles';

interface IHeadingProps {
    children: React.ReactNode;
}

export default function Heading({ children }: IHeadingProps) {
    return <StyledHeading>{children}</StyledHeading>;
}
