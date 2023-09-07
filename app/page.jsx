import Image from 'next/image';
import MusicPlayer from '@/components/music-player';
import ChatBox from '@/components/chat-box';
import MusicRoomBox from '@/components/music-room-box';

export default function Home() {
    return (
        <div className="grid grid-cols-3 gap-4">
            <div className="col-span-2">
                <MusicRoomBox />
            </div>
            <div className="col-span-1">
                <MusicPlayer className="mb-5" />
                <ChatBox />
            </div>
        </div>
    );
}
