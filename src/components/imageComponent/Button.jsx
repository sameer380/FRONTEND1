import React from "react";
import { AiFillPlusCircle } from "react-icons/ai";
import axios from "axios";


const Button = ({ setUpdateUI }) => {
	const handleChange = (e) => {
		e.preventDefault();

		const formData = new FormData();
		formData.append("photo", e.target.files[0]);


		axios
			// .post("https://pbscbackend23.onrender.com/api/save", formData)
			
			 .post("https://collegebackend-l0an.onrender.com/api/save", formData) 
			
			.then((res) => {
				console.log(res.data);
				setUpdateUI(res.data._id);
			})
			.catch((err) => console.log(err));
	};

	return (
		<label
			className="button"
			htmlFor="file_picker"
			style={{
				color: "rgb(128, 1, 12)",
				fontSize: "60px",
				height: "65px",
				position: "sticky",
				right: "10px",
				bottom: "10px",
				margin: "2rem",
				cursor: "pointer",
			}}
		>
			<AiFillPlusCircle />
			<input
				hidden
				type="file"
				name="file_picker"
				id="file_picker"
				onChange={(e) => handleChange(e)}
			/>
		</label>
	);
};

export default Button;
