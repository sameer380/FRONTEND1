import React from "react";
import {
	MDBCol,
	MDBContainer,
	MDBRow,
	MDBCard,
	MDBCardText,
	MDBCardBody,
	MDBCardImage,
	MDBBtn,
	MDBTypography,
} from "mdb-react-ui-kit";

export default function IQAC() {
	return (
		<div className="gradient-custom-2" style={{ backgroundColor: "#eceada" }}>
			<MDBContainer className="py-5 h-100">
				<MDBRow className="justify-content-center align-items-center h-100">
					<MDBCol lg="9" xl="7">
						<MDBCard>
							<div
								className="rounded-top text-white d-flex flex-row"
								style={{ backgroundColor: "#000", height: "200px" }}
							>
								<div
									className="ms-4 mt-5 d-flex flex-column"
									style={{ width: "350px" }}
								>
									<MDBCardImage
										src="https://res.cloudinary.com/drbzxsbop/image/upload/v1695891330/financeofficer-min_zciot5.jpg"
										alt="Generic placeholder image"
										className="mt-4 mb-2 img-thumbnail"
										fluid
										style={{
											width: "250px",
											height: "230px",
											zIndex: "1",
										}}
									/>
								</div>
								<div className="ms-3" style={{ marginTop: "130px" }}>
									<MDBTypography tag="h5">Sri Ch.Venkateswarlu</MDBTypography>
									<MDBCardText>Vijayawada</MDBCardText>
								</div>
							</div>
							<div
								className="p-4 text-black"
								style={{ backgroundColor: "#f8f9fa" }}
							>
								<div className="d-flex justify-content-end text-center py-1">
									<div>
										<MDBCardText className="mb-1 h5">0</MDBCardText>
										<MDBCardText className="small text-muted mb-0">
											Photos
										</MDBCardText>
									</div>
									<div className="px-3">
										<MDBCardText className="mb-1 h5">0</MDBCardText>
										<MDBCardText className="small text-muted mb-0">
											Followers
										</MDBCardText>
									</div>
								</div>
							</div>
							<MDBCardBody className="text-black p-4">
								<div className="mb-5">
									<p className="lead fw-normal mb-1">About</p>
									<div className="p-4" style={{ backgroundColor: "#f8f9fa" }}>
										<MDBCardText className="font-italic mb-1">
											{" "}
											" ME(1981), AMIE(Mech), MBA, M.Phil., Ph.D."
										</MDBCardText>

										<MDBCardText className="font-italic mb-0">
											Area of Specialization : Aquaculture Designation : Head,
											Department of Zoology Date of Joining : 25-06-2008
											Qualification : M.Sc (Zoology) Experience in Teaching :
											Working as a Lecturer in Zoology from 1990 to till date.
											Experience in Research : 2 years in doing Minor Research
											Project Papers presented : A. International - 04 B.
											National - 05 Seminars attended : A. International - 04 B.
											National - 05 Seminars conducted : 03 1. Conducted the
											International seminar on Science and Scientist-2014. 2.
											Conducted the National Seminars on a) Climate Change
											Impact And Its Management In Indian Agriculture. b) Recent
											Trends In Phytochemical And Plant Biology Research .
										</MDBCardText>
									</div>
								</div>
								<div className="d-flex justify-content-between align-items-center mb-4">
									<MDBCardText className="lead fw-normal mb-0">
										Recent photos
									</MDBCardText>
									<MDBCardText className="mb-0">
										<a href="#!" className="text-muted">
											0
										</a>
									</MDBCardText>
								</div>
							</MDBCardBody>
						</MDBCard>
					</MDBCol>
				</MDBRow>
			</MDBContainer>
		</div>
	);
}
