import Image from 'next/image';
import { cn } from '@/lib/utils';
import { Card, CardDescription, CardHeader } from '@/components/ui/card';

const ChatBox = ({ className }) => {
    return (
        <Card className={cn('', className)}>
            <CardHeader>
                <CardDescription>Lounge Chat Box</CardDescription>
            </CardHeader>
        </Card>
    );
};

export default ChatBox;
