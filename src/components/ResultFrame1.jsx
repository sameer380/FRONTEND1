import React, { useContext, useEffect } from 'react'
import "./Results.css";
import { LoginContext } from '../context/LoginContext';
function ResultFrame1() {
const { setLoading, loading } = useContext(LoginContext); 

	useEffect(() => {
		setLoading(true);
	},[])
	const hanndleLoad=() => {
		setLoading(false)
		console.log("yooo");
	}
  return (
		<div>
			<div style={{backgroundColor:"white"}}>
				<iframe
					src="https://pbsiddharthaelectronics.in/results/results.html"
					width="100%"
				  height="1500px"
				  onLoad={() => {
					  hanndleLoad()
				  }}
				></iframe>
			</div>
		</div>
	);
}

export default ResultFrame1
