import React from 'react';
import Iframe from 'react-iframe';

const ReactIFrame = () => {
	return (
		<div>
			<h2>React IFrame</h2>
			<Iframe
				url="https://www.youtube-nocookie.com/embed/xDMP3i36naA"
				// width="640px"
				// height="320px"
				id=""
				className="lg:w-[640px] lg:h-[320px] mx-auto w-full  aspect-video"
				display="block"
				position="relative"
				title="react yt"
				overflow="hidden"
			/>
		</div>
	);
};

export default ReactIFrame;
