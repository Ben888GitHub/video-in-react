import React from 'react';
import { Player } from 'video-react';
import '../../node_modules/video-react/dist/video-react.css';

const VideoReactLib = () => {
	return (
		<Player
			playsInline
			poster="/assets/poster.png"
			src="/videos/Screen Recording 2021-10-19 at 10.43.01 PM.mov"
		/>
	);
};

export default VideoReactLib;
