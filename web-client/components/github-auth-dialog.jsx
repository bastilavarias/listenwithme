'use client';

import React from 'react';
import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
} from '@/components/ui/alert-dialog';
import { Button } from '@/components/ui/button';
import { Github } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import Link from 'next/link';

const GithubAuthDialog = ({ open, onClick }) => {
    const openGitHubLoginOauthURL = () => {
        return `https://github.com/login/oauth/authorize?client_id=${
            import.meta.env.VITE_GITHUB_CLIENT_ID
        }`;
    };

    return (
        <AlertDialog open={open}>
            <AlertDialogContent>
                <AlertDialogHeader className="space-y-1">
                    <AlertDialogTitle className="text-2xl">
                        Login via GitHub
                    </AlertDialogTitle>
                    <AlertDialogDescription>
                        Enter your email below to create your account
                    </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogDescription className="w-full">
                    <div className="mb-4">
                        <Button variant="outline" className="w-full" asChild>
                            <Link href={openGitHubLoginOauthURL()}>
                                <Github className="mr-2 h-4 w-4" />
                                GitHub
                            </Link>
                        </Button>
                    </div>
                    <div className="relative">
                        <div className="absolute inset-0 flex items-center">
                            <span className="w-full border-t" />
                        </div>
                        <div className="relative flex justify-center text-xs uppercase">
                            <span className="bg-background px-2 text-muted-foreground">
                                Or login manually
                            </span>
                        </div>
                    </div>
                    <div className="py-4 space-y-4">
                        <div className="grid gap-2">
                            <Label htmlFor="email">Username</Label>
                            <Input />
                        </div>
                        <div className="grid gap-2">
                            <Label htmlFor="password">Password</Label>
                            <Input id="password" type="password" />
                        </div>
                        <Button className="bg-primary w-full text-white">
                            Login
                        </Button>
                    </div>
                </AlertDialogDescription>
                <AlertDialogFooter>
                    <div className="text-center text-sm w-full">
                        No account?
                        <span className="underline text-primary ml-1">
                            Register here
                        </span>
                    </div>
                </AlertDialogFooter>
            </AlertDialogContent>
        </AlertDialog>
    );
};

export default GithubAuthDialog;
