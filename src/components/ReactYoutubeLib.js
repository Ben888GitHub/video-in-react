import React from 'react';
import YouTube from 'react-youtube';

const ReactYoutubeLib = () => {
	const opts = {
		height: '390',
		width: '640',
		playerVars: {
			// https://developers.google.com/youtube/player_parameters
			autoplay: 1
		}
	};

	const pauseOrPlay = (e) => {
		e.target.pauseVideo();
	};

	return (
		<div className="mx-auto justify-center align-center">
			<YouTube videoId="2g811Eo7K8U" opts={opts} onReady={pauseOrPlay} />;
		</div>
	);
};

export default ReactYoutubeLib;
