import { Headphones } from 'lucide-react';
import GithubButton from '@/components/github-button';
import Link from 'next/link';

const AppBar = () => {
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
                <GithubButton />
            </div>
        </header>
    );
};

export default AppBar;
