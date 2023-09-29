import Navbar from "./components/Navbar";
import { ToastContainer, toast } from "react-toastify";
import ScrollToTop from "./components/ScrollToTop";
import  Footer  from "./components/Footer";
import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Prinicipal from "./components/Administration/Principal";
import VicePrincipal from "./components/Administration/VicePrincipal";
import Dean from "./components/Administration/Dean";
import IOAC from "./components/Administration/IQAC";
import FinanceOfficer from "./components/Administration/FinanceOfficer";
import Profile from "./components/Profile";
import Gallary from "./components/Gallary";
import HowToReach from "./components/HowToReach";
import Component from "./components/Component";
import English from "./components/Department/language/English";
import Results from "./components/Results";
import "react-toastify/dist/ReactToastify.css";
import ResultFrame3 from "./components/ResultFrame3";
import ResultFrame1 from "./components/ResultFrame1";
import ResultsFrame2022 from "./components/ResultsFrame2022";
import Register from "./components/Register";
import Signin from "./components/Signin";
import ImgUploader from "./components/imageComponent/ImgUploader";
import Blitz from "./components/Blitz";
import Hindi from "./components/Department/language/Hindi";
import Zoology from "./components/Department/science/Zoology";
import Stat from "./components/Department/science/Stat";
import Telegu from "./components/Department/language/Telegu";
import Physics from "./components/Department/science/Physics";
import Electronics from "./components/Department/science/Electronics";
import Cs from "./components/Department/science/Cs";
import Chemestry from "./components/Department/science/Chemestry";
import Botany from "./components/Department/science/Botany";
import Math from "./components/Department/science/Math";
import Business from "./components/Department/arts/Business";
import Commerce from "./components/Department/arts/Commerce";
import Economics from "./components/Department/arts/Economics";
import Contact from "./components/Contact";
import Admission from "./components/Admission";
import UgPapers from "./components/UgPapers";
import Modal  from "./components/Modal";
import { LoginContext } from "./context/LoginContext";
import GlobalStyles from "./components/GlobalStyles";
import { Spinner } from "@material-tailwind/react";
import { Loading } from "./components/Loading";
import axios from "axios";
function App() {
	const [modalOpen, setModalOpen] = useState(false)
	const [loading,setLoading]= useState(false)


useEffect(() => {
  if (loading) {
    const timer = setTimeout(() => {
toast.error("Something went wrong try after sometime");
		setLoading(false);
    }, 45000); // 45 seconds in milliseconds

   
	  return () => clearTimeout(timer);
  }
}, [loading]);
	return (
		<BrowserRouter>
			<GlobalStyles />
			<LoginContext.Provider value={{ setModalOpen,setLoading,loading }}>
				<ScrollToTop />
				<Navbar />
				<Loading show={loading} />
				
				<Routes>
					<Route element={<Home />} path="/"></Route>
					<Route element={<Prinicipal />} path="/principal"></Route>
					<Route element={<Register />} path="/register"></Route>
					<Route element={<VicePrincipal />} path="/viceprincipal"></Route>
					<Route element={<Dean />} path="/dean"></Route>
					<Route element={<IOAC />} path="/IQAC"></Route>
					<Route element={<FinanceOfficer />} path="/financeofficer"></Route>
					<Route element={<Profile />} path="/profile"></Route>
					<Route element={<Gallary />} path="/gallary"></Route>
					<Route element={<HowToReach />} path="/howtoreach"></Route>
					<Route element={<Component />} path="/comp"></Route>
					<Route element={<English />} path="/department/english"></Route>
					<Route element={<Results />} path="/results"></Route>
					<Route element={<ResultFrame3 />} path="/results2021/3"></Route>
					<Route element={<ResultFrame1 />} path="/results2021/1"></Route>
					<Route element={<ResultsFrame2022 />} path="/results2022/1"></Route>
					<Route element={<Signin />} path="/signin"></Route>
					<Route element={<ImgUploader />} path="/api/get"></Route>
					<Route element={<Blitz />} path="/blitz"></Route>
					<Route element={<Hindi />} path="/department/hindi"></Route>
					<Route element={<Telegu />} path="/department/telegu"></Route>
					<Route element={<Zoology />} path="/department/zoology"></Route>
					<Route element={<Stat />} path="/department/stat"></Route>
					<Route element={<Physics />} path="/department/physics"></Route>
					<Route element={<Math />} path="/department/math"></Route>
					<Route
						element={<Electronics />}
						path="/department/electronics"
					></Route>
					<Route element={<Cs />} path="/department/computerscience"></Route>
					<Route element={<Chemestry />} path="/department/chemestry"></Route>
					<Route element={<Botany />} path="/department/botany"></Route>
					<Route element={<Business />} path="/department/business"></Route>
					<Route element={<Commerce />} path="/department/commerce"></Route>
					<Route element={<Economics />} path="/department/economics"></Route>
					<Route element={<Contact />} path="/contactus"></Route>
					<Route element={<Admission />} path="/admission"></Route>
					<Route element={<UgPapers />} path="/ugpapers"></Route>
				</Routes>
				<Footer />
				<ToastContainer theme="dark" />
			</LoginContext.Provider>
			{modalOpen && <Modal setModalOpen={setModalOpen} />}
		</BrowserRouter>
	);
}

export default App;






