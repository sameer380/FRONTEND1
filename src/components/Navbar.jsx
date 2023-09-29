import React, { useState, useContext, useEffect } from "react";
import "../IMAGES/pbsc.jpg";
import "./Navbar.css";
import "bootstrap/dist/js/bootstrap.min.js";
import { LoginContext } from "../context/LoginContext";
import { Link, useNavigate } from "react-router-dom";
import PersonIcon from "@mui/icons-material/Person";
import { toast } from "react-toastify";
import AccessibleIcon from "@mui/icons-material/Accessible";
import SupervisorAccountIcon from "@mui/icons-material/SupervisorAccount";
import SchoolIcon from "@mui/icons-material/School";
import ResearchIcon from "@mui/icons-material/Science";

import {
	faFlaskVial,
	faVial,
	faAtom,
	faFrog,
	faRobot,
	faOm,
	faT,
	faA,
	faBusinessTime,
	faMoneyBillTrendUp,
	faBook,
	faLocationDot,
	faHouse,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDna } from "@fortawesome/free-solid-svg-icons";

function Navbar() {
	const { setModalOpen } = useContext(LoginContext);
	const navigate = useNavigate();

	return (
		<>
			<div
				className="APP"
				style={{
					zIndex: "1000",
					display: "flex",
					flexDirection: "row",
					boxShadow: "1px 0px 5px 2px rgba(0, 0, 0, 0.747)",

					width: "100%",
				}}
			>
				<div
					className="image"
					style={{
						margin: "0",
						height: "160px",
						// padding: "10px 50px",
						// boxShadow: "4px 4px 5px black",
						width: "10%",
					}}
				>
					<img
						src="https://res.cloudinary.com/drbzxsbop/image/upload/v1695891350/logo-sm-min_yyvez8.png"
						style={{
							// width: "200px",
							// height: "160px",
							width: "120px",
							height: "150px",
							// marginTop: "40px",
							// boxShadow: "3px 1px 2px 3px rgba(0, 0, 0, 0.185)",
						}}
					/>
				</div>

				<div className="nav_content">
					<div className="menu1" style={{ width: "100%" }}>
						<div>
							<marquee width="100%" behavior="scroll" direction="right">
								WELCOME TO PB SIDDHARTHA COLLEGE OF ART'S AND SCIENCE
							</marquee>
						</div>
						<div className="menu1Links">
							<Link
								to=""
								onClick={() => {
									toast.error(
										"This Section is Underdevelopment Report At sameerahamad2003@gmail.com"
									);
								}}
							>
								<span
									className="icon icon-accessible"
									onClick={() => {
										toast.error(
											"This Section is Underdevelopment Report At sameerahamad2003@gmail.com"
										);
									}}
								>
									{" "}
									<AccessibleIcon />
								</span>
								<span className="itext">RECRUITMENT</span>
							</Link>
							<Link
								to=""
								onClick={() => {
									toast.error(
										"This Section is Underdevelopment Report At sameerahamad2003@gmail.com"
									);
								}}
							>
								<span className="icon icon-supervisor-account">
									{" "}
									<SupervisorAccountIcon />
								</span>
								<span className="itext">IQAC</span>
							</Link>
							<Link
								to=""
								onClick={() => {
									toast.error(
										"This Section is Underdevelopment Report At sameerahamad2003@gmail.com"
									);
								}}
							>
								<span className="icon icon-school">
									{" "}
									<SchoolIcon />
								</span>
								<span className="itext">NIRF</span>
							</Link>
							<Link
								to=""
								onClick={() => {
									toast.error(
										"This Section is Underdevelopment Report At sameerahamad2003@gmail.com"
									);
								}}
							>
								<span className="icon icon-research">
									<ResearchIcon />
								</span>
								<span className="itext">RESEARCH</span>
							</Link>
							{localStorage.getItem("jwt") ? (
								<button
									onClick={() => {
										setModalOpen(true);
									}}
									className="logout"
								>
									LOGOUT
									<PersonIcon
										className="personi"
										style={{
											marginLeft: "8px",
											width: "28px",
											height:"28px"
										}}
									/>
								</button>
							) : (
								<button className="login"
									onClick={() => {
										navigate("/signin");
									}}
									style={{
										// borderRadius: "30px",
										padding: "9px 20px",
										// border: "none",
										// outline: "none",
										// color: "white",
										// fontFamily: "Arimo",
										backgroundColor: "#c03737",
									}}
								>
									LOGIN
								</button>
							)}
						</div>
					</div>

					<nav
						className="navbar navbar-expand-lg navbar-light  py-3"
						style={{
							backgroundColor: "white",
							zIndex: "1000",
							height: "100px",
						}}
					>
						<div
							className="container-fluid"
							style={{
								zIndex: "1000",
								width: "100%",
								paddingBottom: "10px",
							}}
						>
							{/* <a
								href="#"
								className="navbar-brand font-weight-bold d-block d-lg-none"
								style={{
									fontWeight: "600",
									fontFamily:"roboto"
								}}
							>
								MENU
							</a> */}
							<button
								className="navbar-toggler"
								type="button"
								data-bs-toggle="collapse"
								data-bs-target="#navbarSupportedContent"
								aria-controls="navbarSupportedContent"
								aria-expanded="false"
								aria-label="Toggle navigation"
							>
								<span className="navbar-toggler-icon"></span>
							</button>
							<div
								id="navbarSupportedContent"
								className="collapse navbar-collapse"
								style={{
									zIndex: 100,
								}}
							>
								<ul className="navbar-nav mx-auto flex-col-reverse bg-white">
									<li className="nav-item">
										<Link
											to="/"
											className="nav-link font-weight-bold text-uppercase"
										>
											HOME
										</Link>
									</li>

									<li className="nav-item dropdown megamenu">
										<a
											id="megamneu"
											href="#"
											id="dropdownMenuButton1"
											data-bs-toggle="dropdown"
											aria-expanded="false"
											className="nav-link dropdown-toggle font-weight-bold text-uppercase dropdown-toggle"
										>
											ABOUT US
										</a>
										<div
											aria-labelledby="dropdownMenuButton1"
											className="dropdown-menu border-0 p-0 m-0"
										>
											<div className="container">
												<div
													className="row abt bg-white rounded-0 m-0 shadow-lg flex flex-col"
													style={{
														borderTop: "3px solid #a80303",

														display: "flex",
														flexDirection: "row",
													}}
												>
													<div
														className="col-lg-7 col-xl-8"
														style={{
															width: "340px",
														}}
													>
														<div
															className="p-4"
															style={{
																width: "340px",
															}}
														>
															<div
																className="row"
																style={{
																	width: "400px",
																	display: "flex",
																	flexDirection: "column",
																}}
															>
																<div className="col-lg-6 mb-4">
																	<Link
																		className="font-weight-bold"
																		to="/profile"
																	>
																		{" "}
																		<i
																			class="bi bi-person-circle"
																			style={{
																				fontSize: "20px",
																				marginRight: "10px",
																			}}
																		></i>
																		PROFILE
																	</Link>
																</div>
																<div
																	className="col-lg-6 mb-4"
																	style={{ width: "240px" }}
																>
																	<h6 className="font-weight-bold text-uppercase">
																		<i
																			class="bi bi-person-workspace"
																			style={{
																				fontSize: "20px",
																				marginRight: "10px",
																			}}
																		></i>
																		Administration
																	</h6>
																	<ul
																		className="list-unstyled "
																		style={{
																			display: "flex",
																			flexDirection: "column",
																			marginLeft: "40px",
																			width: "250px",
																		}}
																	>
																		<li className="nav-item">
																			<Link
																				to="/principal"
																				className="nav-link text-small pb-0 "
																			>
																				<i class="bi bi-person-heart"></i>
																				Principal
																			</Link>
																		</li>
																		<li className="nav-item">
																			<Link
																				to="/viceprincipal"
																				className="nav-link text-small pb-0 "
																			>
																				<i class="bi bi-person-hearts"></i> Vice
																				Principal
																			</Link>
																		</li>
																		<li className="nav-item">
																			<Link
																				to="dean"
																				className="nav-link text-small pb-0 "
																			>
																				<i class="bi bi-person-fill-gear"></i>{" "}
																				Dean
																			</Link>
																		</li>
																		<li className="nav-item">
																			<Link
																				to="/IQAC"
																				className="nav-link text-small pb-0 "
																			>
																				<i class="bi bi-person-vcard"></i> IQAC
																				Coordinator
																			</Link>
																		</li>
																		<li className="nav-item">
																			<Link
																				to="/financeofficer"
																				className="nav-link text-small pb-0 "
																			>
																				<i class="bi bi-file-person-fill"></i>
																				Finance Officer
																			</Link>
																		</li>
																	</ul>
																</div>
																<div className="col-lg-6 mb-4">
																	<Link
																		className="font-weight-bold text-uppercase"
																		onClick={(e) => {
																			toast.error(
																				"This Section is Under Development"
																			);
																			e.preventDefault();
																		}}
																	>
																		<FontAwesomeIcon
																			icon={faLocationDot}
																			style={{
																				fontSize: "20px",
																				marginRight: "10px",
																			}}
																		/>
																		Campus View
																	</Link>
																</div>
																<div className="col-lg-6 mb-4">
																	<Link
																		className="font-weight-bold text-uppercase"
																		to="howtoreach"
																	>
																		<i
																			class="bi bi-question-circle-fill"
																			style={{
																				fontSize: "20px",
																				marginRight: "10px",
																			}}
																		></i>
																		How To Reach
																	</Link>
																</div>
																<div className="col-lg-6 mb-4">
																	<Link
																		className="font-weight-bold text-uppercase"
																		onClick={(e) => {
																			toast.error(
																				"This Section is Under Development"
																			);
																			e.preventDefault();
																		}}
																	>
																		<i
																			class="bi bi-envelope-paper-fill"
																			style={{
																				fontSize: "20px",
																				marginRight: "10px",
																			}}
																		></i>
																		RTI
																	</Link>
																</div>
															</div>
														</div>
													</div>

													<div
														className="col-lg-5 col-xl-4 px-0 d-none d-lg-block megaimaga"
														style={{
															display: "flex",
															flexDirection: "row",
															marginLeft: "80px",
														}}
													>
														<div
															className="video-container"
															style={{
																width: "600px",
																marginTop: "30px",
															}}
														>
															<h4 style={{ fontWeight: "bold" }}>
																{" "}
																Latest Video{" "}
															</h4>
															<video
																id="cc1"
																controls
																muted
																loop
																playsInline
																autoPlay
																style={{
																	width: "600px",
																	marginTop: "16px",
																}}
															>
																<source
																	src="https://res.cloudinary.com/dagab1ofs/video/upload/v1695899653/Untitled_Video_-_Made_With_Clipchamp_3_tjgodo.mp4"
																	type="video/mp4"
																	style={{ width: "600px" }}
																/>
															</video>
														</div>

														<div
															className="about"
															style={{
																marginTop: "30px",
																marginBottom: "30px",
															}}
														>
															<h4 style={{ fontWeight: "bold" }}> ABOUT </h4>
															<p
																style={{
																	marginTop: "20px",
																}}
															>
																Parvathaneni Brahmayya Siddhartha College of
																Arts & Science is the first offspring of
																"Siddhartha Academy of General & Technical
																Education". In the year 1975, the college was
																started with 200 students and 15 faculty members
																with B.A. and B.Com.
															</p>
														</div>
													</div>
												</div>
											</div>
										</div>
									</li>

									<li className="nav-item">
										<Link
											to="ugpapers"
											className="nav-link font-weight-bold text-uppercase"
										>
											PAPERS
										</Link>
									</li>
									<li className="nav-item">
										<Link
											to="admission"
											className="nav-link font-weight-bold text-uppercase"
										>
											Admissions
										</Link>
									</li>
									<li className="nav-item">
										<Link
											to="https://www.almashines.com/pbscas"
											className="nav-link font-weight-bold text-uppercase"
										>
											ALUMINI
										</Link>
									</li>

									<li className="nav-item dropdown megamenu">
										<a
											id="megamneu"
											href="#"
											id="dropdownMenuButton1"
											data-bs-toggle="dropdown"
											aria-expanded="false"
											className="nav-link dropdown-toggle font-weight-bold text-uppercase dropdown-toggle"
										>
											DEPARTMENT
										</a>
										<div
											aria-labelledby="dropdownMenuButton1"
											className="dropdown-menu border-0 p-0 m-0"
										>
											<div className="container">
												<div
													className="row dept rounded-0 m-0 shadow-sm"
													style={{
														display: "flex",
														backgroundColor: "#ffffff",
														flexDirection: "row",
														width: "100%",
														height: "550px",
														borderTop: "3px solid #a80303",
													}}
												>
													<div
														className="col-lg-7 col-xl-8"
														style={{ display: "flex" }}
													>
														<div
															className="p-4"
															style={{
																display: "flex",
																flexDirection: "row",
															}}
														>
															<div
																className="row"
																style={{
																	width: "900px",
																	height: "300px",
																}}
															>
																<div
																	className="col-lg-6 mb-1"

																	// style={{ width: "140px" }}
																>
																	<h6 className="font-weight-bold text-uppercase">
																		<i
																			class="bi bi-translate"
																			style={{
																				fontSize: "2rem",
																				marginRight: "1rem",
																			}}
																		></i>{" "}
																		LANGUAGE
																	</h6>
																	<ul
																		className="list-unstyled"
																		style={{
																			display: "flex",
																			flexDirection: "column",
																		}}
																	>
																		<li className="nav-item">
																			<Link
																				to="/department/english"
																				className="nav-link text-small pb-0 "
																			>
																				<FontAwesomeIcon
																					icon={faA}
																					style={{
																						marginRight: ".5rem",
																					}}
																				/>
																				English
																			</Link>
																		</li>
																		<li className="nav-item">
																			<Link
																				to="/department/hindi"
																				className="nav-link text-small pb-0 "
																			>
																				<FontAwesomeIcon
																					icon={faOm}
																					style={{
																						marginRight: ".5rem",
																					}}
																				/>
																				Hindi
																			</Link>
																		</li>
																		<li className="nav-item">
																			<Link
																				to="department/telegu"
																				className="nav-link text-small pb-0 "
																			>
																				<FontAwesomeIcon
																					icon={faT}
																					style={{
																						marginRight: ".5rem",
																					}}
																				/>{" "}
																				Telegu
																			</Link>
																		</li>
																	</ul>
																</div>
																<div className="col-lg-6 mb-1">
																	<h6 className="font-weight-bold text-uppercase">
																		<FontAwesomeIcon
																			icon={faFlaskVial}
																			style={{
																				fontSize: "2rem",
																				marginRight: "1rem",
																			}}
																		/>
																		SCIENCE
																	</h6>
																	<ul className="list-unstyled">
																		<li className="nav-item">
																			<Link
																				to="department/botany"
																				className="nav-link text-small pb-0 "
																			>
																				<FontAwesomeIcon
																					icon={faDna}
																					style={{
																						marginRight: ".5rem",
																					}}
																				/>
																				Botany
																			</Link>
																		</li>
																		<li className="nav-item">
																			<Link
																				to="department/chemestry"
																				className="nav-link text-small pb-0 "
																			>
																				<FontAwesomeIcon
																					icon={faVial}
																					style={{
																						marginRight: ".5rem",
																					}}
																				/>
																				Chemestry
																			</Link>
																		</li>
																		<li className="nav-item">
																			<Link
																				to="department/computerscience"
																				className="nav-link text-small pb-0 "
																			>
																				<i class="bi bi-cpu"></i>Computer
																				Science
																			</Link>
																		</li>
																		<li className="nav-item">
																			<Link
																				to="department/math"
																				className="nav-link text-small pb-0 "
																			>
																				<i class="bi bi-calculator-fill"></i>
																				Mathmetics
																			</Link>
																		</li>
																		<li className="nav-item">
																			<Link
																				to="department/stat"
																				className="nav-link text-small pb-0 "
																			>
																				<i class="bi bi-percent"></i>
																				Statistics
																			</Link>
																		</li>
																		<li className="nav-item">
																			<Link
																				to="department/physics"
																				className="nav-link text-small pb-0 "
																			>
																				<FontAwesomeIcon
																					icon={faAtom}
																					style={{
																						marginRight: ".5rem",
																					}}
																				/>
																				Physics
																			</Link>
																		</li>
																		<li className="nav-item">
																			<Link
																				to="department/zoology"
																				className="nav-link text-small pb-0 "
																			>
																				<FontAwesomeIcon
																					icon={faFrog}
																					style={{
																						marginRight: ".5rem",
																					}}
																				/>
																				Zoology
																			</Link>
																		</li>
																		<li className="nav-item">
																			<Link
																				to="department/electronics"
																				className="nav-link text-small pb-0 "
																			>
																				<FontAwesomeIcon
																					icon={faRobot}
																					style={{
																						marginRight: ".5rem",
																					}}
																				/>
																				Electronics
																			</Link>
																		</li>
																	</ul>
																</div>
																<div className="col-lg-6 mb-1">
																	<h6 className="font-weight-bold text-uppercase">
																		<i
																			class="bi bi-journal-bookmark-fill"
																			style={{ fontSize: "2rem" }}
																		>
																			{" "}
																		</i>
																		ARTS AND COMMERCE
																	</h6>
																	<ul className="list-unstyled">
																		<li className="nav-item">
																			<Link
																				to="department/commerce"
																				className="nav-link text-small pb-0 "
																			>
																				<FontAwesomeIcon
																					icon={faBook}
																					style={{
																						marginRight: ".5rem",
																					}}
																				/>{" "}
																				Commerce
																			</Link>
																		</li>
																		<li className="nav-item">
																			<Link
																				to="department/economics"
																				className="nav-link text-small pb-0 "
																			>
																				<FontAwesomeIcon
																					icon={faMoneyBillTrendUp}
																					style={{
																						marginRight: ".5rem",
																					}}
																				/>
																				Economics
																			</Link>
																		</li>
																		<li className="nav-item">
																			<Link
																				to="department/business"
																				className="nav-link text-small pb-0 "
																			>
																				<FontAwesomeIcon
																					icon={faBusinessTime}
																					style={{
																						marginRight: ".5rem",
																					}}
																				/>{" "}
																				Business Administration
																			</Link>
																		</li>
																	</ul>
																</div>
															</div>
														</div>
													</div>
													<div class="col-lg-5 col-xl-4 px-0 d-none d-lg-block megaimaga"></div>
												</div>
											</div>
										</div>
									</li>

									<li className="nav-item dropdown megamenu">
										<a
											href="#"
											id="dropdownMenuButton1"
											data-bs-toggle="dropdown"
											aria-expanded="false"
											className="nav-link dropdown-toggle font-weight-bold text-uppercase dropdown-toggle"
										>
											ACTIVITY
										</a>

										<div
											aria-labelledby="dropdownMenuButton1"
											className="dropdown-menu border-0 p-0 m-0"
										>
											<div
												className="container actC"
												style={{
													backgroundColor: "#ffffff",
												}}
											>
												<div
													className="row rounded-0 m-0 shadow-sm actR"
													style={{
														right: "200px",
														display: "flex",
														float: "right",
														backgroundColor: "#ffffff",
														flexDirection: "row",
														width: "500px",
														height: "auto",
														borderTop: "3px solid #a80303",
													}}
												>
													<ul
														className="list-unstyled"
														style={{
															display: "flex",
															flexDirection: "column",
														}}
													>
														<li className="nav-item">
															<Link
																to="/api/get"
																className="nav-link text-small pb-0 "
															>
																MEME GALLARY
															</Link>
														</li>
														<li className="nav-item">
															<Link
																to="/blitz"
																className="nav-link text-small pb-0 "
															>
																Blitzkreig Videos
															</Link>
														</li>
													</ul>
												</div>
											</div>
										</div>
									</li>
									<li className="nav-item">
										<Link
											to="/gallary"
											className="nav-link font-weight-bold text-uppercase"
										>
											GALLARY
										</Link>
									</li>
									<li className="nav-item">
										<Link
											to="/results"
											className="nav-link font-weight-bold text-uppercase"
										>
											RESULTS
										</Link>
									</li>
									<li className="nav-item">
										<Link
											to="contactus"
											className="nav-link font-weight-bold text-uppercase"
										>
											CONTACT
										</Link>
									</li>
								</ul>
							</div>
						</div>
					</nav>
					{/* </div> */}
				</div>
			</div>
		</>
	);
}

// export default App;

export default Navbar;
