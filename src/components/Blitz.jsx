import React, { useEffect, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { WidthFull } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";

function Blitz() {
	const navigate = useNavigate();
	useEffect(() => {
			if (!localStorage.getItem("jwt")) {
				toast.error("You have to login!! To Access blitzkrieg  ❤️❤️");
				navigate("/register");
			}
		}, []);
	
	const handleGoogleAuth = () => {
		// Send a request to your backend to initiate Google authentication
		fetch("https://pbscbackend23.onrender.com/auth")
			.then((response) => response.json())
			.then((data) => {
				// Redirect the user to the Google authentication URL
				window.location.href = data.authUrl;
			})
			.catch((error) => {
				console.error("Error initiating Google authentication:", error);
			});
	};

	const isVideoPlayable = (video) => {
		// Check if the video URL is valid
		const videoUrl = `https://drive.google.com/uc?export=download&id=${video.id}`;

		// Create a new video element to check if it can be loaded
		const testVideo = document.createElement("video");
		testVideo.src = videoUrl;

		return testVideo.canPlayType("video/mp4") !== "";
	};

	const [videos, setVideos] = useState([]);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		// Make a request to your Node.js server to fetch videos
		axios
			.get("https://pbscbackend23.onrender.com/listVideos")
			.then((response) => {
				// Filter videos to only include playable ones
				const playableVideos = response.data.filter(isVideoPlayable);
				setVideos(playableVideos);
				setLoading(false); // Set loading to false when videos are fetched
			})
			.catch((error) => {
				console.error(error);

				toast.error(
					"Report At sameerahamad2003@gmail.com if videos aren't playable or any problem occurs"
				);
			});
	}, []);

	return (
		<div>
			<h2
				style={{
					fontSize: "30px",
					marginBottom: "3rem",
					marginTop: "3rem",
					fontWeight: "bolder",
					textAlign: "center",
				}}
			>
				Video List
			</h2>
			<div
				style={{
					marginLeft: "120px",
				}}
			>
				{videos.length > 0 ? (
					<ul>
						{videos.map((video) => (
							<li key={video.id}>
								<video controls
									style={{
										width: "600px",
										
								}}
								>
									<source
										src={`https://drive.google.com/uc?export=download&id=${video.id}`}
										type="video/mp4"
									/>
								</video>
								<p>{video.name}</p>
							</li>
						))}
					</ul>
				) : (
					<button onClick={handleGoogleAuth} className="btn btn-primary">Sign in with Google for blitzkrieg</button>
				)}
			</div>
		</div>
	);
}

export default Blitz;
