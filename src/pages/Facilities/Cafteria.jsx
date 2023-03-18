
import "/src/pages/Facilities/Facilities.css";
import Slides4 from "/src/components/Carousel/Cafteria.jsx";
import tickmark from "/src/assets/tick-mark.png";


export default function Facilities(){
    
		return (
		 
		 <div >
				<div >
					<div className=" w-full h-14 mt-2 text-5xl text-blue-800 font-sans flex justify-center items-center">Cafteria</div>
				    <Slides4 />
			   </div>
			   <div className="row w-full pt-3 px-24">
						<div className="col-3">
							<div className="nav flex-column nav-pills librarymenuitems " id="tab" role="tablist" aria-orientation="vertical">
								<a className="nav-link" id="canteenhome-tab" data-toggle="pill" href="#canteenhome" role="tab" aria-controls="canteenhome" aria-selected="true">Canteen Home</a>
							</div>
						</div>
						<div className="left-navcontent">
							<div className="col">
								<div className="tab-content" id="tabContent">
										<div className="tab-pane fade show in active" style={{width:"fit-content"}} id="canteenhome" role="tabpanel" aria-labelledby="canteenhome-tab">
										
											<div className=" w-full mt-3">
													<div className="flex mt-4 ">
														<img src={tickmark} className="w-4 h-4 mt-1"></img>
															<p className="text-justify text-lg ml-3">
															Bapatla Engineering College has a spacious canteen with latest equipment and hygenic environment which provides quality food and prompts service to needs of all the students and all the staff.<br></br>
															</p>
													</div>
													<div className="flex mt-4 ">
														<img src={tickmark} className="w-4 h-4 mt-1"></img>
															<p className="text-justify text-lg ml-3">
															The Canteen  is available inside the campus to provide food at subsidized rates for the staff and students.<br></br>
														</p>
													</div>
													<div className="flex mt-4 ">
														<img src={tickmark} className="w-4 h-4 mt-1"></img>
															<p className="text-justify text-lg ml-3">
															The canteen is opend at 9.00am to 3.00pm. The wide variety of food is provided and students enjoy the pleasure of eating during the breaks.<br></br>
														</p>
													</div>
													<div className="flex mt-4 ">
														<img src={tickmark} className="w-4 h-4 mt-1"></img>
															<p className="text-justify text-lg ml-3">
															Purified drinking water is supplied in the college, hostel and canteen.
														</p>
													</div>		
													 
        										</div>
										</div>	
								</div>
							</div>
						</div>
        		</div>


        </div>
   )
}