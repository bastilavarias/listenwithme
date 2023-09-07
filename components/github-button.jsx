import { Github } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

const GithubButton = ({ className }) => {
    return (
        <Button className={cn('', className)}>
            <Github className="mr-1" />
            GitHub
        </Button>
    );
};

export default GithubButton;
