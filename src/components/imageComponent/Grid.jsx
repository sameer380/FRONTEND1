import React from "react";
import styled from "styled-components"; // Import styled from styled-components
import "./grid.css"
const GridContainer = styled.div`
	display: grid;
	grid-template-columns: repeat(auto-fit, minmax(17rem, 1fr));
	gap: 1rem;
	padding: 10rem;
	padding-top: 0;

`;

const Grid = ({ photos }) => {
	return (
		<>
			<h1
				style={{
					fontSize: "2.4rem",
					fontWeight: "600",
					textAlign: "center",
					marginBottom: "3rem",
					margin: "2rem 5rem",
				}}
			>
				😬 COLLEGE MEME GALLARY 🙃
			</h1>
			<GridContainer>
				{" "}
				{/* Use the styled component here */}

				{photos.map(({ photo, _id }) => (
					<div
					key={_id}
					className="grid__item"
					style={{
						height: "auto",
						borderRadius: "6px",
						boxShadow: "0 0px 10px rgba(0, 0, 0, 0.25)",
					}}
					>
					
						<img
							style={{
								width: "100%",
								height: "100%",
								objectFit: "cover",
								
						}}
						src={photo}
							// src={`https://pbscbackend.onrender.com/api/save/uploads/${photo}`}
							alt="grid_image"
					/>
					

					<img
						style={{
								width: "100%",
								height: "100%",
								objectFit: "cover",
								
							}}
						src={photo.secure_url} alt={photo.description} key={photo._id} />
					</div>
				))}
			</GridContainer>
		</>
	);
};

export default Grid;
