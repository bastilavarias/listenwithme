import { Github } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

const GithubButton = ({ className, onClick }) => {
    return (
        <Button className={cn('', className)} onClick={onClick}>
            <Github className="mr-1" />
            GitHub
        </Button>
    );
};

export default GithubButton;
