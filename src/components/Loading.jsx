import React from "react";
import { ClipLoader } from "react-spinners";

export function Loading({ show }) {
	return (
		show && (
			<>
				<div
					className="loading-overlay"
					style={{
						position: "fixed",
						top: 0,
						left: 0,
						right: 0,
						bottom: 0,
						display: "flex",
						justifyContent: "center",
						alignItems: "center",
						backgroundColor: "rgba(0, 0, 0, 0.5)", // Semi-transparent background
						zIndex: "1000",
					}}
				>
					<div style={{ width: "100%", textAlign: "center" }}>
						<ClipLoader color="hsla(360, 100%, 50%, 1)" size={71} />
					</div>
				</div>
			</>
		)
	);
}
