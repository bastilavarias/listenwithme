'use client';

import React from 'react';
import { Headphones } from 'lucide-react';
import Link from 'next/link';
import GithubAuthDialog from '@/components/github-auth-dialog';
import GithubButton from '@/components/github-button';

const AppBar = () => {
    const [open, setOpen] = React.useState(false);

    return (
        <header className="container py-10">
            <div className="flex justify-between items-center">
                <div className="flex items-center">
                    <Headphones className="text-primary" />
                    <Link href="/" className="text-2xl font-bold tracking-wide">
                        <span className="text-primary">listen</span>
                        withme
                    </Link>
                    <Headphones />
                </div>
                <GithubButton onClick={() => setOpen(!open)} />
            </div>

            <GithubAuthDialog open={open} onClick={() => setOpen(!open)} />
        </header>
    );
};

export default AppBar;
