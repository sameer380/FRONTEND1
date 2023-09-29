import React, { useContext, useEffect } from "react";
import { LoginContext } from "../context/LoginContext";
import "./Results.css";
function ResultsFrame2022() {
	const { setLoading, loading } = useContext(LoginContext);

	useEffect(() => {
		setLoading(true);
	}, []);
	const hanndleLoad = () => {
		setLoading(false);
		console.log("yooo");
	};
	return (
		<div>
			<div>
				<iframe
					src="https://pbsc.siddharthaexam.in/Admin/stmtofmarks2022.php?Batch=2022"
					width="100%"
					height="1500px"
					onLoad={() => {
						hanndleLoad();
					}}
				></iframe>
			</div>
		</div>
	);
}

export default ResultsFrame2022;
