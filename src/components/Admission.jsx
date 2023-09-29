import React from "react";
import { toast } from "react-toastify";
import "./Admission.css"
function Admission() {
	return (
		<>
			<div
				className="AdmimContainer"
				style={{
					backgroundImage:
						"url(https://res.cloudinary.com/drbzxsbop/image/upload/v1695891338/g5-min_kmmnvg.jpg)",
					backgroundSize: "cover",
					backgroundRepeat: "no-repeat",
				}}
			>
				<p className="mb-10">.</p>
				<div
					class="p-9 border border-gray-300 sm:rounded-md bg mb-16"
					style={{
						maxWidth: "600px",
						height: "auto",
						margin: "0 auto",
						borderRadius: "10px",
						// boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px"
						boxShadow:
							"rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px",
						marginBottom: "100px",
						backgroundColor: "#b81b1bce",
					}}
				>
					<h1
						className="text-violet-400 text-center p-4 mb-2"
						style={{
							fontFamily: "sans-serif",
							fontSize: "50px",
							color: "#f8f6f6",
							fontWeight: "700",
						}}
					>
						{" "}
						Admissions Open 2023-24
					</h1>
					<form method="POST" action="" enctype="multipart/form-data">
						<label class="block mb-6">
							<span class="text-gray-700 block mb-2 text-sm font-medium text-gray-900 dark:text-white">
								Student Name
							</span>
							<input
								name="name"
								type="text"
								class="
            block
            w-full
            mt-1
            border-gray-300
            rounded-md
            shadow-sm
            focus:border-indigo-300
            focus:ring
            focus:ring-indigo-200
            focus:ring-opacity-50
          "
								placeholder="Rajesh"
							/>
						</label>
						<div class="mb-6">
							<div class="mt-2">
								<span class="text-gray-700  block mb-2 text-sm font-medium text-gray-900 dark:text-white">
									Gender :
								</span>
								<br />
								<div>
									<label class="inline-flex items-center">
										<input
											name="season"
											value="summer"
											type="radio"
											class="
                  text-indigo-600
                  border-gray-300
                  rounded-full
                  shadow-sm
                  focus:border-indigo-300
                  focus:ring
                  focus:ring-offset-0
                  focus:ring-indigo-200
                  focus:ring-opacity-50
                "
											checked
										/>
										<span class="ml-2 block mb-2 text-sm font-medium text-gray-900 dark:text-white">
											Male
										</span>
									</label>
								</div>
								<div>
									<label class="inline-flex items-center">
										<input
											name="season"
											value="winter"
											type="radio"
											class="
                  text-indigo-600
                  border-gray-300
                  rounded-full
                  shadow-sm
                  focus:border-indigo-300
                  focus:ring
                  focus:ring-offset-0
                  focus:ring-indigo-200
                  focus:ring-opacity-50
                "
										/>
										<span class="ml-2 block mb-2 text-sm font-medium text-gray-900 dark:text-white">
											Female
										</span>
									</label>
								</div>
							</div>
						</div>
						<label class="block mb-6">
							<span class="text-gray-700 block mb-2 text-sm font-medium text-gray-900 dark:text-white">
								{" "}
								Phone number{" "}
							</span>
							<input
								type="tel"
								id="phone"
								class="
            block
            w-full
            mt-1
            border-gray-300
            rounded-md
            shadow-sm
            focus:border-indigo-300
            focus:ring
            focus:ring-indigo-200
            focus:ring-opacity-50
          "
								placeholder="9515xxxxxx"
								pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
								required
							></input>
						</label>

						<label className="block mb-6">
							<span class="text-gray-700 block mb-2 text-sm font-medium text-gray-900 dark:text-white">
								Student Email address
							</span>
							<input
								name="email"
								type="email"
								class="
            block
            w-full
            mt-1
            border-gray-300
            rounded-md
            shadow-sm
            focus:border-indigo-300
            focus:ring
            focus:ring-indigo-200
            focus:ring-opacity-50
          "
								placeholder="Rajesh2003@example.com"
							/>
						</label>
						<label class="block mb-6">
							<span class="text-gray-700 block mb-2 text-sm font-medium text-gray-900 dark:text-white">
								Select The Programme
							</span>
							<select
								name="present"
								class="
            block
            w-full
            mt-1
            border-gray-300
            rounded-md
            shadow-sm
            focus:border-indigo-300
            focus:ring
            focus:ring-indigo-200
            focus:ring-opacity-50
          "
							>
								<option>BCA (Bacholor of Computer Applications)</option>
								<option>BBA (Business Admininstration)</option>
								<option>BSC (Mathematics, Physics, Chemistry)</option>
								<option>BSC (Mathematics, Physics, Computer Science)</option>
								<option>BA (Bacholor of Arts)</option>
								<option>
									BSC (Artificial Intelligence and Machine Learning)
								</option>
								<option>BSC (Mathematics, Statistics, Computer Science)</option>
								<option>BSC (Mathematics, Statistics, Data Science)</option>
								<option>BSC (Computer Science Cognitive System)</option>
								<option>BCom (General)</option>
								<option>BSC (BIO-Tech, Botany, Chemistry)</option>
								<option>BSC (Botany, Zoology, Chemistry)</option>
								<option>BBA (General)</option>
								<option>BBA (Analytics)</option>
								<option>
									BSC (Mathematics, Electronics, Computer Science)
								</option>
								<option>BCom (Accounts)</option>
							</select>
						</label>
						<label class="block mb-6">
							<span class="text-gray-700 block mb-2 text-sm font-medium text-gray-900 dark:text-white">
								Location
							</span>
							<textarea
								name="message"
								class="
            block
            w-full
            mt-1
            border-gray-300
            rounded-md
            shadow-sm
            focus:border-indigo-300
            focus:ring
            focus:ring-indigo-200
            focus:ring-opacity-50
          "
								rows="3"
								placeholder="Krishna,Vijayawada,suryapet,...."
							></textarea>
						</label>

						<div class="mb-6">
							<div class="mt-2">
								<div>
									<label class="inline-flex items-center">
										<input
											name="offers"
											value="yes"
											type="checkbox"
											class="
                  text-indigo-600
                  border-gray-300
                  rounded
                  shadow-sm
                  focus:border-indigo-300
                  focus:ring
                  focus:ring-offset-0
                  focus:ring-indigo-200
                  focus:ring-opacity-50
                "
										/>
										<span class="ml-2 block mb-2 text-sm font-medium text-gray-900 dark:text-white">
											I conform that above info is checked
										</span>
									</label>
								</div>
							</div>
						</div>
						<div class="mb-6">
							<button
								type="submit"
								class="
            h-10
            px-5
            text-indigo-100
            bg-indigo-700
            rounded-lg
            transition-colors
            duration-150
            focus:shadow-outline
            hover:bg-indigo-800
          "
								onClick={(e) => {
									e.preventDefault();
									toast.success(
										"Form is registered Successfull (Fake Form !!)"
									);
								}}
							>
								Regular Button
							</button>
						</div>
						<div></div>
					</form>
				</div>

				<p className="mt-10">.</p>
			</div>
		</>
	);
}

export default Admission;
