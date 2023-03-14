import React from 'react';

const UsingIFrame = () => {
	return (
		<div>
			<iframe
				title="youtube-embed"
				src="https://www.youtube.com/embed/69V__a49xtw?enablejsapi=1"
				allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
				allowFullScreen
				// width={1000}
				// height={500}
				className="lg:w-[680px] lg:h-[470px] mx-auto"
			></iframe>
		</div>
	);
};

export default UsingIFrame;
