import React from "react";
import "./principal.css"
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

export default function Principal() {
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
										src="https://res.cloudinary.com/drbzxsbop/image/upload/v1695891351/principal-min_frjymi.jpg"
										alt="Generic placeholder image"
										className="mt-4 mb-2 img-thumbnail"
										fluid
										style={{
											width: "350px",

											zIndex: "1",
										}}
									/>
								</div>
								<div className="ms-3" style={{ marginTop: "130px" }}>
									<MDBTypography tag="h5">Dr.Ramesh Meka</MDBTypography>
									<MDBCardText>Vijayawada</MDBCardText>
								</div>
							</div>
							<div
								className="p-4 text-black"
								style={{ backgroundColor: "#f8f9fa" }}
							>
								<div className="d-flex justify-content-end text-center py-1">
									<div>
										<MDBCardText className="mb-1 h5">4</MDBCardText>
										<MDBCardText className="small text-muted mb-0">
											Photos
										</MDBCardText>
									</div>
									<div className="px-3">
										<MDBCardText className="mb-1 h5">1026</MDBCardText>
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
											MA, MPhil, PhD
										</MDBCardText>
										<MDBCardText className="font-italic mb-1">
											principal@pbsiddhartha.ac.in, pbs_college@hotmail.com +91
											866 2475966
										</MDBCardText>
										<MDBCardText className="font-italic mb-0">
											Dr.M.Ramesh, an Alumnus of this College obtained his
											Masters Degree from Sri Venkateswara University,
											Tirupathi, MPhil from Madhurai Kamaraj University and PhD
											from Acharya Nagarjuna University. He began his career at
											P.B.Siddhartha College of Arts & Science, Vijayawada as a
											Lecturer in Economics. He assumed as Principal (I/C) of
											the College from August, 2016. Present Roles: Principal
											(I/C), P.B.Siddhartha College of Arts & Science Professor
											& Head, Department of Economics, P.B.Siddhartha College of
											Arts & Science UGC Nominee in Advisory Committee, Jamaal
											Mahamad College, Thiruchirapalli Member – Academic Senate,
											Krishna University, Machilipatnam Administrative
											Experience: Academic Officer Finance Officer, Autonomous
											Funds UGC Coordinator Senior Administrative Officer, IQAC
											Co-convener of Srujanotsav (A State Level Cultural Fest)
											Member in Steering Committee for NAAC Chairman of Board of
											Studies in: Economics, P.B.Siddhartha College of Arts &
											Science General Studies, P.B.Siddhartha College of Arts &
											Science Member in Board of Studies in: Economics,
											S.D.M.S.Mahila Kalasala, Vijayawada Economics,
											J.K.C.College, Guntur Economics, V.S.R. & N.V.R.College,
											Tenali General Studies, K.B.N.College, Vijayawada
											Economics, Andhra Loyola College, Vijayawada Experience:
											32 Years
										</MDBCardText>
									</div>
								</div>
								<div className="d-flex justify-content-between align-items-center mb-4">
									<MDBCardText className="lead fw-normal mb-0">
										Recent photos
									</MDBCardText>
									<MDBCardText className="mb-0">
										<a href="#!" className="text-muted">
											Show all
										</a>
									</MDBCardText>
								</div>
								<MDBRow>
									<MDBCol className="mb-2">
										<MDBCardImage
											src="https://res.cloudinary.com/drbzxsbop/image/upload/v1695056221/p1_daditz.jpg"
											alt="image 1"
											className="w-100 rounded-3"
										/>
									</MDBCol>
									<MDBCol className="mb-2">
										<MDBCardImage
											src="https://res.cloudinary.com/drbzxsbop/image/upload/v1695056219/p2_szyryq.jpg"
											alt="image 2"
											className="w-100 rounded-3"
										/>
									</MDBCol>
								</MDBRow>
								<MDBRow className="g-2">
									<MDBCol className="mb-2">
										<MDBCardImage
											src="https://res.cloudinary.com/drbzxsbop/image/upload/v1695056219/p3_pqscne.jpg"
											alt="image 3"
											className="w-100 rounded-3"
										/>
									</MDBCol>
									<MDBCol className="mb-2">
										<MDBCardImage
											src="https://res.cloudinary.com/drbzxsbop/image/upload/v1695056362/Swimming_04_1318_fkfh0r.jpg"
											alt="image 4"
											className="w-100 rounded-3"
										/>
									</MDBCol>
								</MDBRow>
							</MDBCardBody>
						</MDBCard>
					</MDBCol>
				</MDBRow>
			</MDBContainer>
		</div>
	);
}
