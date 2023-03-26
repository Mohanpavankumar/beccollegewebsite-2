import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { navigationData } from "./navigation";
import { NavBarList } from "./navBarList";

export const NavBarComponent = () => {
	return (
		<Navbar bg="light">
			<Nav className="custom-navbar font-bold text-lg mx-auto">
				<NavBarList nodes={navigationData} />
			</Nav>
		</Navbar>
	);
};
