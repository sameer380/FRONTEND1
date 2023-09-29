import React from "react";
import './Results.css'
import { Link } from "react-router-dom";
function Results() {
	return (
		<>
			<div className="cards_container">
				<div className="watermark"></div>;
				<div className="cards1">
					<div className="card1">
						<h3> 2021 BATCH </h3>
						<Link
							to="/results2021/3"
							className="block rounded-lg p-4 shadow-sm shadow-indigo-100"
						>
							<img
								alt="Home"
								src="https://cache.careers360.mobi/media/presets/860X430/article_images/2020/10/1/AP-SSC-Result.webp"
								className="h-56 w-full rounded-md object-cover"
							/>

							<div className="mt-2">
								<dl>
									<div>
										<dd className="text-sm text-gray-500">May Saturday 2023</dd>
									</div>

									<div>
										<dt className="sr-only">Address</dt>

										<dd className="font-bold" style={{ fontSize: "1.4rem" }}>
											Results of III Semester End Examinations FEB-2023 Admn
											Batch:2021
										</dd>
									</div>
								</dl>

								<div className="mt-6 flex items-center gap-8 text-xs"></div>
							</div>
						</Link>
					</div>

					<div className="card1">
						<h3> 2021 BATCH </h3>
						<Link
							to="/results2021/1"
							className="block rounded-lg p-4 shadow-sm shadow-indigo-100"
						>
							<img
								alt="Home"
								src="https://assets.thehansindia.com/h-upload/2021/05/10/1075565-ssc-rtesults.webp"
								className="h-56 w-full rounded-md object-cover"
							/>

							<div className="mt-2">
								<dl>
									<div>
										<dd className="text-sm text-gray-500">May Saturday 2023</dd>
									</div>

									<div>
										<dt className="sr-only">Address</dt>

										<dd className="font-bold" style={{ fontSize: "1.4rem" }}>
											Results of I Semester End Examinations FEB-2023 Admn
											Batch:2021
										</dd>
									</div>
								</dl>

								<div className="mt-6 flex items-center gap-8 text-xs"></div>
							</div>
						</Link>
					</div>

					<div className="card1">
						<h3> 2022 BATCH </h3>
						<Link
							to="/results2022/1"
							className="block rounded-lg p-4 shadow-sm shadow-indigo-100"
						>
							<img
								alt="Home"
								src="https://bsmedia.business-standard.com/_media/bs/img/article/2022-07/27/full/1658940456-9009.jpg?im=FeatureCrop,size=(826,465)"
								className="h-56 w-full rounded-md object-cover"
							/>

							<div className="mt-2">
								<dl>
									<div>
										<dd className="text-sm text-gray-500">Augest Saturday 2022</dd>
									</div>

									<div>
										<dt className="sr-only">Address</dt>

										<dd className="font-bold" style={{ fontSize: "1.4rem" }}>
											Results of I Semester End Examinations FEB-2023 Admn
											Batch:2022
										</dd>
									</div>
								</dl>

								<div className="mt-6 flex items-center gap-8 text-xs"></div>
							</div>
						</Link>
					</div>
				</div>
			</div>
		</>
	);
}

export default Results;
