import Image from 'next/image';
import MusicPlayer from '@/components/music-player';

export default function Home() {
    return (
        <main className="container py-12">
            <div className="grid grid-cols-3 gap-4">
                <div className="col-span-1">
                    <MusicPlayer />
                </div>
                <div className="col-span-auto">
                    <div>DJs here</div>
                    <div>Live chatbox</div>
                </div>
            </div>
        </main>
    );
}
