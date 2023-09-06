import Image from 'next/image';
import { cn } from '@/lib/utils';

const MusicPlayer = ({ className }) => {
    return (
        <div className={cn('', className)}>
            <div className="relative w-80 h-80 mx-auto">
                <Image src="/sample-cover.jpg" fill alt="Music Cover" />
            </div>
            <div className="py-4 text-center">
                <h1 className="text-2xl font-medium pb-1">High Horse</h1>
                <p className="font-normal">Oceans Ate Alaska - Lost Isles</p>
            </div>
            <div>
                <audio controls autoPlay>
                    <source
                        src="https://file-examples.com/storage/fe235481fb64f1ca49a92b5/2017/11/file_example_MP3_700KB.mp3"
                        type="audio/mp3"
                    ></source>
                </audio>
            </div>
        </div>
    );
};

export default MusicPlayer;
