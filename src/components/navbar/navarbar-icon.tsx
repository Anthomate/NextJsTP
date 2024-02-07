'use client';

import Link from 'next/link';

export default function NavbarIcon({ children, href, onClick, active }: { children: any; href: string; onClick: () => void; active: boolean }) {
    return (
        <Link href={href}>
            <p className={`text-4xl ${active ? 'text-yellow-500' : ''}`} onClick={onClick}>{children}</p>
        </Link>
    );
}
