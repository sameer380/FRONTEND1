import React, { useContext, useEffect } from "react";
import { LoginContext } from "../context/LoginContext"; 
import "./Results.css";
function ResultFrame3() {
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
					src="https://pbsc.siddharthaexam.in/Admin/stmtofmarks2021.php?Batch=2021"
					width="100%"
					height="1500px"
					onLoad={() => {
						hanndleLoad();
					}}
				></iframe>
			</div>
			;
		</div>
	);
}

export default ResultFrame3



