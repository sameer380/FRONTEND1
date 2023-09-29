
import React, { useContext, useEffect } from "react";
import { LoginContext } from "../context/LoginContext";
function UgPapers() {
		const { setLoading, loading } = useContext(LoginContext);

		useEffect(() => {
			setLoading(true);
		}, []);
		const hanndleLoad = () => {
			setLoading(false);
		};
	return (
		<div>
			<section>
				<div
					className="mx-auto max-w-screen-xl px-4 py-8 sm:py-12 sm:px-6 lg:py-16 lg:px-8"
					style={
						{
							// marginBottom: "-100px",
						}
					}
				>
					<div className="mx-auto max-w-lg text-center">
						<h2
							className="text-3xl font-bold sm:text-4xl"
							style={{
								padding: "30px",
								boxShadow:
									"rgba(55, 0, 255, 0.25) 0px 50px 100px -20px, rgba(0, 26, 255, 0.3) 0px 30px 60px -30px",
							}}
						>
							UNDER GRADUATION SEMESTER PAPERS
						</h2>

						<p className="mt-4"></p>
					</div>
				</div>

				<div className="secDiv">
					<iframe
						src="https://drive.google.com/embeddedfolderview?id=1Jnz6MijjbKHFfwy3g2TW-9KMM0gBPrvU#grid"
						width="100%"
						height="750px"
						frameborder="0"
						onLoad={() => {
							hanndleLoad();
						}}
					></iframe>
				</div>
			</section>
		</div>
	);
}

export default UgPapers;
