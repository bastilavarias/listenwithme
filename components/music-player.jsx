import Image from 'next/image';
import { cn } from '@/lib/utils';
import { Card, CardDescription, CardHeader } from '@/components/ui/card';

const MusicPlayer = ({ className }) => {
    return (
        <Card className={cn('', className)}>
            <CardHeader>
                <CardDescription>Lounge Music player</CardDescription>
            </CardHeader>
        </Card>
    );
};

export default MusicPlayer;
