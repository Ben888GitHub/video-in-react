import './App.css';
import ReactPlayer from 'react-player/lazy';
// import whatsappVideo from "../public/"
import './Player.css';

function App() {
	return (
		<div className="App">
			<p className="text-3xl font-bold underline">Video in React</p>
			<br />

			<div className="w-full aspect-video">
				<ReactPlayer
					// style={{ margin: '0 auto' }}
					className="mx-auto"
					url="https://www.youtube.com/embed/r9jwGansp1E"
					// url="/videos/Screen Recording 2021-10-19 at 10.43.01 PM.mov"
					controls
					config={{
						youtube: {
							playerVars: {
								origin: 'https://www.youtube.com',
								showinfo: 1
							}
						}
					}}
					// className="w-16 h-9"
					// width="840px"`
					// height="560px"
					// allowFullScreen
				/>
			</div>
		</div>
	);
}

export default App;
