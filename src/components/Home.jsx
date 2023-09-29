import React, { useState, useEffect, useRef } from "react";
import "./Home.css";
import HomeCard from "./HomeCard";
import cardsData from "./data";
import ManIcon from "@mui/icons-material/Man";
import MenuBookRoundedIcon from "@mui/icons-material/MenuBookRounded";
import SchoolIcon from "@mui/icons-material/School";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";
// import KeenSlider from "https://cdn.jsdelivr.net/npm/keen-slider@6.8.6/+esm";
import { Link } from "react-router-dom";

// import "../collegeV.mp4"
function Home() {
	const keenSliderRef = useRef(null);
	const [showAllCards, setShowAllCards] = useState(false);
	const toggleShowCards = () => {
		setShowAllCards(!showAllCards);
	};

	const numCardsToShow = showAllCards ? cardsData.length : 8;


		return (
			<>
				<div
					className="main"
					initial="initial"
					animate="animate"
				
				>
					<div className="semi-container">
						<div className="container1">
							<video autoPlay muted loop playsInline id="video-banner">
								<source
									
									
									src="https://res.cloudinary.com/dagab1ofs/video/upload/v1695899653/Untitled_Video_-_Made_With_Clipchamp_3_tjgodo.mp4"
									type="video/mp4"
								/>
								Your browser does not support the video tag.
							</video>

							<div className="overlay"></div>

							<div
								id="content"
								style={{
									marginTop: "200px",
								}}
							>
								{/* <h4>"Start Your Story Here"</h4> */}
								<h4>
									<i
										class="fa fa-quote-left"
										style={{
											fontSize: "3.2rem",
											position: "absolute",
											top: "1px",
									
										}}
									/>{" "}
									&nbsp; &nbsp;Your{" "}
									<span className="text-red-600"> Journey </span>{" "}
									<span
									style={{
										backgroundColor: "#9c0c0c7d",
										padding: "2px 10px",
									}}
									>
										Begins Here</span><i
										class="fa fa-quote-right"
										style={{
											fontSize: "3.2rem",
											position: "absolute",
											marginRight:"320px",
											top: "1px",
					
										}}
									/>
								</h4>
								{/* <h4 style={{ color: "red" }}> With The Best Vibes </h4> */}
								<div className="bttn-row flex mt-8">
									<a className="bttn bttn--primary bg-pink-600">Explore</a>
									<a className="bttn bttn--primary bg-pink-600">Learn</a>
									<a className="bttn bttn--primary bg-pink-600">Grow</a>
								</div>
							</div>
						</div>
					</div>

					<div className="popup">
						<section
							className="rounded-3xl shadow-2xl mt-2"
							style={{
								width: "240px",
								height:"230px",
								position: "absolute",
								top: "160px",
								right: "10px",
								backgroundColor: "#fff",
							}}
						>
							<div className="p-8 text-center sm:p-6 ">
								<p className="text-sm font-extrabold uppercase tracking-widest text-pink-500">
									Admission
								</p>

								<h2 className="mt-6 text-3xl font-bold">
									ADMISSIONS ARE OPENED
								</h2>

								<Link
									className="mt-3 inline-block w-full rounded-full bg-pink-700 py-3 text-sm font-bold text-white shadow-xl"
									to="/admission"
								>
									OPEN
								</Link>
							</div>
						</section>
					</div>

					<div
						className="header bg-white"
						style={{
							width: "100%",
							height: "100%",
						}}
					>
						<div className="heading" style={{ marginTop: "12rem" }}>
							<h1 className="title2 text-center" style={{ marginTop: "20rem" }}>
								{" "}
								COURSE <span className="text-red-700">OFFRED</span>{" "}
							</h1>
						</div>
					   <div
							className="card-container"
							style={
								{
									// width: "100%",
									// height: "100%",
									// display: "flex",
									// justifyContent: "center",
									// alignItems: "center",
								}
							}
						>
							 <div className="cards2">
								<div className="card-container">
									<div
										className={`cards2 ${
											showAllCards ? "show-more-cards" : "show-less-cards"
										}`}
									>
										{cardsData.slice(0, numCardsToShow).map((card, index) => (
											<HomeCard
												key={index}
												srcI={card.srcI}
												title={card.title}
												dep={card.dep}
											/>
										))}
									</div>
								</div>
							</div> 
						</div>
						<div className="show-more-button" style={{ textAlign: "center" }}>
							<button onClick={toggleShowCards}>
								{showAllCards ? "Show Less" : "Show More"}
							</button>
						</div> 
					</div>

					<div className="numbers">
						<section className="bg-gray-50 p-10">
							<div className="mx-auto max-w-screen-xl px-4 py-12 sm:px-6 md:py-16 lg:px-8">
								<div className="mx-auto max-w-3xl text-center">
									<h2 className=" text-3xl font-bold text-gray-900 sm:text-4xl ">
										PB SIDDHARTHA CURRENT STATUS
									</h2>

									<p className="mt-4 text-gray-500 sm:text-xl">
										Below is the information about the college analysed data of
										current number. The data represents the Total number of
										student and teacher and courses exist. And also projects the
										Academic acheivements of our campus.
									</p>
								</div>

								<div className="mt-8 sm:mt-14">
									<dl className="grid grid-cols-1 gap-4 sm:grid-cols-4">
										<div className="flex flex-col rounded-lg bg-blue-100 px-4 py-8 text-center">
											<dt className="order-last text-lg font-medium text-gray-500">
												Happy Students <br />{" "}
												<ManIcon
													style={{
														fontSize: "50px",
													}}
												/>
											</dt>

											<dd className="text-4xl font-extrabold text-blue-600 md:text-5xl">
												5,248
											</dd>
										</div>

										<div className="flex flex-col rounded-lg bg-blue-100 px-4 py-8 text-center">
											<dt className="order-last text-lg font-medium text-gray-500">
												OUR COURSES <br />
												<MenuBookRoundedIcon
													style={{
														fontSize: "50px",
													}}
												/>
											</dt>

											<dd className="text-4xl font-extrabold text-blue-600 md:text-5xl">
												675
											</dd>
										</div>

										<div className="flex flex-col rounded-lg bg-blue-100 px-4 py-8 text-center">
											<dt className="order-last text-lg font-medium text-gray-500">
												OUR TEACHERS <br />{" "}
												<SchoolIcon
													style={{
														fontSize: "50px",
													}}
												/>
											</dt>

											<dd className="text-4xl font-extrabold text-blue-600 md:text-5xl">
												248
											</dd>
										</div>

										<div className="flex flex-col rounded-lg bg-blue-100 px-4 py-8 text-center">
											<dt className="order-last text-lg font-medium text-gray-500">
												Award Won <br />{" "}
												<EmojiEventsIcon
													style={{
														fontSize: "50px",
													}}
												/>
											</dt>

											<dd className="text-4xl font-extrabold text-blue-600 md:text-5xl">
												24
											</dd>
										</div>
									</dl>
								</div>
							</div>
						</section>
					</div>

					<div className="test mt-36">
						<section>
							<div className="mx-auto max-w-screen-2xl px-4 py-16 sm:px-6 lg:px-8">
								<div className="grid grid-cols-1 lg:h-screen lg:grid-cols-2">
									<div className="relative z-10 lg:py-16">
										<div className="relative h-64 sm:h-80 lg:h-full">
											<img
												alt="College Image"
												src="https://res.cloudinary.com/drbzxsbop/image/upload/v1695891347/homeClg-min_xknlsg.jpg"
												className="absolute inset-0 h-full w-full object-cover"
											/>
										</div>
									</div>

									<div className="relative flex items-center bg-gray-100">
										<span className="hidden lg:absolute lg:inset-y-0 lg:-start-16 lg:block lg:w-16 lg:bg-gray-100"></span>
										<div className="p-8 sm:p-16 lg:p-24">
											<h2 className="title3 text-2xl font-bold sm:text-3xl">
												PARVATHANENI BRAHAMAYYA SIDDHARTHA COLLEGE OF ARTS &
												SCIENCE
											</h2>

											<p
												className="mt-4 text-gray-600"
												style={{
													fontFamily: "sans-serif",
													fontSize: "1rem",
												}}
											>
												PB Siddhartha College is located in Vijayawada, Andhra
												Pradesh, India. It is a well-known educational
												institution in the city.The college is situated in the
												Siddhartha Nagar area of Vijayawada, which is a
												prominent educational and residential locality in the
												city. It offers a variety of undergraduate and
												postgraduate courses in arts, science, commerce, and
												other fields. The exact location may vary slightly, so
												it's a good idea to use a map or navigation app for
												precise directions if you plan to visit the college.
											</p>

											<Link
												to="/contactus"
												className="mt-8 inline-block rounded border border-indigo-600 bg-indigo-600 px-12 py-3 text-sm font-medium text-white hover:bg-transparent hover:text-indigo-600 focus:outline-none focus:ring active:text-indigo-500"
											>
												Get in Touch
											</Link>
										</div>
									</div>
								</div>
							</div>
						</section>
					</div>

					<div className="testimonials">


						<link
							href="https://cdn.jsdelivr.net/npm/keen-slider@6.8.6/keen-slider.min.css"
							rel="stylesheet"
						/>

						<link
							href="https://cdn.jsdelivr.net/npm/keen-slider@6.8.6/keen-slider.min.css"
							rel="stylesheet"
						/>
					
						<section className="bg-white">
							<div className="mx-auto max-w-screen-xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
								<h2 className="text-center text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
									Read What Our Students Says
								</h2>

								<div className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-3 md:gap-8">
									<blockquote className="rounded-lg bg-gray-50 p-6 shadow-sm sm:p-8">
										<div className="flex items-center gap-4">
											<img
												alt="Man"
												src="https://res.cloudinary.com/drbzxsbop/image/upload/v1695891817/surya_durkyw.png"
												className="h-14 w-14 rounded-full object-cover"
											/>

											<div>
												<div className="flex justify-center gap-0.5 text-green-500">
													<svg
														xmlns="http://www.w3.org/2000/svg"
														className="h-5 w-5"
														viewBox="0 0 20 20"
														fill="currentColor"
													>
														<path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
													</svg>
													<svg
														xmlns="http://www.w3.org/2000/svg"
														className="h-5 w-5"
														viewBox="0 0 20 20"
														fill="currentColor"
													>
														<path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
													</svg>
													<svg
														xmlns="http://www.w3.org/2000/svg"
														className="h-5 w-5"
														viewBox="0 0 20 20"
														fill="currentColor"
													>
														<path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
													</svg>
												</div>

												<p className="mt-0.5 text-lg font-medium text-gray-900">
													SURYA TEJA
												</p>
											</div>
										</div>

										<p className="mt-4 text-gray-700">
											Everything is Normal, Facilities are average,
											Infrastructure is ok, Teaching is also ok, College life is
											average.. One day study is impossibe for exams here.. so
											better to Read before and Teaching Staff is sweet..
										</p>
									</blockquote>

									<blockquote className="rounded-lg bg-gray-50 p-6 shadow-sm sm:p-8">
										<div className="flex items-center gap-4">
											<img
												alt="Man"
												src="https://res.cloudinary.com/drbzxsbop/image/upload/v1695891816/pavan_rz0xsx.png"
												className="h-14 w-14 rounded-full object-cover"
											/>

											<div>
												<div className="flex justify-center gap-0.5 text-green-500">
													<svg
														xmlns="http://www.w3.org/2000/svg"
														className="h-5 w-5"
														viewBox="0 0 20 20"
														fill="currentColor"
													>
														<path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
													</svg>
													<svg
														xmlns="http://www.w3.org/2000/svg"
														className="h-5 w-5"
														viewBox="0 0 20 20"
														fill="currentColor"
													>
														<path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
													</svg>
													<svg
														xmlns="http://www.w3.org/2000/svg"
														className="h-5 w-5"
														viewBox="0 0 20 20"
														fill="currentColor"
													>
														<path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
													</svg>
													<svg
														xmlns="http://www.w3.org/2000/svg"
														className="h-5 w-5"
														viewBox="0 0 20 20"
														fill="currentColor"
													>
														<path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
													</svg>
												</div>

												<p className="mt-0.5 text-lg font-medium text-gray-900">
													PAVAN KUMAR
												</p>
											</div>
										</div>

										<p className="mt-4 text-gray-700">
											I really Love this collge Since I attend Regularly To
											College I can say Best college Ever. The placement cell
											strives to connect students with job opportunities and has
											a good track record of placements
										</p>
									</blockquote>

									<blockquote className="rounded-lg bg-gray-50 p-6 shadow-sm sm:p-8">
										<div className="flex items-center gap-4">
											<img
												alt="Man"
												src="https://res.cloudinary.com/drbzxsbop/image/upload/v1695891822/naveen_ld7l1p.png"
												className="h-14 w-14 rounded-full object-cover"
											/>

											<div>
												<div className="flex justify-center gap-0.5 text-green-500">
													<svg
														xmlns="http://www.w3.org/2000/svg"
														className="h-5 w-5"
														viewBox="0 0 20 20"
														fill="currentColor"
													>
														<path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
													</svg>
													<svg
														xmlns="http://www.w3.org/2000/svg"
														className="h-5 w-5"
														viewBox="0 0 20 20"
														fill="currentColor"
													>
														<path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
													</svg>
													<svg
														xmlns="http://www.w3.org/2000/svg"
														className="h-5 w-5"
														viewBox="0 0 20 20"
														fill="currentColor"
													>
														<path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
													</svg>
													<svg
														xmlns="http://www.w3.org/2000/svg"
														className="h-5 w-5"
														viewBox="0 0 20 20"
														fill="currentColor"
													>
														<path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
													</svg>
													<svg
														xmlns="http://www.w3.org/2000/svg"
														className="h-5 w-5"
														viewBox="0 0 20 20"
														fill="currentColor"
													>
														<path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
													</svg>
												</div>

												<p className="mt-0.5 text-lg font-medium text-gray-900">
													NAVEEN CHUDARY
												</p>
											</div>
										</div>

										<p className="mt-4 text-gray-700">
											The college campus is well-maintained, The college
											organizes seminars, workshops, and guest lectures to
											enhance students' exposure to real-world scenariosits
											focus on character development along with academics
										</p>
									</blockquote>
								</div>
							</div>
						</section> 
					</div>
				</div>
			</>
		);
	
	}
		
export default Home;
