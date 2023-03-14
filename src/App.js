import './App.css';

import ReactPlayer from 'react-player/lazy';
// import whatsappVideo from "../public/"
import './Player.css';

// import UsingIFrame from './components/UsingIFrame';

function App() {
	// useEffect(() => {
	// 	window.YTConfig = {
	// 		host: 'https://www.youtube.com'
	// 	};
	// }, []);

	return (
		<div className="App">
			<p className="text-3xl font-bold underline">Video in React</p>
			<br />

			<div className="w-full aspect-video">
				<ReactPlayer
					// style={{ margin: '0 auto' }}
					className="mx-auto"
					url="https://www.youtube.com/embed/69V__a49xtw"
					// url="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
					// url="/videos/Screen Recording 2021-10-19 at 10.43.01 PM.mov"
					// url="https://player.twitch.tv/?channel=info24tv&parent=localhost:3000"
					// url="https://player.vimeo.com/video/Vm4tx1O9GAc"
					// url="https://www.youtube.com/watch?v=UVCP4bKy9Iw"
					// url="https://www.youtube.com/watch?v=ysz5S6PUM-U"
					controls
					// id="ytplayer"
					// autoPlay
					onPlay={() => console.log('video is playing')}
					// ref={playerRef}
					// config={{
					// 	youtube: {
					// 		playerVars: {
					// 			origin: 'https://www.youtube.com',
					// 			showInfo: 1,
					// 			enablejsapi: 1,
					// 			playsinline: 1
					// 			// autoplay: 1
					// 		}
					// 	}
					// }}
					// className="w-16 h-9"
					// width="840px"`
					// height="560px"
					// allowFullScreen
				/>
			</div>

			{/* <VideoReactLib /> */}
			{/* <ReactYoutubeLib /> */}
			{/* <Suspense fallback={'loading...'}>
				<UsingIFrame />
			</Suspense> */}
		</div>
	);
}

export default App;
