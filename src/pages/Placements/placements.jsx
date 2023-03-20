import '/src/pages/Placements/Placements.css'
import {Link} from 'react-router-dom';
import Placementsteam from '../../Data/Placementsteam.js';
import Staff from "/src/components/staff/staff.jsx";
import RegistrationForm from "/src/components/RegistrationForms/Form.jsx"
import Devops from "/images/Devops.jpg"
import Engineersday from "/images/EngineersDay.jpg"
import Becdetails from "/images/BecDetails.jpg"
import GraduationCeremony from "/images/GraduationDayCeremony.jpg"

const PlacementsStaff = Placementsteam.map((dataArg) => {
	return <Staff key={dataArg.staffId} item={dataArg} />;
});

let Placements=() =>{
    return(
		<>
			<div
				id="default-carousel"
				className="relative mt-3"
				data-carousel="slide"
			>
				<div className="relative h-40 overflow-hidden md:h-96">
					<div className="hidden duration-700 ease-in-out" data-carousel-item>
						<span className="absolute text-2xl font-semibold text-white -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 sm:text-3xl dark:text-gray-800">
							First Slide
						</span>
						<img
							src={Becdetails}
							className="absolute lg:h-96 block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
							alt="..."
						/>
					</div>
					<div className="hidden duration-700 ease-in-out" data-carousel-item>
						<img
							src={Devops}
							className="absolute lg:h-96 block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
							alt="..."
						/>
					</div>
					<div className="hidden duration-700 ease-in-out" data-carousel-item>
						<img
							src={Engineersday}
							className="absolute block lg:h-96 w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
							alt="..."
						/>
					</div>
					<div className="hidden duration-700 ease-in-out" data-carousel-item>
						<img
							src={GraduationCeremony}
							className="absolute lg:h-96 block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
							alt="..."
						/>
					</div>
				</div>
				<div className="absolute z-30 flex space-x-3 -translate-x-1/2 bottom-5 left-1/2">
					<button
						type="button"
						className="w-3 h-3 rounded-full"
						aria-current="false"
						aria-label="Slide 1"
						data-carousel-slide-to="0"
					></button>
					<button
						type="button"
						className="w-3 h-3 rounded-full"
						aria-current="false"
						aria-label="Slide 2"
						data-carousel-slide-to="1"
					></button>
					<button
						type="button"
						className="w-3 h-3 rounded-full"
						aria-current="false"
						aria-label="Slide 3"
						data-carousel-slide-to="2"
					></button>
					<button
						type="button"
						className="w-3 h-3 rounded-full"
						aria-current="false"
						aria-label="Slide 4"
						data-carousel-slide-to="3"
					></button>
					<button
						type="button"
						className="w-3 h-3 rounded-full"
						aria-current="false"
						aria-label="Slide 5"
						data-carousel-slide-to="4"
					></button>
					<button
						type="button"
						className="w-3 h-3 rounded-full"
						aria-current="false"
						aria-label="Slide 6"
						data-carousel-slide-to="5"
					></button>
				</div>
				<button
					type="button"
					className="absolute top-0 left-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
					data-carousel-prev
				>
					<span className="inline-flex items-center justify-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-black dark:group-focus:ring-gray-800/70 group-focus:outline-none">
						<svg
							aria-hidden="true"
							className="w-5 h-5 text-white sm:w-6 sm:h-6 dark:text-gray-800"
							fill="none"
							stroke="currentColor"
							viewBox="0 0 24 24"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
								d="M15 19l-7-7 7-7"
							></path>
						</svg>
						<span className="sr-only">Previous</span>
					</span>
				</button>
				<button
					type="button"
					className="absolute top-0 right-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
					data-carousel-next
				>
					<span className="inline-flex items-center justify-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-black dark:group-focus:ring-gray-800/70 group-focus:outline-none">
						<svg
							aria-hidden="true"
							className="w-5 h-5 text-white sm:w-6 sm:h-6 dark:text-gray-800"
							fill="none"
							stroke="currentColor"
							viewBox="0 0 24 24"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
								d="M9 5l7 7-7 7"
							></path>
						</svg>
						<span className="sr-only">Next</span>
					</span>
				</button>
			</div>

<div className="row w-full pt-3">
<div className="col-3">
	<div className="nav flex-column nav-pills placementmenuitems" id="tab" role="tablist" aria-orientation="vertical">
		<div className="Training-Placements-Menu">Traininng and Placements Menu</div>
      	<a className="nav-link" id="aboutplacements-tab" data-toggle="pill" href="#aboutplacements" role="tab" aria-controls="aboutplacements" aria-selected="true">About Placements</a>
      	<a className="nav-link" id="trainingandplacementsteam-tab" data-toggle="pill" href="#trainingandplacementsteam" role="tab" aria-controls="trainingandplacementsteam" aria-selected="false">Training and Placements Team</a>
      	<a className="nav-link" id="notifications-tab" data-toggle="pill" href="#notifications" role="tab" aria-controls="notifications" aria-selected="false">Notifications</a>
      	<a className="nav-link" id="trainingregistration-tab" data-toggle="pill" href="#trainingregistration" role="tab" aria-controls="trainingregistration" aria-selected="false">Training Registration</a>
		{/* <a className="nav-link" id="placementgallery-tab" data-toggle="pill" href="#placementgallery" role="tab" aria-controls="placementgallery" aria-selected="false">Placement Gallery</a> */}
		<Link className="nav-link" to={"/YearWise-Placements"} >YearWise Placements</Link>
		<Link className="nav-link" to={"/BranchWise-Placements"} >BranchWise Placements</Link>
	</div>
</div>
	<div className="left-navcontent">
		<div className="col pl-3">
    		<div className="tab-content" id="tabContent">
			<div className="tab-pane fade show in active" style={{width:"fit-content"}} id="aboutplacements" role="tabpanel" aria-labelledby="aboutplacements-tab">
			<div className='aboutplacements pb-1'>About Placements</div>
			<div className='line w-14 h-1 mb-2' style={{background:"#0060b1"}}></div>
				<div className='Objective pb-1'>Objective</div>
				<div className='line w-14 h-1' style={{background:"#0060b1"}}></div>
				<div>The Objective of the Training and Placement Cell is </div>
				<div className='Functions pb-1'>Functions</div>
				<div className='line w-14 h-1' style={{background:"#0060b1"}}></div>
					<li>
					To be the mentor of students to frame their Carriers
					</li>
					<li>
					To be the mentor of students to frame their Carriers
					</li>
					<li>
					To be the mentor of students to frame their Carriers
					</li>
				<div className='WeareHonest pb-1'>We are Honest</div>
				<div className='line w-14 h-1' style={{background:"#0060b1"}}></div>
					<div>In an endeavor to do justiceto each of the company that is 
						choosing their engineering and managerial human resources from us, 
						the college.
					</div>
					<div>In an endeavor to do justiceto each of the company that is 
						choosing their engineering and managerial human resources from us, 
						the college.
					</div>
			</div>
			<div className="tab-pane fade" id="trainingandplacementsteam" role="tabpanel" aria-labelledby="trainingandplacementsteam-tab">
			<div className='TrainingAndPlacementsTeam pb-1 md:ml-28 xl:ml-0'>Training & Placement Team</div>
			<div className='line w-14 h-1 mb-2 md:ml-28 xl:ml-0' style={{background:"#0060b1"}}></div>
				<div className="staff-container grid grid-flow-row justify-center gap-6 mt-2 mb-2 md:grid-cols-1 md:ml-32 md:justify-items-center lg:grid-cols-1 xl:ml-0 xl:grid-cols-2 2xl:grid-cols-2">{PlacementsStaff}</div>
			</div>
			<div className="tab-pane fade md:ml-28 xl:ml-0" id="notifications" role="tabpanel" aria-labelledby="notifications-tab">
				<div className='notifications pb-1'>Training & Placement Notifications</div>
				<div className='line w-14 h-1' style={{background:"#0060b1"}}></div>
				<div>
					<a href=""><li>Attended students  for training</li></a>
					<a href=""><li>Schedule for training</li></a>
					<a href=""><li>Campus Placement Drive is on 10/11/2022</li></a>
					<a href=""><li>Campus Placement Drive is on 10/11/2022</li></a>
					<a href=""><li>Placements Registration</li></a>
				</div>
			</div>
			<div className="tab-pane fade " id="trainingregistration" role="tabpanel" aria-labelledby="trainingregistration-tab">
				<div className='TrainingRegistration pb-1 md:ml-28 xl:ml-0'>Training Registration Form</div>
				<div className='line w-14 h-1 md:ml-28 xl:ml-0' style={{background:"#0060b1"}}></div>
				<div className='flex max-h-96 md:ml-28 xl:ml-0'><RegistrationForm /></div> 
			</div>
			{/* <div className="tab-pane fade" id="placementgallery" role="tabpanel" aria-labelledby="placementgallery-tab">
			<div className='PlacementGallery pb-1'>placement Gallery</div>
				<div className='line w-14 h-1' style={{background:"#0060b1"}}></div>
			</div> */}
			<div className="tab-pane fade" id="yearWiseplacements" role="tabpanel" aria-labelledby="yearWiseplacements-tab">
				This page can be used to yearWiseplacements
			</div>
			<div className="tab-pane fade" id="branchWiseplacements" role="tabpanel" aria-labelledby="branchWiseplacements-tab">
				This page can be used to branchWiseplacements 
			</div>  
			</div>
  		</div>
	</div>
</div>


			<div className='Recruitersdiv mt-5 flex'>
			<div className='flex h-26'>
			<div className='Recruiters' style={{background:"#0060b1"}}>Our Recruiters</div>
			</div>
			<div className='marqueeplacementimages'>
				<marquee className='marquee' speed={30}>
					<div className='marqueeplacementimages flex'>
						<img className='mr-6 w-36 h-24' src="src\assets\tcs.png" alt="" />
						<img className='mr-6 w-36 h-24' src="src\assets\Infosys.jpg" alt="" />
						<img className='mr-6 w-36 h-24' src="src\assets\wipro.png" alt="" />
						<img className='mr-6 w-36 h-24' src="src\assets\ibm.png" alt="" />
						<img className='mr-6 w-36 h-24' src="src\assets\techmahindra.png" alt="" />
						<img className='mr-6 w-36 h-24' src="src\assets\snovasys.png" alt="" />
						<img className='mr-6 w-36 h-24' src="src\assets\bosch.png" alt="" />
						<img className='mr-6 w-36 h-24' src="src\assets\amararaja.png" alt="" />
						<img className='mr-6 w-36 h-24' src="src\assets\efftronics.png" alt="" />
					</div>
				</marquee>
			</div>
			</div>

			

			
		</>
    )}

export default Placements