import React from "react";
import clgImage from "./Administration/clg.jpg";
import { MDBRow, MDBCol } from "mdb-react-ui-kit";
// import "./reach.css"
import ReactDOM from "react-dom";

export default function HowToReach() {
	return (
		<>
			{/* <h2 className="bg-white" style={{ textAlign: "center" }} size={{
				height:"100%"
			}}> HOW TO REACH </h2> */}

			<h1
				style={{
					paddingTop: "70px",
					marginBottom: "0",
					// paddingBottom: "50px",
					textAlign: "center",
					fontSize: "3rem",
					backgroundColor: "white",
				}}
			>
				{" "}
				I CAMPUS ROUTE
			</h1>

			<div
				className="bg-white"
				style={{
					display: "flex",
					justifyContent: "center",
					alignItems: "center",
					width: "99.1vw",
					height: "100vh",
				}}
			>
				<div>
					<img
						src={clgImage}
						alt="College"
						style={{
							maxWidth: "90%",
							marginLeft: "130px",
							marginBottom: "100px",
						}}
					/>
				</div>
			</div>
			<h1
				style={{
					marginBottom: "0",
					paddingBottom: "50px",
					textAlign: "center",
					fontSize: "3rem",
					backgroundColor: "white",
				}}
			>
				{" "}
				II MAP TO REACH
			</h1>
			<div
				className="bg-white"
				size={{
					minHeight: "100vh",
					maxWidth: "100vw",
				}}
				style={{
					display: "flex",
					justifyContent: "center",
					alignItems: "center",
					paddingBottom: "100px",
				}}
			>
				<iframe
					src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3825.4159537406467!2d80.64579807588309!3d16.50508532762087!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a35fab12587c72b%3A0x20aec0bac504143c!2sParvathaneni%20Brahmayya%20Siddhartha%20college%20of%20Arts%20%26%20Science!5e0!3m2!1sen!2sin!4v1692249005939!5m2!1sen!2sin"
					width="1250px"
					height="650"
					// style="border:0;"
					allowfullscreen=""
					loading="lazy"
					referrerpolicy="no-referrer-when-downgrade"
					style={{ marginLeft: "130px" }}
				></iframe>
			</div>
		</>
	);
}

{
}
