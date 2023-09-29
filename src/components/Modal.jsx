import React, { useContext } from 'react'
import { LoginContext } from "../context/LoginContext";
import { redirect, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
function Modal({ setModalOpen }) {
	const navigate = useNavigate();

	return (
		<div>
			<div
				className="rounded-lg border border-gray-100 text-center shadow-xl bg-#640b0b"
				style={{
					width: "400px",
					padding: "50px",
					boxShadow: "rgba(0, 0, 0, 0.801) 0px 5px 15px",
					margin: "0 auto",
					position: "fixed",
					backgroundColor: "#750a0a",
					top: "50%",
					left: "50%",
					transform: "translate(-50%,-50%)",
					zIndex: "100",
					borderRadius: "40px",
				}}
			>
				<div className="px-6 py-5 text-white" style={{ fontSize: "1.3rem" }}>
					<p className="font-medium">Do You Really Wanna Logout?</p>

					<div className="mt-4 space-y-2">
						<a
							className="block rounded-full border border-blue-500 px-8 py-3 text-sm font-medium text-white-600"
					
							href="#"
							style={{
								backgroundColor: "#be1f1f",
								color: "white"
							}}
							onClick={() => {
								localStorage.clear();
								setModalOpen(false);
								navigate("/");
								toast.success("Successfully Logout");
							}}
							
						>
							Logout
						</a>
						<a
							className="mt-3 block rounded-full border border-gray-500 px-8 py-3 bg-red text-sm font-medium text-white-600 "
							style={{
								color: "white",
							}}
							href="#"
							onClick={() => {
								setModalOpen(false);
							}}
						>
							Nope
						</a>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Modal


