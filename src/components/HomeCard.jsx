import React from "react";

import { useNavigate } from "react-router-dom";
function HomeCard({ srcI, dep, title }) {
	const navigate = useNavigate();

	const redirectToOtherSection = () => {
		navigate("/Admission");
	};

	return (
		<div
			className="card2"
		
			onClick={redirectToOtherSection}
		>
			<article
				className="overflow-hidden rounded-lg border border-gray-100 bg-white shadow-sm"
				style={{
					maxWidth: "400px",
					height: "410px",
				}}
			>
				<img
					alt="Office"
					src={srcI}
					className="h-56 w-full object-cover"
					style={{
						height: "220px",
						objectFit: "cover",
					}}
				/>
				<div className="p-4 sm:p-6">
					<a href="#">
						<h3 className="text-lg font-medium text-gray-900">{title}</h3>
					</a>

					<p className="mt-2 line-clamp-3 text-sm/relaxed text-gray-500">
						{dep}
					</p>

					<a
						href="#"
						className="group mt-4 inline-flex items-center gap-1 text-sm font-medium text-blue-600"
					>
						Find out more
						<span
							aria-hidden="true"
							className="block transition-all group-hover:ms-0.5 rtl:rotate-180"
						>
							&rarr;
						</span>
					</a>
				</div>
				<img
					src="https://res.cloudinary.com/drbzxsbop/image/upload/v1694756291/logo-sm_r9of4e.png"
					alt=""
					height="22%"
					width="16%"
					style={{
						float: "right",
						marginTop: "-100px",
						marginRight: "25px",
						opacity: "0.5",
					}}
					className="meImg"
				/>
			</article>
		</div>
	);
}

export default HomeCard;
