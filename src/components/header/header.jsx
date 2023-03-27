import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { getDeptFromUrl } from "../../routes/helpers";
import { deptNavDataIT, deptNavDataMech } from "../navbar/navigation";
import aicte from "/src/assets/aicte.png";
import iqac from "/src/assets/images.jpg";
import collegeLogo from "/src/assets/logo.png";
import naac from "/src/assets/naac.png";
import nirf from "/src/assets/nirf.png";
import Navbar from "/src/components/navbar/navbar";

let Header = () => {
	const [deptName, setDeptName] = useState("default")
	const [deptNavData, setDeptNavData] = useState([])
	const location = useLocation()

	const getDeptName = (val) => {
		switch (val) {
			case "IT":
				setDeptName("Information Technology")
				setDeptNavData(deptNavDataIT)
				break;
			case "Mech":
				setDeptName("Mechanical")
				setDeptNavData(deptNavDataMech)
				break;
			default:
				setDeptName("default")
				setDeptNavData([])
		}
	}

	useEffect(() => {
		getDeptName(getDeptFromUrl(location.pathname))
	}, [location.pathname])

	return (
		<div className="flex flex-col">
			<header className="general-header flex flex-wrap justify-center items-center md:mt-5 md:justify-around">
				<div className="col-span-2 flex">
					<Link to={"/"}>
						<img
							className="college-logo hidden md:block mt-6 h-14 md:m-2 xl:h-36"
							src={collegeLogo}
						></img>
					</Link>
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
				{deptName !== 'default' ?
					<div className="college-title text-footerHeading font-bold text-sm md:text-lg xl:text-3xl">
						{deptName}
					</div>
					: <div className="flex gap-4 col-span-2 place-content-center">
						<Link
							to={"/nirf"}
							className="rounded-full border-primaryColor border-4 w-12 h-12 md:w-16 md:h-16 xl:w-24 xl:h-24 flex justify-center items-center"
						>
							<img className="cursor-pointer" src={nirf} />
						</Link>
						<Link
							to={"/iqacPage"}
							className="rounded-full border-primaryColor border-4  p-2  w-12 h-12 md:w-16 md:h-16 xl:w-24 xl:h-24  flex justify-center items-center"
						>
							<img className="cursor-pointer rounded-full" src={iqac}></img>
						</Link>
						<Link
							to={"/naacPage"}
							className="rounded-full border-primaryColor border-4 w-12 h-12 md:w-16 md:h-16 xl:w-24 xl:h-24  flex justify-center items-center"
						>
							<img className="rounded-full cursor-pointer" src={naac}></img>
						</Link>
						<Link
							to={"/naacInfo"}
							className="rounded-full border-primaryColor border-4 p-2 w-12 md:w-16 md:h-16 h-12 xl:w-24 xl:h-24  flex justify-center items-center"
						>
							<img className="rounded-full cursor-pointer" src={aicte}></img>
						</Link>
					</div>
				}
			</header>

			<Navbar deptName={deptName} deptNavigationData={deptNavData} />
		</div>
	);
};

export default Header;