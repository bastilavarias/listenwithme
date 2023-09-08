import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from '@/components/ui/card';
import { cn } from '@/lib/utils';
import { Users, Settings, LogOut } from 'lucide-react';
import { AvatarFallback, AvatarImage, Avatar } from '@/components/ui/avatar';
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from '@/components/ui/accordion';
import GithubButton from '@/components/github-button';
import { Button } from '@/components/ui/button';

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

const RoomDetailsBox = ({ className }) => {
    return (
        <Card className={cn('', className)}>
            <CardHeader>
                <CardTitle className="flex">Room Details</CardTitle>
            </CardHeader>
            <CardContent>
                <Accordion type="single" collapsible>
                    <AccordionItem value="item-1">
                        <AccordionTrigger>
                            <div className="flex">
                                Members <Users className="pl-1" />
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
                                About <Settings className="pl-1" />
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
                <Button className="w-full bg-red-500 hover:bg-red-500">
                    <LogOut className="mr-1" />
                    Leave
                </Button>
            </CardFooter>
        </Card>
    );
};

export default RoomDetailsBox;
