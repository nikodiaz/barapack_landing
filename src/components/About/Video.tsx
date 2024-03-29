import ReactPlayer from 'react-player';
import video from '../../assets/video/Bara_Pack.mp4';
import { useState } from 'react';

const Video = () => {
	const [playing, setPlaying] = useState(true);

	return (
		<section className='flex justify-center w-full mt-12'>
			<ReactPlayer
				url={video}
				playing={playing}
				muted
				loop
				onEnded={() => setPlaying(false)}
			/>
		</section>
	);
};

export default Video;
