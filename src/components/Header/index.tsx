import Link from 'next/link';
import { AiFillGithub } from 'react-icons/ai';

import { StyledHeader } from './styles';

export default function Header() {
    return (
        <StyledHeader>
            <nav>
                <Link href="/" aria-label="next blog">
                    <img src="/logo.svg" alt="" />
                </Link>

                <Link
                    href="https://github.com/lucianosants/next-blog"
                    target="_blank"
                    aria-label="link to project code"
                    title="Source project"
                >
                    <AiFillGithub size={22} />
                </Link>
            </nav>
        </StyledHeader>
    );
}
