import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import {
	createBrowserRouter,
	RouterProvider,
	BrowserRouter,
	Route,
	Routes,
} from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";
import Root from "/src/routes/root.jsx";
import Homepage from "/src/pages/homepage.jsx";
import ExaminationCell from "/src/pages/examsResults/examination.jsx";
import ExamNotifs from "/src/pages/examsResults/examsNotifs.jsx";
import It from "/src/pages/departments/IT.jsx";
import Acheivements from "/src/pages/academics/acheivements.jsx"
import Aicte from "/src/pages/saturaotryData/aicte.jsx";
import NaacHome from "/src/pages/saturaotryData/naacHomepage.jsx";
import NaacPage from "/src/pages/saturaotryData/Naac.jsx";
import IqacPage from "./pages/saturaotryData/Iqac";
import Nirf from "/src/pages/saturaotryData/Nirf.jsx";
import ExamDownloads from "/src/pages/examsResults/exam-downloads.jsx";
import ExamLogin from "/src/pages/examsResults/examLogin.jsx";
import ExamResults from "/src/pages/examsResults/examResults.jsx";
import Placements from "/src/pages/Placements/placements.jsx";
import YearWisePlacements from "/src/pages/Placements/YearWisePlacements";
import BranchWisePlacements from "/src/pages/Placements/BranchWisePlacements";
import Facilities from "/src/pages/Facilities/Facilities.jsx";
import Library from "/src/pages/Facilities/Library.jsx";
import RoboticCentre from "/src/pages/Facilities/RoboticCentre.jsx";
import BoschRexrothCEO from "/src/pages/Facilities/BoschRexrothCEO.jsx";
import Cafteria from "/src/pages/Facilities/Cafteria.jsx";
import Transportation from "/src/pages/Facilities/Transportation.jsx";
import Hostels from "/src/pages/Facilities/Hostel.jsx";
import Sports from "/src/pages/Facilities/Sports.jsx";
import Others from "/src/pages/Facilities/Otherfacilities.jsx";
import Overview from "/src/pages/academics/academics";
import Programme from "/src/pages/academics/programme";
import Patents from "/src/pages/academics/patents";
import Rules from "/src/pages/academics/rules.jsx";
import Autonomous from "/src/pages/academics/autonomous";
import Institution from "/src/pages/academics/institution";
import ItStaff from "/src/pages/departments/staff.jsx";
import UploadStaffImage from "./pages/UploadStaffImage";
// import { FacilitiesChart } from "./components/facilities/facilities";

const router = createBrowserRouter([
	{
		path: "/",
		element: <Root />,
		children: [
			{ index: true, element: <Homepage /> },
			{
				path: "/Placements",
				element: <Placements />,
			},
			{
				path: "/examination-cell",
				element: <ExaminationCell />,
			},
			{
				path: "/exam-notifications",
				element: <ExamNotifs />,
			},
			{
				path: "/exam-downloads",
				element: <ExamDownloads />,
			},
			{
				path: "/exam-login",
				element: <ExamLogin />,
			},
			{
				path: "/exam-results",
				element: <ExamResults />,
			},
			{
				path: "/YearWise-Placements",
				element: <YearWisePlacements />,
			},
			{
				path: "/BranchWise-Placements",
				element: <BranchWisePlacements />,
			},
			{
				path: "/departments/IT",
				element: <It />,
			},
			{
				path: "/departments/ItStaff",
				element: <ItStaff />,
			},
			{
				path: "/Facilities",
				element: <Facilities />,
			},
			{
				path: "/Acheivements",
				element: <Acheivements />,
			},
			{
				path: "/Library",
				element: <Library />,
			},
			{
				path: "/RoboticCentre",
				element: <RoboticCentre />,
			},
			{
				path: "/BoschRexrothCEO",
				element: <BoschRexrothCEO />,
			},
			{
				path: "/Cafteria",
				element: <Cafteria />,
			},
			{
				path: "/Transportation",
				element: <Transportation />,
			},
			{
				path: "/Hostels",
				element: <Hostels />,
			},
			{
				path: "/Sports",
				element: <Sports />,
			},
			{
				path: "/Others",
				element: <Others />,
			},
			{
				path: "/Programme",
				element: <Programme />,
			},
			{
				path: "/Overview",
				element: <Overview />,
			},
			{
				path: "/Patents",
				element: <Patents />,
			},
			{
				path: "/Rules",
				element: <Rules />,
			},
			{
				path: "/Autonomous",
				element: <Autonomous />,
			},
			{
				path: "/Institution",
				element: <Institution />,
			},
			{
				path: "/Acheivements",
				element: <Acheivements />,
			},
				path: "/upload/staffimage",
				element: <UploadStaffImage />,
			},
			{
			path: "/f",
			element: <FacilitiesChart />
			}
		],
	},
]);

ReactDOM.createRoot(document.getElementById("root")).render(
	<>
		<React.StrictMode>
			<ChakraProvider>
				<RouterProvider router={router} />
			</ChakraProvider>
		</React.StrictMode>
	</>
);
