import Link from 'next/link';
import { AiFillGithub } from 'react-icons/ai';

import { StyledFooter } from './styles';

export default function Footer() {
    return (
        <StyledFooter>
            <p>
                Created by lucianosants &copy; <strong>2022</strong>
            </p>
        </StyledFooter>
    );
}
