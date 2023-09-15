import { cn } from '@/lib/utils';
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from '@/components/ui/card';
import { Flame, Headphones } from 'lucide-react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

const ListItem = ({ className }) => {
    return (
        <div
            className={cn(
                'flex items-center justify-between space-x-4',
                className
            )}
        >
            <div className="flex space-x-4">
                <Avatar className="rounded-none w-20 h-auto">
                    <AvatarImage src="/sample-cover.jpg" />
                    <AvatarFallback className="rounded-none w-20 h-20">
                        x
                    </AvatarFallback>
                </Avatar>
                <div className="height-full flex flex-col justify-between">
                    <h6 className="text-xl font-medium leading-none mb-1">
                        Tunog Kalye
                    </h6>
                    <p className="text-md text-muted-foreground">
                        Magasin by Eraserheads
                    </p>
                    <div className="flex items-center">
                        <Headphones className="mr-1" />
                        <small className="text-sm pt-1">
                            4 Listeners by -{' '}
                            <span className="underline">xoxo123</span>
                        </small>
                    </div>
                </div>
            </div>
            <Button asChild>
                <Link href="/listen/room-name">Listen now</Link>
            </Button>
        </div>
    );
};

const MusicRoomBox = ({ className }) => {
    return (
        <Card className={cn('', className)}>
            <CardHeader>
                <CardTitle>All Rooms</CardTitle>
                <CardDescription className="flex items-center">
                    What's Hot <Flame />
                </CardDescription>
            </CardHeader>
            <CardContent>
                {Array.from({ length: 5 }, (value, index) => index).map((n) => (
                    <ListItem className="mb-5" key={n} />
                ))}
            </CardContent>
        </Card>
    );
};

export default MusicRoomBox;
