import React from "react";
import { MDBContainer, MDBCol, MDBRow } from "mdb-react-ui-kit";
import './Gallary.css'
import { LazyLoadImage } from 'react-lazy-load-image-component';
export default function Gallary() {
	return (
		<MDBRow
			className="bg-white"
			style={{
				width: "99.7vw",
				margin:"0 auto"
			}}
		>
			<MDBCol lg={4} md={12} className="mb-4 mb-lg-0">
				  <LazyLoadImage
					src="https://res.cloudinary.com/drbzxsbop/image/upload/v1695891335/g3-min_xh8de0.jpg"
					className="w-100 shadow-1-strong rounded mb-4"
					alt="Event 1"
					 loading="lazy"
              effect="blur"
           
				/>

				<LazyLoadImage
			
					// src="https://res.cloudinary.com/drbzxsbop/image/upload/v1694756296/g2_mgmxa0.jpg"
					src="https://res.cloudinary.com/drbzxsbop/image/upload/v1695891336/g4-min_mftxbc.jpg"
					className="w-100 shadow-1-strong rounded mb-4"
					alt="Event 2"
							 loading="lazy"
              effect="blur"
				/>
			</MDBCol>

			<MDBCol lg={4} className="mb-4 mb-lg-0">
				  <LazyLoadImage
					src="https://res.cloudinary.com/drbzxsbop/image/upload/v1695891338/g6-min_uu2lit.jpg"
					className="w-100 shadow-1-strong rounded mb-4"
					alt="Event 3"
							 loading="lazy"
              effect="blur"
				/>

				  <LazyLoadImage
					src="https://res.cloudinary.com/drbzxsbop/image/upload/v1695891338/g5-min_kmmnvg.jpg"
					className="w-100 shadow-1-strong rounded mb-4"
					alt="Event 4"
							 loading="lazy"
              effect="blur"
				/>
			</MDBCol>

			<MDBCol lg={4} className="mb-4 mb-lg-0">
				<LazyLoadImage
					
					src="https://res.cloudinary.com/drbzxsbop/image/upload/v1695891339/g7-min_degg5j.jpg"
					className="w-100 shadow-1-strong rounded mb-4"
					alt="Event 5"
							 loading="lazy"
              effect="blur"
				/>

				<LazyLoadImage
					
					src="https://res.cloudinary.com/drbzxsbop/image/upload/v1695891340/g1-min_ghlxpn.jpg"
					className="w-100 shadow-1-strong rounded mb-4"
				    alt="Event 6"
							 loading="lazy"
              effect="blur"
				/>
			</MDBCol>
			<MDBCol lg={4} className="mb-4 mb-lg-0">
				  <LazyLoadImage
					src="https://res.cloudinary.com/drbzxsbop/image/upload/v1695891340/g8-min_kcpxhh.jpg"
					className="w-100 shadow-1-strong rounded mb-4"
					alt="Event 7"
							 loading="lazy"
              effect="blur"
				/>

				  <LazyLoadImage
					src="https://res.cloudinary.com/drbzxsbop/image/upload/v1695891340/g2-min_tqpfur.jpg"
					className="w-100 shadow-1-strong rounded mb-4"
					alt="Event 8"
							 loading="lazy"
              effect="blur"
				/>
			</MDBCol>
			<MDBCol lg={4} className="mb-4 mb-lg-0">
				  <LazyLoadImage
					src="https://res.cloudinary.com/drbzxsbop/image/upload/v1695891342/g9-min_hig4xn.jpg"
					className="w-100 shadow-1-strong rounded mb-4"
					alt="Event 9"
							 loading="lazy"
              effect="blur"
				/>

				  <LazyLoadImage
					src="https://res.cloudinary.com/drbzxsbop/image/upload/v1695891343/g10-min_cot1q8.jpg"
					className="w-100 shadow-1-strong rounded mb-4"
					alt="Event 10"
							 loading="lazy"
              effect="blur"
				/>
			</MDBCol>
			<MDBCol lg={4} className="mb-4 mb-lg-0">
				  <LazyLoadImage
					src="https://res.cloudinary.com/drbzxsbop/image/upload/v1695891344/g11-min_k5tqvk.jpg"
					className="w-100 shadow-1-strong rounded mb-4"
					alt="Event 11"
		 loading="lazy"
              effect="blur"
				/>

			  <LazyLoadImage
					src="https://res.cloudinary.com/drbzxsbop/image/upload/v1695891345/g12-min_zlve7p.jpg"
					className="w-100 shadow-1-strong rounded mb-4"
					alt="Event 12"
							 loading="lazy"
              effect="blur"
				/>
			</MDBCol>
		</MDBRow>
	);
}

