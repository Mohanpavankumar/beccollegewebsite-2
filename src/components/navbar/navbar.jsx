import React, { useState } from "react";
import "./Navbar.css";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import HamburgerMenu from "./burgermenu";
import { NavBarComponent } from "./NavBarComponent";

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
