import collegeLogo from "/src/assets/logo.png";
import no1 from "/src/assets/no1.png";
import Navbar from "/src/components/navbar/navbar";
import nirf from "/src/assets/nirf.png";
import iqac from "/src/assets/iqac.png";
import naac from "/src/assets/naac.png";
import aicte from "/src/assets/aicte.png";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { getDeptFromUrl } from "../../routes/helpers";
let Header = () => {
	const [deptName, setDeptName] = useState("default")
	const [deptRoute, setDeptRoute] = useState("")

	const getDeptName = (val) => {
		switch (val) {
			case "IT":
				setDeptName("Information Technology")
				setDeptRoute(val)
				break;
			case "Mech":
				setDeptName("Mechanical")
				setDeptRoute(val)
				break;
			default:
				setDeptName("default")
				setDeptRoute("")
		}
	}

	useEffect(() => {
		getDeptName(getDeptFromUrl())
	}, [getDeptFromUrl()])

	return (
		<>
			<header className="general-header flex justify-center items-center md:justify-between xl:justify-between">
				<div className="flex ml-10">
					<img
						className="college-logo  md:block mt-6 h-14 md:m-2 xl:h-36"
						src={collegeLogo}
					></img>
					<div className="college-desc flex flex-col justify-center items-center m-3 md:-mt-2 w-max">
						<div className="college-title text-primaryColor font-bold text-sm md:text-lg xl:text-3xl">
							BAPATLA ENGINEERING COLLEGE
						</div>
						<div className="text-xs font-bold xl:text-lg">(AUTONOMOUS)</div>
						<div className="text-xs xl:text-xl">
							Affiliated to Acharaya Nagarjuna University, Guntur
						</div>
						<div className="college-extra-info text-xs w-full flex justify-between">
							<div className="estd-date xl:text-base font-bold  ml-1">
								ESTD.1981
							</div>
							<div className="code xl:text-base font-bold  mr-1">
								EAMCET CODE: BECB
							</div>
						</div>
					</div>
				</div>
				{deptName === "default" ? <div className="flex mr-10">
					<img
						className="md:w-36 md:h-36 md:pr-5 md:block hidden cursor-pointer "
						src={nirf}
					></img>
					<img
						className=" h-36 w-56 pr-5 md:block hidden cursor-pointer\ "
						src={iqac}
					></img>
					<img
						className="h-36 w-48 pr-5 md:block hidden cursor-pointer"
						src={naac}
					></img>
					<img
						className="w-36 h-36 pr-5 md:block hidden cursor-pointer"
						src={aicte}
					></img>
				</div> : <div className="flex mx-auto"><h1>{deptName}</h1></div>}
				{/* <img
					className="college-logo hidden md:block md:h-20 md:-mt-4 md:mr-4 xl:h-32 xl:mr-4 xl:mt-2"
					src={no1}
				></img> */}
			</header>
			<nav className="w-full h-10 -mt-2 flex">
				{/* <nav className="bg-primaryColor w-full h-10 -mt-2 flex items-center"> */}
				<Navbar deptName={deptName} deptRoute={deptRoute} />
			</nav>
		</>
	);
};

export default Header;
