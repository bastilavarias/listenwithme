import Image from 'next/image';
import { cn } from '@/lib/utils';
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from '@/components/ui/card';
import { Disc3 } from 'lucide-react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Slider } from '@/components/ui/slider';

const PlayerCard = ({ className }) => {
    return (
        <div
            className={cn(
                'flex items-center justify-between space-x-4',
                className
            )}
        >
            <div className="flex space-x-4">
                <Avatar className="rounded-none w-14 h-auto">
                    <AvatarImage src="/sample-cover.jpg" />
                    <AvatarFallback className="rounded-none w-14 h-14">
                        x
                    </AvatarFallback>
                </Avatar>
                <div className="height-full flex flex-col justify-between">
                    <h6 className="text-md font-medium leading-none mb-1">
                        Dont touch my Birdie
                    </h6>
                    <p className="text-xs text-muted-foreground mb-3">
                        Eraserheads
                    </p>
                    <Slider
                        className="text-white"
                        defaultValue={[33]}
                        max={100}
                    />
                </div>
            </div>
        </div>
    );
};

const MusicPlayer = ({ className }) => {
    return (
        <Card className={cn('', className)}>
            <CardHeader>
                <CardTitle>Lounge Music</CardTitle>
                <CardDescription className="flex items-center">
                    <span className="mr-1">Listening to</span>
                    <span className="font-medium underline mr-1">
                        bastilavarias
                    </span>
                    <Disc3 className="animate-spin" size={20} />
                </CardDescription>
            </CardHeader>
            <CardContent>
                <PlayerCard />
            </CardContent>
        </Card>
    );
};

export default MusicPlayer;
