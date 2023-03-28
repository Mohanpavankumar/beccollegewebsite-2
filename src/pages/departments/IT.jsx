import React from "react";
//import Slides from "/src/components/Carousel/Slides.jsx"
import DeptCards from "/src/components/Cards/Card.jsx"
import Cards from "/src/components/Cards/Card.js"
import DeptSlides from "/src/components/Carousel/DeptSlides.jsx"
import '/src/pages/Placements/Placements.css'

const DeptFacilities = Cards.map((dataArg) => {
	return <DeptCards key={dataArg.CardId} item={dataArg} />;
});

export default function ItDepartment() {
	return (
		<>
			<DeptSlides />
			<div className="facilities shadow-md">
			<div className="Dept-Facilities ml-24">Facilities</div>
				<div className='line w-24 h-1 mb-2 ml-24' style={{background:"#0060b1"}}></div>
				<div className="DeptFacilities flex flex-wrap justify-center">
					{DeptFacilities}
				</div>
			</div>
			{/* <div className="container">
			<div className="row">
				<div className="col-md-3 col-sm-6">
					<div className="counter">
						<span className="counter-value">80</span>
						<h3>Ph.D Faculty</h3>
					</div>
				</div>
				<div className="col-md-3 col-sm-6">
					<div className="counter one">
						<span className="counter-value">100</span>
						<h3>Publications</h3>
					</div>
				</div>
				<div className="col-md-3 col-sm-6">
					<div className="counter two">
						<span className="counter-value">200</span>
						<h3>R&D Projects</h3>
					</div>
				</div>
				<div className="col-md-3 col-sm-6">
					<div className="counter three">
						<span className="counter-value">182</span>
						<h3>IPR's</h3>
					</div>
				</div>
			</div>
		</div>
		<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
		<script
			src="https://cdnjs.cloudflare.com/ajax/libs/waypoints/4.0.1/jquery.waypoints.min.js"
			integrity="sha256-jDnOKIOq2KNsQZTcBTEnsp76FnfMEttF6AV2DF2fFNE="
			crossorigin="anonymous"
		></script>
		<script
			src="https://cdnjs.cloudflare.com/ajax/libs/Counter-Up/1.0.0/jquery.counterup.min.js"
			integrity="sha256-JtQPj/3xub8oapVMaIijPNoM0DHoAtgh/gwFYuN5rik="
			crossorigin="anonymous"
		></script>
		<script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js"></script>
		<script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js"></script> */}
		</>
	);
}
