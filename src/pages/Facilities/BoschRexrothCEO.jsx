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
																			<img src={eastArrow} className="w-5 h-5 ml-4"></img>
																			<h4 className="ml-3 hover:text-teal-700">Dr. N. Sudhakar, Professor, CSE Department </h4>
																		</div>

																		<div className="flex mt-2 ">
																			<img src={eastArrow} className="w-5 h-5 ml-4"></img>
																			<h4 className="ml-3 hover:text-teal-700">Prof. CH. Ramesh, Head, EIE Department </h4>
																		</div>

																		<div className="flex mt-2 ">
																			<img src={eastArrow} className="w-5 h-5 ml-4 "></img>
																			<h4 className="ml-3 hover:text-teal-700">Sri. K. Prasada Rao, Assoc. Prof. ME. Department </h4>
																		</div>
																		<div className="flex mt-2 ">
																			<img src={eastArrow} className="w-5 h-5 ml-4 "></img>
																			<h4 className="ml-3 hover:text-teal-700">Sri. D. Narayana Chowdary, Assoc. Prof. ME. Department </h4>
																		</div>
																		<div className="flex mt-2 ">
																			<img src={eastArrow} className="w-5 h-5 ml-4 "></img>
																			<h4 className="ml-3 hover:text-teal-700">Sri. V. Kumara Swamy, Assoc. Prof. EIE. Department </h4>
																		</div>
																		<div className="flex mt-2 ">
																			<img src={eastArrow} className="w-5 h-5 ml-4 "></img>
																			<h4 className="ml-3 hover:text-teal-700">Dr. CH. Lakshmi Srinivas, Prof. ME. Department </h4>
																		</div>
																		<div className="flex mt-2 ">
																			<img src={eastArrow} className="w-5 h-5 ml-4 "></img>
																			<h4 className="ml-3 hover:text-teal-700">Sri. M. V. N. Chakravarthy, Asst. Prof. EIE. Department</h4>
																		</div>
																		<div className="flex mt-2 ">
																			<img src={eastArrow} className="w-5 h-5 ml-4 "></img>
																			<h4 className="ml-3 hover:text-teal-700">Sri. S. Ravi Kumar, Asst. Prof. ME. Department</h4>
																		</div>
																		<div className="flex mt-2 ">
																			<img src={eastArrow} className="w-5 h-5 ml-4 "></img>
																			<h4 className="ml-3 hover:text-teal-700">Sri. T. Krishna Chaithanya, Asst. Prof. ECE. Department</h4>
																		</div>
																		<div className="flex mt-2 ">
																			<img src={eastArrow} className="w-5 h-5 ml-4 "></img>
																			<h4 className="ml-3 hover:text-teal-700">Sri. N. Balakrishna, Asst. Prof. EEE. Department</h4>
																		</div>
																		<div className="flex mt-2 ">
																			<img src={eastArrow} className="w-5 h-5 ml-4 "></img>
																			<h4 className="ml-3 hover:text-teal-700">Sri. B. Siva Nageswara Rao, Sr. Mechanic. ME. Department</h4>
																		</div>
																		<div className="flex mt-2 ">
																			<img src={eastArrow} className="w-5 h-5 ml-4 "></img>
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
															<button 
 																data-modal-target="large-modal" data-modal-toggle="large-modal"
 																type="button" 
																className="text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-4 py-2.5 text-center mr-2 mb-2 flex mt-4 ml-5 ">
																Training Modules
																<svg aria-hidden="true" className="w-5 h-5 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
															</button>
															<div id="large-modal" tabindex="-1" class="mx-4 fixed top-0 left-0 right-0 z-50 hidden w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] md:h-full  border-black border-2">
																<div class="relative w-full h-full max-w-6xl md:h-full">
																	<div class="relative bg-white rounded-lg shadow dark:bg-gray-700">
																		<div class="flex items-center justify-between p-3 border-b rounded-t dark:border-gray-600">
																			<p lassName="text-2xl ml-3 font-semibold">
																						Training Modules
																			</p>
																			<button type="button" class="absolute top-3 right-2.5 text-black  hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-200 dark:hover:text-black" data-modal-hide="popup-modal">
																				<svg aria-hidden="true" class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
																				<span class="sr-only">Close modal</span>
																			</button>
																		</div>
																	
																		<div>
																			<table className="table text-justify">

																				<tr className="bg-sky-600 text-center">
																					<th className="pt-4">Property</th>
																					<th className="pt-4">Duration</th>
																					<th className="pt-4">Prerequisite</th>
																					<th className="pt-4">Expert Faculty</th>
																				</tr>
																				<tr className="text-center text-justify" >
																					<td>Pneumatics</td>
																					<td  className="text-left">
																						1. Basic and Electro Pneumatics-30hrs<br></br>
																						2. Closed loop position/pressure control Pneumatics-30 hrs
																					</td>
																					<td className="text-left">PLC & Basic and Electro Pneumatics</td>
																					<td className="text-left">
																						1.Ch.Lakshmi srinivas<br></br>
																						2.K.Prasada Rao<br></br>
																						3.S.Ravi Kumar<br></br>
																					</td>
																				</tr>
																				<tr className="text-center text-justify">
																					<td>Hydraulics</td>
																					<td  className="text-left">
																						1. Basic and Electro Hydraulics-30hrs<br></br>
																						2.Proportional Hydraulics-15hrs<br></br>
																					</td>
																					<td className="text-left">Basic and Electro Hydraulics</td>
																					<td className="text-left">
																						1.S.Ravi Kumar<br></br>
																						2.D.Narayana Chowdary<br></br>
																						3.N.Bala Krishna<br></br>
																					</td>
																				</tr>
																				<tr className="text-center text-justify">
																					<td>PLC</td>
																					<td  className="text-left">
																						1.Basic PLC --30hrs<br></br>
																						2.Advanced PLC --15hrs
																					</td>
																					<td className="text-left">Basic & Electro Pneumatics</td>
																					<td className="text-left">
																							1.M.V.N. Chakravarthy<br></br>
																							2.B.V.Kumara Swamy<br></br>
																							3.T.K.Chaitanaya<br></br>
																							4.N.Bala Krishna<br></br>
																							5.Ch.Ramesh
																					</td>
																				</tr>
																				<tr className="text-center text-justify">
																					<td>Sensorics</td>
																					<td  className="text-left">
																						1.Sensorics-15hrs
																					</td>
																					<td>  </td>
																					<td className="text-left">
																						1.B.V.Kumara Swamy<br></br>
																						2.M.V.N. Chakravarthy<br></br>
																						3.Ch.Ramesh<br></br>
																					</td>
																				</tr>
																				<tr className="text-center text-justify">
																					<td>MLD & MTX</td>
																					<td  className="text-left">
																						1.MLD & MTX-18hrs
																					</td>
																					<td className="text-left"> Basic PLC </td>
																					<td className="text-left">
																						1.M.V.N. Chakravarthy<br></br>
																						2.B.V.Kumara Swamy<br></br>
																						3.T.K.Chaitanaya<br></br>
																						4.N.Bala Krishna<br></br>
																						5.Ch.Ramesh
																					</td>
																				</tr>
																				<tr className="text-center text-justify">
																					<td>MMS</td>
																					<td  className="text-left">
																						1.MMS -15hrs
																					</td>
																					<td className="text-left"> 
																						1.Basic& Electro Pneumatics<br></br>
																						2.Sensorics<br></br>
																						3.Basic PLC<br></br>
																					</td>
																					<td className="text-left">
																						1.Ch.Ramesh<br></br>
																						2.T.K.Chaitanaya<br></br>
																						3.N.Bala Krishna<br></br>
																						4.Ch.Lakshmi Srinivas
																					</td>
																				</tr>

																			</table>
																		</div>
																		<div class="flex items-center p-3 space-x-2 border-t border-gray-200 rounded-b dark:border-gray-600">
																			<button data-modal-hide="large-modal" type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-3 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">CLOSE</button>
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
	    </div>
	)
}
