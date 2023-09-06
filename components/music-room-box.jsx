import Image from 'next/image';
import { cn } from '@/lib/utils';
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from '@/components/ui/card';
import { Flame } from 'lucide-react';

const MusicRoomBox = ({ className }) => {
    return (
        <Card className={cn('', className)}>
            <CardHeader>
                <CardTitle>All Rooms</CardTitle>
                <CardDescription className="flex items-center">
                    What's Hot <Flame size={20} />
                </CardDescription>
            </CardHeader>
            <CardContent>
                <div className="flex items-center justify-between space-x-4">
                    <div className="flex items-center space-x-4">
                        <div>
                            <p className="text-sm font-medium leading-none">
                                Sofia Davis
                            </p>
                            <p className="text-sm text-muted-foreground">
                                m@example.com
                            </p>
                        </div>
                    </div>
                </div>
            </CardContent>
        </Card>
    );
};

export default MusicRoomBox;
