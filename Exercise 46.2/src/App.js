import './App.css';
import { useState } from 'react';
import ReactPlayer from 'react-player';
import movieTrailer from 'movie-trailer';

function App() {

//Setting up the initial states using
// react hook 'useState"
const [video, setVideo] = useState("inception");
const [videoURL, setVideoURL] =
	useState("https://youtu.be/sa9l-dTv9Gk");

//A function to fetch the required URL
// and storing it inside the
// videoURL state variable
function handleSearch() {
	movieTrailer(video).then((res) => {
	setVideoURL(res);
	});
}
// Using 'ReactPlayer' component to display the video

return (

	<div className="App">
	<div className="search-box">
    <h1>
		<label>
			Search for any movies/shows:{ " " }
		</label></h1>
		<input type="text" onChange=
			{(e) => { setVideo(e.target.value) }} />

		<button onClick={()=>{handleSearch()}}>
			Search
		</button>
    	</div>

	<br></br><br></br>
    <br></br>
	<ReactPlayer url={videoURL} controls={true}/>
	</div>
);
}

export default App;

