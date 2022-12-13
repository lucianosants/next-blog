import { StyledMainContainer } from './styles';

interface Props {
    children: React.ReactNode;
}

export const MainContainer = ({ children }: Props) => {
    return <StyledMainContainer>{children}</StyledMainContainer>;
};
