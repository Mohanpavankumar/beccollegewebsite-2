import React, { useState } from "react";
import "./Navbar.css";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import HamburgerMenu from "./burgermenu";
import { NavBarComponent } from "./NavBarComponent";
import { Box } from "@mui/system";
import MenuIcon from "@mui/icons-material/Menu";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import Drawercomp from "/src/components/drawercomponent.jsx";
// import HamburgerMenu from "./burgermenu";

function Navbar() {
	const [click, setClick] = useState(false);
	const [openDrawer, setOpenDrawer] = useState(false);
	const handleClick = () => {};
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

	return <>{isMobile ? <HamburgerMenu /> : <NavBarComponent />}</>;
}

export default Navbar;
