import React, { useState } from "react";
import "./Navbar.css";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";
function Navbar() {
	const [click, setClick] = useState(false);

	const handleClick = () => setClick(!click);

	return (
		<>
			<nav className="navbar font-bold text-primaryColor">
				<div className="navbar-container">
					<Link to="/" className="navbar-logo">
						Logo
					</Link>
					<div className="menu-icon" onClick={handleClick}>
						{click ? <FaTimes /> : <FaBars />}
					</div>
					<ul className={click ? "nav-menu active" : "nav-menu"}>
						<li className="nav-item">
							<Link to="/" className="nav-links" onClick={handleClick}>
								About us
							</Link>
						</li>
						<li className="nav-item">
							<Link to="/about" className="nav-links" onClick={handleClick}>
								Departments
							</Link>
						</li>
						<li className="nav-item">
							<Link to="/facilities" className="nav-links" onClick={handleClick}>
								Facilities
							</Link>
						</li>
						<li className="nav-item">
							<Link to="/contact" className="nav-links" onClick={handleClick}>
								Academics
							</Link>
						</li>
						<li className="nav-item">
							<Link to="/contact" className="nav-links" onClick={handleClick}>
								Students
							</Link>
						</li>
						<li className="nav-item">
							<Link to="/contact" className="nav-links" onClick={handleClick}>
								Governance
							</Link>
						</li>
						<li className="nav-item">
							<Link to="/contact" className="nav-links" onClick={handleClick}>
								Exams & Results
							</Link>
						</li>
						<li className="nav-item">
							<Link to="/contact" className="nav-links" onClick={handleClick}>
								Admissions
							</Link>
						</li>
						<li className="nav-item">
							<Link to="/contact" className="nav-links" onClick={handleClick}>
								Placements
							</Link>
						</li>
						<li className="nav-item">
							<a
								href="https://becalumni.org/"
								className="nav-links cursor-pointer"
							>
								Alumni
							</a>
						</li>
						<li className="nav-item">
							<Link to="/contact" className="nav-links" onClick={handleClick}>
								Research
							</Link>
						</li>
						<li className="nav-item">
							<Link to="/contact" className="nav-links" onClick={handleClick}>
								Login
							</Link>
						</li>
						<li className="nav-item">
							<Link to="/contact" className="nav-links" onClick={handleClick}>
								Reach us
							</Link>
						</li>
					</ul>
				</div>
			</nav>
		</>
	);
}

export default Navbar;
