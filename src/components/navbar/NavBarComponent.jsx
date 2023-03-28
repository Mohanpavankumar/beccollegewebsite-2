import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { navigationData } from "./navigation";
import { NavBarList } from "./navBarList";


export const NavBarComponent = (props) => {
	return (
		<Navbar bg="light">
			<Nav className="custom-navbar font-bold text-lg mx-auto">
				<NavBarList nodes={!props.deptName || props.deptName === "default" ? navigationData : props.deptNavigationData} />
			</Nav>

		</Navbar>
	);
};
