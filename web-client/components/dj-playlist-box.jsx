import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from '@/components/ui/card';
import { cn } from '@/lib/utils';
import { Youtube, Disc3 } from 'lucide-react';
import { AvatarFallback, AvatarImage, Avatar } from '@/components/ui/avatar';
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from '@/components/ui/accordion';
import GithubButton from '@/components/github-button';

const DJAvatar = () => {
    return (
        <div className="flex items-center">
            <Avatar className="w-8 h-8">
                <AvatarImage src="https://github.com/shadcn.png" />
                <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <span className="font-medium underline mx-1">bastilavarias</span>
        </div>
    );
};

const DJPlaylistBox = ({ className }) => {
    return (
        <Card className={cn('', className)}>
            <CardHeader>
                <CardTitle className="flex">DJs & Playlist</CardTitle>
            </CardHeader>
            <CardContent>
                <Accordion type="single" collapsible>
                    <AccordionItem value="item-1">
                        <AccordionTrigger>
                            <div className="flex">
                                DJs <Disc3 className="pl-1" />
                            </div>
                        </AccordionTrigger>
                        <AccordionContent>
                            <div className="space-y-3">
                                {[1, 2, 3].map((n) => (
                                    <DJAvatar key={n} />
                                ))}
                            </div>
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-2">
                        <AccordionTrigger>
                            <div className="flex">
                                Songs <Youtube className="pl-1" />
                            </div>
                        </AccordionTrigger>
                        <AccordionContent>
                            <div className="space-y-3">
                                {[1, 2, 3].map((n) => (
                                    <p key={n}>wew</p>
                                ))}
                            </div>
                        </AccordionContent>
                    </AccordionItem>
                </Accordion>
            </CardContent>
            <CardFooter>
                <div className="w-full">
                    <div className="text-center mb-3">
                        <p className="text-xs">Sign in to request a song</p>
                    </div>
                    <GithubButton className="w-full" />
                </div>
            </CardFooter>
        </Card>
    );
};

export default DJPlaylistBox;
