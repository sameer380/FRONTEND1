import React from 'react'
import LocationOnIcon from "@mui/icons-material/LocationOn";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import { toast } from 'react-toastify';
function Contact() {
  return (
		<div>
			<section className="bg-white py-20 lg:py-[120px] overflow-hidden relative z-10">
				<div className="container">
					<div className="flex flex-wrap -mx-4 lg:justify-between">
						<div className="w-full px-4 lg:w-1/2 xl:w-6/12">
							<div className="mb-12 max-w-[570px] lg:mb-0">
								<span
									className="block mb-4 text-base font-semibold"
									style={{
										color: "#991212",
									}}
								>
									Contact Us
								</span>
								<h2 className="mb-16 text-[32px] font-bold uppercase text-dark sm:text-[40px] lg:text-[36px] xl:text-[40px]">
									SEND YOUR QUERIES HERE
								</h2>

								<div className="mb-8 flex w-full max-w-[370px]">
									<div
										className="mr-6 flex h-[60px] w-full max-w-[60px] items-center justify-center overflow-hidden rounded bg-opacity-5 text-primary sm:h-[70px] sm:max-w-[70px]"
										style={{
											backgroundColor: "#881919",
										}}
									>
										<div width={24} height={24}>
											<LocationOnIcon
												style={{
													color: "white",
													fontSize: "2.2rem",
												}}
											/>
										</div>
									</div>
									<div className="w-full">
										<h4 className="mb-1 text-xl font-bold text-dark">
											Our Location
										</h4>
										<p className="text-base text-body-color">
											Parvathaneni Brahmayya Siddhartha College of Arts &
											Science, Siddhartha Nagar, Vijayawada-520 010, Andhra
											Pradesh, India.
										</p>
									</div>
								</div>
								<div className="mb-8 flex w-full max-w-[370px]">
									<div
										className="mr-6 flex h-[60px] w-full max-w-[60px] items-center justify-center overflow-hidden rounded bg-opacity-5 text-primary sm:h-[70px] sm:max-w-[70px]
                                    
                                    "
										style={{
											backgroundColor: "#881919",
										}}
									>
										<div width={24} height={24}>
											<PhoneIcon
												style={{
													color: "white",
													fontSize: "2.2rem",
												}}
											/>
										</div>
									</div>
									<div className="w-full">
										<h4 className="mb-1 text-xl font-bold text-dark">
											Phone Number
										</h4>
										<p className="text-base text-body-color">
											0866 - 2475966 <br /> 6305286670
										</p>
									</div>
								</div>
								<div className="mb-8 flex w-full max-w-[370px]">
									<div
										className="mr-6 flex h-[60px] w-full max-w-[60px] items-center justify-center overflow-hidden rounded bg-opacity-5 text-primary sm:h-[70px] sm:max-w-[70px]"
										style={{
											backgroundColor: "#881919",
										}}
									>
										<div width={24} height={24}>
											<EmailIcon
												style={{
													color: "white",
													fontSize: "2.2rem",
												}}
											/>
										</div>
									</div>
									<div className="w-full">
										<h4 className="mb-1 text-xl font-bold text-dark">
											Email Address
										</h4>
										<p className="text-base text-body-color">
											pbs_college@hotmail.com <br />{" "}
											principal@pbsiddhartha.ac.in
										</p>
									</div>
								</div>
							</div>
						</div>
						<img
							src="https://res.cloudinary.com/drbzxsbop/image/upload/v1695891350/logo-sm-min_yyvez8.png"
							style={{
								width: "290px",
								height: "380px",
								opacity: "0.1",
								zIndex: "-100",
								position: "sticky",
								marginTop: "150px",
								marginLeft: "-370px",

								// boxShadow: "3px 1px 2px 3px rgba(0, 0, 0, 0.185)",
							}}
						/>
						<div className="w-full px-4 lg:w-1/2 xl:w-5/12">
							<div className="relative p-8 bg-white rounded-lg shadow-lg sm:p-12">
								<form>
									<ContactInputBox
										type="text"
										name="name"
										placeholder="Your Name"
									/>
									<ContactInputBox
										type="text"
										name="email"
										placeholder="Your Email"
									/>
									<ContactInputBox
										type="text"
										name="phone"
										placeholder="Your Phone"
									/>
									<ContactTextArea
										row="6"
										placeholder="Your Message"
										name="details"
										defaultValue=""
									/>
									<div>
										<button
											type="submit"
											className="w-full p-3 text-white transition border rounded  hover:bg-opacity-90"
											onClick={(e) => {
												e.preventDefault();
												toast.success(
													"Your queries  is send..Thankyou (Fake Form!!)"
												);
											}}
											style={{
												backgroundColor: "#881919",
											}}
										>
											Send Message
										</button>
									</div>
								</form>
								<div>
									<span className="absolute -top-10 -right-9 z-[-1]">
										<svg
											width={100}
											height={100}
											viewBox="0 0 100 100"
											fill="none"
											xmlns="http://www.w3.org/2000/svg"
										>
											<path
												fillRule="evenodd"
												clipRule="evenodd"
												d="M0 100C0 44.7715 0 0 0 0C55.2285 0 100 44.7715 100 100C100 100 100 100 0 100Z"
												fill="#c21313"
											/>
										</svg>
									</span>
									<span className="absolute -right-10 top-[90px] z-[-1]">
										<svg
											width={34}
											height={134}
											viewBox="0 0 34 134"
											fill="none"
											xmlns="http://www.w3.org/2000/svg"
										>
											<circle
												cx="31.9993"
												cy={132}
												r="1.66667"
												transform="rotate(180 31.9993 132)"
												fill="#c21313"
											/>
											<circle
												cx="31.9993"
												cy="117.333"
												r="1.66667"
												transform="rotate(180 31.9993 117.333)"
												fill="#c21313"
											/>
											<circle
												cx="31.9993"
												cy="102.667"
												r="1.66667"
												transform="rotate(180 31.9993 102.667)"
												fill="#c21313"
											/>
											<circle
												cx="31.9993"
												cy={88}
												r="1.66667"
												transform="rotate(180 31.9993 88)"
												fill="#c21313"
											/>
											<circle
												cx="31.9993"
												cy="73.3333"
												r="1.66667"
												transform="rotate(180 31.9993 73.3333)"
												fill="#c21313"
											/>
											<circle
												cx="31.9993"
												cy={45}
												r="1.66667"
												transform="rotate(180 31.9993 45)"
												fill="#c21313"
											/>
											<circle
												cx="31.9993"
												cy={16}
												r="1.66667"
												transform="rotate(180 31.9993 16)"
												fill="#c21313"
											/>
											<circle
												cx="31.9993"
												cy={59}
												r="1.66667"
												transform="rotate(180 31.9993 59)"
												fill="#c21313"
											/>
											<circle
												cx="31.9993"
												cy="30.6666"
												r="1.66667"
												transform="rotate(180 31.9993 30.6666)"
												fill="#c21313"
											/>
											<circle
												cx="31.9993"
												cy="1.66665"
												r="1.66667"
												transform="rotate(180 31.9993 1.66665)"
												fill="#c21313"
											/>
											<circle
												cx="17.3333"
												cy={132}
												r="1.66667"
												transform="rotate(180 17.3333 132)"
												fill="#c21313"
											/>
											<circle
												cx="17.3333"
												cy="117.333"
												r="1.66667"
												transform="rotate(180 17.3333 117.333)"
												fill="#c21313"
											/>
											<circle
												cx="17.3333"
												cy="102.667"
												r="1.66667"
												transform="rotate(180 17.3333 102.667)"
												fill="#c21313"
											/>
											<circle
												cx="17.3333"
												cy={88}
												r="1.66667"
												transform="rotate(180 17.3333 88)"
												fill="#c21313"
											/>
											<circle
												cx="17.3333"
												cy="73.3333"
												r="1.66667"
												transform="rotate(180 17.3333 73.3333)"
												fill="#c21313"
											/>
											<circle
												cx="17.3333"
												cy={45}
												r="1.66667"
												transform="rotate(180 17.3333 45)"
												fill="#c21313"
											/>
											<circle
												cx="17.3333"
												cy={16}
												r="1.66667"
												transform="rotate(180 17.3333 16)"
												fill="#c21313"
											/>
											<circle
												cx="17.3333"
												cy={59}
												r="1.66667"
												transform="rotate(180 17.3333 59)"
												fill="#c21313"
											/>
											<circle
												cx="17.3333"
												cy="30.6666"
												r="1.66667"
												transform="rotate(180 17.3333 30.6666)"
												fill="#c21313"
											/>
											<circle
												cx="17.3333"
												cy="1.66665"
												r="1.66667"
												transform="rotate(180 17.3333 1.66665)"
												fill="#c21313"
											/>
											<circle
												cx="2.66536"
												cy={132}
												r="1.66667"
												transform="rotate(180 2.66536 132)"
												fill="#c21313"
											/>
											<circle
												cx="2.66536"
												cy="117.333"
												r="1.66667"
												transform="rotate(180 2.66536 117.333)"
												fill="#c21313"
											/>
											<circle
												cx="2.66536"
												cy="102.667"
												r="1.66667"
												transform="rotate(180 2.66536 102.667)"
												fill="#c21313"
											/>
											<circle
												cx="2.66536"
												cy={88}
												r="1.66667"
												transform="rotate(180 2.66536 88)"
												fill="#c21313"
											/>
											<circle
												cx="2.66536"
												cy="73.3333"
												r="1.66667"
												transform="rotate(180 2.66536 73.3333)"
												fill="#c21313"
											/>
											<circle
												cx="2.66536"
												cy={45}
												r="1.66667"
												transform="rotate(180 2.66536 45)"
												fill="#c21313"
											/>
											<circle
												cx="2.66536"
												cy={16}
												r="1.66667"
												transform="rotate(180 2.66536 16)"
												fill="#c21313"
											/>
											<circle
												cx="2.66536"
												cy={59}
												r="1.66667"
												transform="rotate(180 2.66536 59)"
												fill="#c21313"
											/>
											<circle
												cx="2.66536"
												cy="30.6666"
												r="1.66667"
												transform="rotate(180 2.66536 30.6666)"
												fill="#c21313"
											/>
											<circle
												cx="2.66536"
												cy="1.66665"
												r="1.66667"
												transform="rotate(180 2.66536 1.66665)"
												fill="#c21313"
											/>
										</svg>
									</span>
									<span className="absolute -left-7 -bottom-7 z-[-1]">
										<svg
											width={107}
											height={134}
											viewBox="0 0 107 134"
											fill="none"
											xmlns="http://www.w3.org/2000/svg"
										>
											<circle
												cx="104.999"
												cy={132}
												r="1.66667"
												transform="rotate(180 104.999 132)"
												fill="#c21313"
											/>
											<circle
												cx="104.999"
												cy="117.333"
												r="1.66667"
												transform="rotate(180 104.999 117.333)"
												fill="#c21313"
											/>
											<circle
												cx="104.999"
												cy="102.667"
												r="1.66667"
												transform="rotate(180 104.999 102.667)"
												fill="#c21313"
											/>
											<circle
												cx="104.999"
												cy={88}
												r="1.66667"
												transform="rotate(180 104.999 88)"
												fill="#c21313"
											/>
											<circle
												cx="104.999"
												cy="73.3333"
												r="1.66667"
												transform="rotate(180 104.999 73.3333)"
												fill="#c21313"
											/>
											<circle
												cx="104.999"
												cy={45}
												r="1.66667"
												transform="rotate(180 104.999 45)"
												fill="#c21313"
											/>
											<circle
												cx="104.999"
												cy={16}
												r="1.66667"
												transform="rotate(180 104.999 16)"
												fill="#c21313"
											/>
											<circle
												cx="104.999"
												cy={59}
												r="1.66667"
												transform="rotate(180 104.999 59)"
												fill="#c21313"
											/>
											<circle
												cx="104.999"
												cy="30.6666"
												r="1.66667"
												transform="rotate(180 104.999 30.6666)"
												fill="#c21313"
											/>
											<circle
												cx="104.999"
												cy="1.66665"
												r="1.66667"
												transform="rotate(180 104.999 1.66665)"
												fill="#c21313"
											/>
											<circle
												cx="90.3333"
												cy={132}
												r="1.66667"
												transform="rotate(180 90.3333 132)"
												fill="#c21313"
											/>
											<circle
												cx="90.3333"
												cy="117.333"
												r="1.66667"
												transform="rotate(180 90.3333 117.333)"
												fill="#c21313"
											/>
											<circle
												cx="90.3333"
												cy="102.667"
												r="1.66667"
												transform="rotate(180 90.3333 102.667)"
												fill="#c21313"
											/>
											<circle
												cx="90.3333"
												cy={88}
												r="1.66667"
												transform="rotate(180 90.3333 88)"
												fill="#c21313"
											/>
											<circle
												cx="90.3333"
												cy="73.3333"
												r="1.66667"
												transform="rotate(180 90.3333 73.3333)"
												fill="#c21313"
											/>
											<circle
												cx="90.3333"
												cy={45}
												r="1.66667"
												transform="rotate(180 90.3333 45)"
												fill="#c21313"
											/>
											<circle
												cx="90.3333"
												cy={16}
												r="1.66667"
												transform="rotate(180 90.3333 16)"
												fill="#c21313"
											/>
											<circle
												cx="90.3333"
												cy={59}
												r="1.66667"
												transform="rotate(180 90.3333 59)"
												fill="#c21313"
											/>
											<circle
												cx="90.3333"
												cy="30.6666"
												r="1.66667"
												transform="rotate(180 90.3333 30.6666)"
												fill="#c21313"
											/>
											<circle
												cx="90.3333"
												cy="1.66665"
												r="1.66667"
												transform="rotate(180 90.3333 1.66665)"
												fill="#c21313"
											/>
											<circle
												cx="75.6654"
												cy={132}
												r="1.66667"
												transform="rotate(180 75.6654 132)"
												fill="#c21313"
											/>
											<circle
												cx="31.9993"
												cy={132}
												r="1.66667"
												transform="rotate(180 31.9993 132)"
												fill="#c21313"
											/>
											<circle
												cx="75.6654"
												cy="117.333"
												r="1.66667"
												transform="rotate(180 75.6654 117.333)"
												fill="#c21313"
											/>
											<circle
												cx="31.9993"
												cy="117.333"
												r="1.66667"
												transform="rotate(180 31.9993 117.333)"
												fill="#c21313"
											/>
											<circle
												cx="75.6654"
												cy="102.667"
												r="1.66667"
												transform="rotate(180 75.6654 102.667)"
												fill="#c21313"
											/>
											<circle
												cx="31.9993"
												cy="102.667"
												r="1.66667"
												transform="rotate(180 31.9993 102.667)"
												fill="#c21313"
											/>
											<circle
												cx="75.6654"
												cy={88}
												r="1.66667"
												transform="rotate(180 75.6654 88)"
												fill="#c21313"
											/>
											<circle
												cx="31.9993"
												cy={88}
												r="1.66667"
												transform="rotate(180 31.9993 88)"
												fill="#c21313"
											/>
											<circle
												cx="75.6654"
												cy="73.3333"
												r="1.66667"
												transform="rotate(180 75.6654 73.3333)"
												fill="#c21313"
											/>
											<circle
												cx="31.9993"
												cy="73.3333"
												r="1.66667"
												transform="rotate(180 31.9993 73.3333)"
												fill="#c21313"
											/>
											<circle
												cx="75.6654"
												cy={45}
												r="1.66667"
												transform="rotate(180 75.6654 45)"
												fill="#c21313"
											/>
											<circle
												cx="31.9993"
												cy={45}
												r="1.66667"
												transform="rotate(180 31.9993 45)"
												fill="#c21313"
											/>
											<circle
												cx="75.6654"
												cy={16}
												r="1.66667"
												transform="rotate(180 75.6654 16)"
												fill="#c21313"
											/>
											<circle
												cx="31.9993"
												cy={16}
												r="1.66667"
												transform="rotate(180 31.9993 16)"
												fill="#c21313"
											/>
											<circle
												cx="75.6654"
												cy={59}
												r="1.66667"
												transform="rotate(180 75.6654 59)"
												fill="#c21313"
											/>
											<circle
												cx="31.9993"
												cy={59}
												r="1.66667"
												transform="rotate(180 31.9993 59)"
												fill="#c21313"
											/>
											<circle
												cx="75.6654"
												cy="30.6666"
												r="1.66667"
												transform="rotate(180 75.6654 30.6666)"
												fill="#c21313"
											/>
											<circle
												cx="31.9993"
												cy="30.6666"
												r="1.66667"
												transform="rotate(180 31.9993 30.6666)"
												fill="#c21313"
											/>
											<circle
												cx="75.6654"
												cy="1.66665"
												r="1.66667"
												transform="rotate(180 75.6654 1.66665)"
												fill="#c21313"
											/>
											<circle
												cx="31.9993"
												cy="1.66665"
												r="1.66667"
												transform="rotate(180 31.9993 1.66665)"
												fill="#c21313"
											/>
											<circle
												cx="60.9993"
												cy={132}
												r="1.66667"
												transform="rotate(180 60.9993 132)"
												fill="#c21313"
											/>
											<circle
												cx="17.3333"
												cy={132}
												r="1.66667"
												transform="rotate(180 17.3333 132)"
												fill="#c21313"
											/>
											<circle
												cx="60.9993"
												cy="117.333"
												r="1.66667"
												transform="rotate(180 60.9993 117.333)"
												fill="#c21313"
											/>
											<circle
												cx="17.3333"
												cy="117.333"
												r="1.66667"
												transform="rotate(180 17.3333 117.333)"
												fill="#c21313"
											/>
											<circle
												cx="60.9993"
												cy="102.667"
												r="1.66667"
												transform="rotate(180 60.9993 102.667)"
												fill="#c21313"
											/>
											<circle
												cx="17.3333"
												cy="102.667"
												r="1.66667"
												transform="rotate(180 17.3333 102.667)"
												fill="#c21313"
											/>
											<circle
												cx="60.9993"
												cy={88}
												r="1.66667"
												transform="rotate(180 60.9993 88)"
												fill="#c21313"
											/>
											<circle
												cx="17.3333"
												cy={88}
												r="1.66667"
												transform="rotate(180 17.3333 88)"
												fill="#c21313"
											/>
											<circle
												cx="60.9993"
												cy="73.3333"
												r="1.66667"
												transform="rotate(180 60.9993 73.3333)"
												fill="#c21313"
											/>
											<circle
												cx="17.3333"
												cy="73.3333"
												r="1.66667"
												transform="rotate(180 17.3333 73.3333)"
												fill="#c21313"
											/>
											<circle
												cx="60.9993"
												cy={45}
												r="1.66667"
												transform="rotate(180 60.9993 45)"
												fill="#c21313"
											/>
											<circle
												cx="17.3333"
												cy={45}
												r="1.66667"
												transform="rotate(180 17.3333 45)"
												fill="#c21313"
											/>
											<circle
												cx="60.9993"
												cy={16}
												r="1.66667"
												transform="rotate(180 60.9993 16)"
												fill="#c21313"
											/>
											<circle
												cx="17.3333"
												cy={16}
												r="1.66667"
												transform="rotate(180 17.3333 16)"
												fill="#c21313"
											/>
											<circle
												cx="60.9993"
												cy={59}
												r="1.66667"
												transform="rotate(180 60.9993 59)"
												fill="#c21313"
											/>
											<circle
												cx="17.3333"
												cy={59}
												r="1.66667"
												transform="rotate(180 17.3333 59)"
												fill="#c21313"
											/>
											<circle
												cx="60.9993"
												cy="30.6666"
												r="1.66667"
												transform="rotate(180 60.9993 30.6666)"
												fill="#c21313"
											/>
											<circle
												cx="17.3333"
												cy="30.6666"
												r="1.66667"
												transform="rotate(180 17.3333 30.6666)"
												fill="#c21313"
											/>
											<circle
												cx="60.9993"
												cy="1.66665"
												r="1.66667"
												transform="rotate(180 60.9993 1.66665)"
												fill="#c21313"
											/>
											<circle
												cx="17.3333"
												cy="1.66665"
												r="1.66667"
												transform="rotate(180 17.3333 1.66665)"
												fill="#c21313"
											/>
											<circle
												cx="46.3333"
												cy={132}
												r="1.66667"
												transform="rotate(180 46.3333 132)"
												fill="#c21313"
											/>
											<circle
												cx="2.66536"
												cy={132}
												r="1.66667"
												transform="rotate(180 2.66536 132)"
												fill="#c21313"
											/>
											<circle
												cx="46.3333"
												cy="117.333"
												r="1.66667"
												transform="rotate(180 46.3333 117.333)"
												fill="#c21313"
											/>
											<circle
												cx="2.66536"
												cy="117.333"
												r="1.66667"
												transform="rotate(180 2.66536 117.333)"
												fill="#c21313"
											/>
											<circle
												cx="46.3333"
												cy="102.667"
												r="1.66667"
												transform="rotate(180 46.3333 102.667)"
												fill="#c21313"
											/>
											<circle
												cx="2.66536"
												cy="102.667"
												r="1.66667"
												transform="rotate(180 2.66536 102.667)"
												fill="#c21313"
											/>
											<circle
												cx="46.3333"
												cy={88}
												r="1.66667"
												transform="rotate(180 46.3333 88)"
												fill="#c21313"
											/>
											<circle
												cx="2.66536"
												cy={88}
												r="1.66667"
												transform="rotate(180 2.66536 88)"
												fill="#c21313"
											/>
											<circle
												cx="46.3333"
												cy="73.3333"
												r="1.66667"
												transform="rotate(180 46.3333 73.3333)"
												fill="#c21313"
											/>
											<circle
												cx="2.66536"
												cy="73.3333"
												r="1.66667"
												transform="rotate(180 2.66536 73.3333)"
												fill="#c21313"
											/>
											<circle
												cx="46.3333"
												cy={45}
												r="1.66667"
												transform="rotate(180 46.3333 45)"
												fill="#c21313"
											/>
											<circle
												cx="2.66536"
												cy={45}
												r="1.66667"
												transform="rotate(180 2.66536 45)"
												fill="#c21313"
											/>
											<circle
												cx="46.3333"
												cy={16}
												r="1.66667"
												transform="rotate(180 46.3333 16)"
												fill="#c21313"
											/>
											<circle
												cx="2.66536"
												cy={16}
												r="1.66667"
												transform="rotate(180 2.66536 16)"
												fill="#c21313"
											/>
											<circle
												cx="46.3333"
												cy={59}
												r="1.66667"
												transform="rotate(180 46.3333 59)"
												fill="#c21313"
											/>
											<circle
												cx="2.66536"
												cy={59}
												r="1.66667"
												transform="rotate(180 2.66536 59)"
												fill="#c21313"
											/>
											<circle
												cx="46.3333"
												cy="30.6666"
												r="1.66667"
												transform="rotate(180 46.3333 30.6666)"
												fill="#c21313"
											/>
											<circle
												cx="2.66536"
												cy="30.6666"
												r="1.66667"
												transform="rotate(180 2.66536 30.6666)"
												fill="#c21313"
											/>
											<circle
												cx="46.3333"
												cy="1.66665"
												r="1.66667"
												transform="rotate(180 46.3333 1.66665)"
												fill="#c21313"
											/>
											<circle
												cx="2.66536"
												cy="1.66665"
												r="1.66667"
												transform="rotate(180 2.66536 1.66665)"
												fill="#c21313"
											/>
										</svg>
									</span>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
		</div>
	);
}

export default Contact

const ContactTextArea = ({ row, placeholder, name, defaultValue }) => {
	return (
		<>
			<div className="mb-6">
				<textarea
					rows={row}
					placeholder={placeholder}
					name={name}
					className="border-[f0f0f0] w-full resize-none rounded border py-3 px-[14px] text-base text-body-color outline-none focus:border-primary focus-visible:shadow-none"
					defaultValue={defaultValue}
				/>
			</div>
		</>
	);
};

const ContactInputBox = ({ type, placeholder, name }) => {
	return (
		<>
			<div className="mb-6">
				<input
					type={type}
					placeholder={placeholder}
					name={name}
					className="border-[f0f0f0] w-full rounded border py-3 px-[14px] text-base text-body-color outline-none focus:border-primary focus-visible:shadow-none"
				/>
			</div>
		</>
	);
};