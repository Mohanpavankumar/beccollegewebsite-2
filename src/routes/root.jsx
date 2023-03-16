import Header from "/src/components/header/header.jsx";
import Footer from "/src/components/footer/footer.jsx";
import { Outlet, Link } from "react-router-dom";

export default function Root() {
	return (
		<>
			<Header />
			<button>
				<Link className=" m-2 p-2 border-2 border-black" to={"/Placements"}>
					Placements
				</Link>
			</button>
			<button>
				<Link
					className=" m-2 p-2 border-2 border-black"
					to={"/examination-cell"}
				>
					Examination cell staff
				</Link>
			</button>
			<button>
				<Link
					className=" m-2 p-2 border-2 border-black"
					to={"/exam-notifications"}
				>
					Exam notifications
				</Link>
			</button>
			<button>
				<Link
					className=" m-2 p-2 border-2 border-black"
					to={"/naac"}
				>
					Satuatory Data
				</Link>
			</button>
      <Link
					className=" m-2 p-2 border-2 border-black"
					to={"/departments/IT"}
				>	
					Departments
				</Link>
      </button>
      <button>
				<Link className=" m-2 p-2 border-2 border-black" to={"/exam-downloads"}>
					Exam downloads
				</Link>
			</button>
			<button>
				<Link className=" m-2 p-2 border-2 border-black" to={"/exam-login"}>
					Exam Login
				</Link>
			</button>
			<button>
				<Link className=" m-2 p-2 border-2 border-black" to={"/exam-results"}>
					Exam Results
				</Link>
			</button>
			<button>
				<Link
					className=" m-2 p-2 border-2 border-black"
					to={"/Facilities"}
				>
					Facilities
				</Link>
			</button>
			<Outlet />
			<Footer />
		</>
	);
}
