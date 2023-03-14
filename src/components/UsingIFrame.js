import React from 'react';

const UsingIFrame = () => {
	return (
		<div>
			<iframe
				title="Embedding Youtube"
				src="https://www.youtube.com/embed/69V__a49xtw?enablejsapi=1&origin=https://benevolent-cannoli-2294ec.netlify.app//&video-id=69V__a49xtw"
				allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
				allowFullScreen
				sandbox="allow-same-origin allow-forms allow-popups allow-scripts allow-presentation"
				// seamless
				// width={1000}
				// height={500}
				className="lg:w-[680px] lg:h-[470px] mx-auto w-full aspect-video"
			></iframe>
		</div>
	);
};

export default UsingIFrame;
