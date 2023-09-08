import ChatBox from '@/components/chat-box';
import MusicPlayer from '@/components/music-player';
import DJPlaylistBox from '@/components/dj-playlist-box';
import RoomDetailsBox from '@/components/room-details-box';

const RoomPage = ({ className }) => {
    return (
        <div className="grid grid-cols-3 gap-4">
            <div className="col-span-2">
                <ChatBox
                    height={796}
                    title="Tunog Kalye Chats"
                    subtitle="69 users here in Tunog Kalye"
                />
            </div>
            <div className="col-span-1">
                <MusicPlayer title="Listening to" className="mb-4" />
                <DJPlaylistBox className="mb-4" />
                <RoomDetailsBox />
            </div>
        </div>
    );
};

export default RoomPage;
