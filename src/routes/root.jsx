import Header from "/src/components/header/header.jsx";
import Footer from "/src/components/footer/footer.jsx";
import { Outlet, Link } from "react-router-dom";

export default function Root() {
	return (
		<>
			<div className="flex flex-col">
				<Header />
				<div
					className="flex flex-col"
					style={{ height: "90vh", overflowY: "scroll" }}
					id="listgroup-scroll"
				>
					<Outlet />
					<Footer />
				</div>
			</div>
		</>
	);
}