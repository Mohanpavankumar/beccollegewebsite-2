import "/src/pages/Facilities/Facilities.css";
import Slides3 from "/src/components/Carousel/Boschcoe.jsx";
import tickmark from "/src/assets/tick-mark.png";
import circleDot from "/src/assets/circle-solid.svg";
import eastArrow from "/src/assets/eastArrow.png";


export default function Facilities(){
    
	 	return (
	       <div>

				<div>
					<div className=" w-full h-14 mt-2 text-5xl text-blue-800 font-sans flex justify-center items-center">Bosch-rexroth Centre</div>
				    <Slides3 />
			   </div>

			   <div className="row w-full pt-3 px-24">
                        <div className="col-3">
                            <div className="nav flex-column nav-pills librarymenuitems " id="tab" role="tablist" aria-orientation="vertical">
                                <a className="nav-link" id="boschhome-tab" data-toggle="pill" href="#boschhome" role="tab" aria-controls="boschhome" aria-selected="true">Bosch-Rexroth Home</a>
								<a className="nav-link" id="boschfaculty-tab" data-toggle="pill" href="#boschfaculty" role="tab" aria-controls="boschfaculty" aria-selected="true">Staff Details</a>
                            </div>
                        </div>
                        <div className="left-navcontent">
                            <div className="col">
                                <div className="tab-content" id="tabContent">
                                        <div className="tab-pane fade show in active" style={{width:"fit-content"}} id="boschhome" role="tabpanel" aria-labelledby="boschhome-tab">
													<div className="pr-4 ">
															<div className="flex mt-4 ">
																	<img src={tickmark} className="w-4 h-4 mt-1"></img>
																	<p className="text-justify text-lg ml-3"> The College, known for its quality Engineering education, innovative practices in teaching learning processes and research, took a giant leap by joining with Bosch–Rexroth to establish a centre of competence at a cost of 5 crores in industrial automation technologies, which is the first of its kind in AP. This centre is located in the research park along with Siemens Centre of Excellence and center for Robotics, which was built in a plinth area of one lakh square feet at a cost of Rs 20 crores in the college.<br></br></p>
															</div>
															<div className="flex mt-4 ">
																	<img src={tickmark} className="w-4 h-4 mt-1"></img>
																	<p className="text-justify text-lg ml-3">The College has entered into a Memorandum of Understanding with Bosch – Rexroth Ltd, a German company which is a pioneer in drives and controls and known for providing turnkey solutions in automation to the industries around the globe for the past century. Being an autonomous college this initiative bridges the gap between industry and academia by incorporating global industrial practices and technologies into the academic curriculum.<br></br></p>
															</div>
															<div className="flex mt-4 ">
																	<img src={tickmark} className="w-4 h-4 mt-1"></img>
																	<p className="text-justify text-lg ml-3">The centre houses state of the art equipment in electro-pneumatics, electro-hydraulics, proportional and servo hydraulics, electrical servo drives, sensorics, programmable logic controllers, motion logic drives, modular mechanical systems and automation studio. The equipment enables students and faculty of different streams of engineering to design solutions to industrial automation requirements and carry out research by integrating mechanical, electrical, electronics, instrumentation and information technologies. The college offers training and consultancy in the above technologies to the industry and academia along with inhouse training.<br></br></p>
															</div>
															<div className="flex mt-4 ">
																	<img src={tickmark} className="w-4 h-4 mt-1"></img>
																	<p className="text-justify text-lg ml-3">A team of 12 senior faculty members of different engineering departments of the college have undergone extensive training for one month at Bosch – Rexroth centre for industrial automation at Mysore in the first phase. Faculty will regularly undergo intensive training at Bosh-Rexroth center in Germany<br></br></p>
															</div>
													</div>
                                        </div>  
										<div className="tab-pane fade " id="boschfaculty" role="tabpanel" aria-labelledby="boschfaculty-tab">
												<div className="pr-4">

														<div className="flex mt-1">
															<img src={tickmark} className="w-4 mt-2 h-4"></img>
															<h3 className="ml-2 font-semibold font-serif text-2xl underline underline-offset-2  text-sky-800">Faculty Trained</h3>
														</div>

														<p className="ml-4 mt-3 text-lg text-justify"> List of Faculty Trained at VTU-BR Centre of Competence in Automation Technology – Mysore during the Period March 19th, 2012 to April 18th, 2012.</p>

														<div className="flex mt-1 ">
																	<div>
																		<div className="flex mt-2 ">
																			<img src={eastArrow} className="w-5 h-5 ml-3 "></img>
																			<h4 className="ml-3 hover:text-teal-700">Dr. N. Sudhakar, Professor, CSE Department </h4>
																		</div>

																		<div className="flex mt-2 ">
																			<img src={eastArrow} className="w-5 h-5 ml-3 "></img>
																			<h4 className="ml-3 hover:text-teal-700">Prof. CH. Ramesh, Head, EIE Department </h4>
																		</div>

																		<div className="flex mt-2 ">
																			<img src={eastArrow} className="w-5 h-5 ml-3 "></img>
																			<h4 className="ml-3 hover:text-teal-700">Sri. K. Prasada Rao, Assoc. Prof. ME. Department </h4>
																		</div>
																		<div className="flex mt-2 ">
																			<img src={eastArrow} className="w-5 h-5 ml-3 "></img>
																			<h4 className="ml-3 hover:text-teal-700">Sri. D. Narayana Chowdary, Assoc. Prof. ME. Department </h4>
																		</div>
																		<div className="flex mt-2 ">
																			<img src={eastArrow} className="w-5 h-5 ml-3 "></img>
																			<h4 className="ml-3 hover:text-teal-700">Sri. V. Kumara Swamy, Assoc. Prof. EIE. Department </h4>
																		</div>
																		<div className="flex mt-2 ">
																			<img src={eastArrow} className="w-5 h-5 ml-3 "></img>
																			<h4 className="ml-3 hover:text-teal-700">Dr. CH. Lakshmi Srinivas, Prof. ME. Department </h4>
																		</div>
																		<div className="flex mt-2 ">
																			<img src={eastArrow} className="w-5 h-5 ml-3 "></img>
																			<h4 className="ml-3 hover:text-teal-700">Sri. M. V. N. Chakravarthy, Asst. Prof. EIE. Department</h4>
																		</div>
																		<div className="flex mt-2 ">
																			<img src={eastArrow} className="w-5 h-5 ml-3 "></img>
																			<h4 className="ml-3 hover:text-teal-700">Sri. S. Ravi Kumar, Asst. Prof. ME. Department</h4>
																		</div>
																		<div className="flex mt-2 ">
																			<img src={eastArrow} className="w-5 h-5 ml-3 "></img>
																			<h4 className="ml-3 hover:text-teal-700">Sri. T. Krishna Chaithanya, Asst. Prof. ECE. Department</h4>
																		</div>
																		<div className="flex mt-2 ">
																			<img src={eastArrow} className="w-5 h-5 ml-3 "></img>
																			<h4 className="ml-3 hover:text-teal-700">Sri. N. Balakrishna, Asst. Prof. EEE. Department</h4>
																		</div>
																		<div className="flex mt-2 ">
																			<img src={eastArrow} className="w-5 h-5 ml-3 "></img>
																			<h4 className="ml-3 hover:text-teal-700">Sri. B. Siva Nageswara Rao, Sr. Mechanic. ME. Department</h4>
																		</div>
																		<div className="flex mt-2 ">
																			<img src={eastArrow} className="w-5 h-5 ml-3 "></img>
																			<h4 className="ml-3 hover:text-teal-700">Sri. Y. Venkata Krishna, Lab Technician. ECE. Department</h4>
																		</div>
																	</div>
																	<div className="mt-16 ml-5">
																			<div className="flex mt-1" > 
																				<img src={circleDot} className="w-2 h-3 ml-40 mt-1"></img>
																				<p className="ml-2 text-md  "> <b><u> Contact Person </u></b><br></br>
																					D. Narayana Chowdary<br></br>
																					Associate Professor, <br></br>
																					Mechanical Engineering Department<br></br>
																					Phone :: +91-8643-224244 (Ext:185)<br></br>
																					email :: bec_mech@rediffmail.com
																				</p>
																			</div>
																	</div>
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
