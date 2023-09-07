import { cn } from '@/lib/utils';
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from '@/components/ui/card';
import GithubButton from '@/components/github-button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

const MessageCard = ({ className }) => {
    return (
        <Card className={cn('border-none', className)}>
            <CardContent className="pl-0">
                <div className="flex items-center justify-between">
                    <div className="flex items-start space-x-4">
                        <Avatar>
                            <AvatarImage src="/sample-human.png" />
                            <AvatarFallback>JD</AvatarFallback>
                        </Avatar>
                        <div>
                            <div className="mb-2">
                                <p className="text-sm font-medium leading-none">
                                    Jane Doe
                                </p>
                                <small className="text-xs font-thin ">
                                    1 minute ago
                                </small>
                            </div>
                            <p className="text-sm text-muted-foreground">
                                Lorem ipsum dolor sit amet!
                            </p>
                        </div>
                    </div>
                </div>
            </CardContent>
        </Card>
    );
};

const ChatBox = ({ className }) => {
    return (
        <Card className={cn('', className)}>
            <CardHeader>
                <CardTitle>Lounge Chats</CardTitle>
                <CardDescription>33 users are here</CardDescription>
            </CardHeader>
            <CardContent className="h-56 mb-2" style={{ overflow: 'auto' }}>
                {[1, 2, 3].map((n) => (
                    <MessageCard key={n} />
                ))}
            </CardContent>
            <CardFooter>
                <div className="w-full">
                    <div className="text-center mb-3">
                        <p className="text-xs">
                            Sign in to access the Lounge Chats
                        </p>
                    </div>
                    <GithubButton className="w-full" />
                </div>
            </CardFooter>
        </Card>
    );
};

export default ChatBox;
