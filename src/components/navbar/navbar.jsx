import React, { useState } from "react";
import "./Navbar.css";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";
import { Menu, MenuItem, MenuButton, MenuList } from "@chakra-ui/react";
import { FaChevronDown } from "react-icons/fa";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import { Button } from "@mui/material";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import { Box } from "@mui/system";
import MenuIcon from "@mui/icons-material/Menu";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import Drawercomp from "/src/components/drawercomponent.jsx";
import HamburgerMenu from "./burgermenu";
import { NavBarComponent } from "./NavBarComponent";

function Navbar() {
	const [click, setClick] = useState(false);
	const [openDrawer, setOpenDrawer] = useState(false);
	const handleClick = () => { };
	const theme = useTheme();
	const isMobile = useMediaQuery(theme.breakpoints.down("md"));

	const [state, setState] = React.useState({
		right: false,
	});

	const toggleDrawer = (anchor, open) => (event) => {
		if (
			event.type === "keydown" &&
			(event.key === "Tab" || event.key === "Shift")
		) {
			return;
		}

		setState({ ...state, [anchor]: open });
	};

	const list = (anchor) => <div> hello </div>;

	return (
		<>
			{isMobile ? (
				<HamburgerMenu />
			) : (
				/* {["right"].map((anchor) => (
		  <React.Fragment key={anchor}>
			<Button onClick={toggleDrawer(anchor, true)}>{anchor}</Button>
			<Drawer
			  anchor={anchor}
			  open={state[anchor]}
			  onClose={toggleDrawer(anchor, false)}
			>
			  {list(anchor)}
			</Drawer>
		  </React.Fragment>
		))} */
				// <Drawercomp />
				// <>
				// </>
				// 		<nav className="navbar font-bold text-primaryColor mx-auto">
				// 			<div className="navbar-container">
				// 				{/* <Link to="/" className="navbar-logo">
				// 				Logo
				// 			</Link> */}
				// 				<div className="menu-icon" onClick={handleClick}>
				// 					{click ? <FaTimes /> : <FaBars />}
				// 				</div>
				// 				<div className="gap-10 ml-10 hidden md:flex">
				// 					<Menu>
				// 						<MenuButton>Home</MenuButton>
				// 					</Menu>
				// 					<Menu>
				// 						<MenuButton>
				// 							Departments <ArrowDropDownIcon />
				// 						</MenuButton>
				// 						<MenuList style={{ display: "flex", flexDirection: "column", flexWrap: "wrap" }}>
				// 							<MenuItem as="a" href="#">
				// 								Civil Engineering
				// 							</MenuItem>
				// 							<MenuItem as="a" href="#">
				// 								Computer Science & Engineering
				// 							</MenuItem>
				// 							<MenuItem as="a" href="#">
				// 								Computer Science and Engineering (Artificial intelligence
				// 								and Machine Learning)
				// 							</MenuItem>
				// 							<MenuItem as="a" href="#">
				// 								Cyber Security
				// 							</MenuItem>
				// 							<MenuItem as="a" href="#">
				// 								Data Science
				// 							</MenuItem>
				// 							<MenuItem as="a" href="#">
				// 								Chemistry
				// 							</MenuItem>
				// 							<MenuItem as="a" href="#">
				// 								English
				// 							</MenuItem>
				// 							<MenuItem as="a" href="#">
				// 								MCA
				// 							</MenuItem>
				// 							<MenuItem as="a" href="#">
				// 								Mathematics
				// 							</MenuItem>
				// 							<MenuItem as="a" href="#">
				// 								Physics
				// 							</MenuItem>
				// 							<MenuItem as="a" href="#">
				// 								Electrical & Electronics Engineering
				// 							</MenuItem>
				// 							<MenuItem as="a" href="#">
				// 								Electronics & Communication Engineering
				// 							</MenuItem>
				// 							<MenuItem as="a" href="#">
				// 								Electronics and Instrumentation Engineering
				// 							</MenuItem>

				// 							<MenuItem as="a">
				// 								<Link to={"/departments/IT"}>IT</Link>
				// 							</MenuItem>
				// 							<MenuItem as="a" href="#">
				// 								Mechanical Engineering
				// 							</MenuItem>
				// 						</MenuList>
				// 					</Menu>
				// 					<Menu>
				// 						<MenuButton>Facilities</MenuButton>
				// 					</Menu>
				// 					<Menu>
				// 						<MenuButton>
				// 							Academics <ArrowDropDownIcon />
				// 						</MenuButton>
				// 						<MenuList>
				// 							<MenuItem as="a" href="#">
				// 								Overview
				// 							</MenuItem>
				// 							<MenuItem as="a" href="#">
				// 								Courses Offered
				// 							</MenuItem>
				// 							<MenuItem as="a" href="#">
				// 								Patents
				// 							</MenuItem>

				// 							<MenuItem as="a" href="#">
				// 								Rules & Regulations
				// 							</MenuItem>
				// 							<MenuItem as="a" href="#">
				// 								Antonomous Policies
				// 							</MenuItem>
				// 							<MenuItem as="a" href="#">
				// 								Institution
				// 							</MenuItem>
				// 						</MenuList>
				// 					</Menu>
				// 					<Menu>
				// 						<MenuButton>
				// 							Statutory Data <ArrowDropDownIcon />
				// 						</MenuButton>
				// 						<MenuList>
				// 							<MenuItem as="a" href="#">
				// 								Accrediational Approvals
				// 							</MenuItem>
				// 							<MenuItem as="a" href="#">
				// 								Committees
				// 							</MenuItem>
				// 							<MenuItem as="a" href="#">
				// 								ARIIA Reports
				// 							</MenuItem>
				// 							<MenuItem as="a" href="#">
				// 								BOS(Board of studies)
				// 							</MenuItem>
				// 							<MenuItem as="a" href="#">
				// 								RTI Act 2005
				// 							</MenuItem>
				// 						</MenuList>
				// 					</Menu>
				// 					<Menu>
				// 						<MenuButton>
				// 							Exams & Results <ArrowDropDownIcon />
				// 						</MenuButton>
				// 						<MenuList>
				// 							<MenuItem as="a" href="#">
				// 								Examination Cell
				// 							</MenuItem>
				// 							<MenuItem as="a" href="#">
				// 								Exam Notices
				// 							</MenuItem>
				// 							<MenuItem as="a" href="#">
				// 								Education Verification
				// 							</MenuItem>
				// 							<MenuItem as="a" href="#">
				// 								Student Marks
				// 							</MenuItem>
				// 							<MenuItem as="a" href="#"></MenuItem>
				// 							<MenuItem as="a" href="#">
				// 								Payment of examination fee
				// 							</MenuItem>
				// 						</MenuList>
				// 					</Menu>
				// 					<Menu>
				// 						<MenuButton
				// 							as="a"
				// 							href="https://becalumni.org/"
				// 							target={"_blank"}
				// 						>
				// 							Placements
				// 						</MenuButton>
				// 					</Menu>
				// 					<Menu>
				// 						<MenuButton
				// 							as="a"
				// 							href="https://becalumni.org/"
				// 							target={"_blank"}
				// 						>
				// 							Alumni
				// 						</MenuButton>
				// 					</Menu>
				// 					<Menu>
				// 						<MenuButton>
				// 							Login <ArrowDropDownIcon />
				// 						</MenuButton>
				// 						<MenuList>
				// 							<MenuItem as="a" href="#">
				// 								Link 1
				// 							</MenuItem>
				// 							<MenuItem as="a" href="#">
				// 								Link 2
				// 							</MenuItem>
				// 						</MenuList>
				// 					</Menu>
				// 					<Menu>
				// 						<MenuButton>
				// 							Reach us <ArrowDropDownIcon />
				// 						</MenuButton>
				// 						<MenuList>
				// 							<MenuItem as="a" href="#">
				// 								Link 1
				// 							</MenuItem>
				// 							<MenuItem as="a" href="#">
				// 								Link 2
				// 							</MenuItem>
				// 						</MenuList>
				// 					</Menu>
				// 				</div>
				// 				{/* <ul className={click ? "nav-menu active" : "nav-menu"}>
				//     <li className="nav-item">
				//       <Link to="/about" className="nav-links" onClick={handleClick}>
				//         Departments
				//       </Link>
				//     </li>
				//     <li className="nav-item">
				//       <Link to="/services" className="nav-links" onClick={handleClick}>
				//         Facilities
				//       </Link>
				//     </li>
				//     <li className="nav-item">
				//       <Link to="/contact" className="nav-links" onClick={handleClick}>
				//         Academics
				//       </Link>
				//     </li>
				//     <li className="nav-item">
				//       <Link to="/contact" className="nav-links" onClick={handleClick}>
				//         Exams & Results
				//       </Link>
				//     </li>
				//     <li className="nav-item">
				//       <Link to="/contact" className="nav-links" onClick={handleClick}>
				//         Placements
				//       </Link>
				//     </li>
				//     <li className="nav-item">
				//       <a
				//         href="https://becalumni.org/"
				//         className="nav-links cursor-pointer"
				//       >
				//         Alumni
				//       </a>
				//     </li>
				//     <li className="nav-item">
				//       <Link to="/contact" className="nav-links" onClick={handleClick}>
				//         Login
				//       </Link>
				//     </li>
				//     <li className="nav-item">
				//       <Link to="/contact" className="nav-links" onClick={handleClick}>
				//         Reach us
				//       </Link>
				//     </li>
				//   </ul> */}
				// 			</div>
				// 		</nav>
				<NavBarComponent />
			)}
		</>
	);
}

export default Navbar;
