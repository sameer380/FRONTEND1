import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import "./Component.css"
function Component(props) {
 const [activeSection, setActiveSection] = useState("Vision & Mission");

 const handleSidebarClick = (sectionName) => {
		// Update the active section when a link is clicked
		setActiveSection(sectionName);

		// Show the toast message
		const message =
			"This Section is not fully developed. Report At syedahamad1976@gmail.com for more info.";
		toast.error(message);
 };
	return (
		<div className="upper">
			<header>
				<div
					className="p-5 text-center bg-image"
					style={{
						backgroundImage: `url(${props.src})`,
						height: "300px",
						backgroundSize: "cover",
						backgroundPosition: "center",
					}}
				>
					<div
						className="mask"
						style={{
							backgroundColor: "rgba(0, 0, 0, 0.6)",
							width: "100%",
							height: "100%",
						}}
					>
						<div className="d-flex justify-content-center align-items-center h-100">
							<div className="text-white">
								<h1
									className="mb-3"
									style={{
										fontSize: "2.5rem",
										fontWeight: "800",
									}}
								>
									{props.title}
								</h1>
								<h4 className="mb-3"></h4>
								{props.para}
								{/* <MDBBtn tag="a" outline size="lg">
                Call to action
              </MDBBtn> */}
							</div>
						</div>
					</div>
				</div>
			</header>

			<div className="MainDiv">
				<div className="d-flex" id="wrapper">
					<div className="bg-light border-right" id="sidebar-wrapper">
						<div className="sidebar-heading">{props.title} </div>
						<div className="list-group list-group-flush">
							<a
								href="#"
								class="list-group-item list-group-item-action bg-light"
								onClick={() => handleSidebarClick("Vision & Mission")}
							>
								Vision & Mission
							</a>
							<a
								href="#"
								class="list-group-item list-group-item-action bg-light"
								onClick={() => handleSidebarClick("Vision & Mission")}
							>
								Programs
							</a>
							<a
								href="#"
								class="list-group-item list-group-item-action bg-light"
								onClick={() => handleSidebarClick("Vision & Mission")}
							>
								Faculty
							</a>
							<a
								href="#"
								class="list-group-item list-group-item-action bg-light"
								onClick={() => handleSidebarClick("Vision & Mission")}
							>
								Department Timetable
							</a>
							<a
								href="#"
								class="list-group-item list-group-item-action bg-light"
								onClick={() => handleSidebarClick("Vision & Mission")}
							>
								Student Acheivements
							</a>
							<a
								href="#"
								class="list-group-item list-group-item-action bg-light"
								onClick={() => handleSidebarClick("Vision & Mission")}
							>
								Gallery
							</a>
							<a
								href="#"
								class="list-group-item list-group-item-action bg-light"
								onClick={() => handleSidebarClick("Vision & Mission")}
							>
								BOS
							</a>
							<a
								href="#"
								class="list-group-item list-group-item-action bg-light"
								onClick={() => handleSidebarClick("Vision & Mission")}
							>
								Videos
							</a>
							<a
								href="#"
								class="list-group-item list-group-item-action bg-light"
								onClick={() => handleSidebarClick("Vision & Mission")}
							>
								Publications
							</a>
							<a
								href="#"
								class="list-group-item list-group-item-action bg-light"
								onClick={() => handleSidebarClick("Vision & Mission")}
							>
								Best Practices
							</a>
							<a
								href="#"
								class="list-group-item list-group-item-action bg-light"
								onClick={() => handleSidebarClick("Vision & Mission")}
							>
								Infrastructure
							</a>
							<a
								href="#"
								class="list-group-item list-group-item-action bg-light"
								onClick={() => handleSidebarClick("Vision & Mission")}
							>
								Feedback
							</a>
						</div>
					</div>

					<div id="page-content-wrapper">
	
						<div
							className="container-fluid"
							style={{
								padding: "4%",
								borderRadius: "50px",
								textJustify:"revert"
							}}
						>
							<h1 className="mt-4">
								<i
									class="bi bi-translate"
									style={{
										fontSize: "2rem",
										marginRight: "1rem",
									}}
								></i>
								{props.title}
							</h1>
							<p style={{ marginTop: "30px" }}>
								<p></p>
								<p>{props.para1}</p>
								<p> {props.para2}</p>
								<p>{props.para3}</p>
								<p>{props.para4}</p>
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Component;
