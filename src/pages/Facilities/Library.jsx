import "/src/pages/Facilities/Facilities.css";
import Staff from "/src/components/staff/staffLib.jsx";
import LibraryStaff from "/src/Data/staffData/LibraryStaff.js";
import DigiLibImg from "/src/assets/DigitalLibrary.jpg";
import tickmark from "/src/assets/tick-mark.png";
import Slides from "/src/components/Carousel/Slides.jsx";
import Arrow from "/src/assets/Arrow.png";





const Library = LibraryStaff.map((dataArg) => {
	 	return <Staff key={dataArg.staffId} item={dataArg} />;
	});

export default function Facilities(){
    
    return (
        <>
        <div>
			<div className=" w-full h-14 mt-2 text-5xl text-blue-800 font-sans flex justify-center items-center">Library</div>
            <Slides />
        </div>
        <div className="row w-full pt-3 px-24">
            <div className="col-3">
                <div className="nav flex-column nav-pills librarymenuitems " id="tab" role="tablist" aria-orientation="vertical">
                    <a className="nav-link" id="libraryhome-tab" data-toggle="pill" href="#libraryhome" role="tab" aria-controls="libraryhome" aria-selected="true">Library Home</a>
                    <a className="nav-link" id="digitallibrary-tab" data-toggle="pill" href="#digitallibrary" role="tab" aria-controls="digitallibrary" aria-selected="false">Digital Library</a>
                    <a className="nav-link" id="E-library-tab" data-toggle="pill" href="#E-library" role="tab" aria-controls="E-library" aria-selected="false">E-library</a>
					<a className="nav-link" id="E-books-tab" data-toggle="pill" href="#E-books" role="tab" aria-controls="E-books" aria-selected="false">E-Books</a>
                    <a className="nav-link" id="librarystaff-tab" data-toggle="pill" href="#librarystaff" role="tab" aria-controls="librarystaff" aria-selected="false">Library Staff</a>
					<a className="nav-link" id="nptel-tab" data-toggle="pill" href="#nptel" role="tab" aria-controls="nptel" aria-selected="false">NPTEL</a>
                </div>
            </div>
			<div className="left-navcontent">
				<div className="col">
					<div className="tab-content" id="tabContent">
						
							<div className="tab-pane fade show in active" style={{width:"fit-content"}} id="libraryhome" role="tabpanel" aria-labelledby="libraryhome-tab">
							{/* <div className='line w-14 h-1 mb-2' style={{background:"#0060b1"}}></div> */}
									<div className="w-full text-lg text-justify pr-3 pt-3" >
										<p> Acclaimed as the one of the biggest Libraries with 22,000 sq. ft. area in the State, The Central Library of BEC has been playing a vital role as Information Centre catering to the Academic and learning needs of the faculty and Students alike since inception. The facility is serving the student fraternity ranging from under graduate to Masters and ultimately aiding the Research stratum of Bapatla Engineering College.</p><br></br>
										<p> As a jewel in the crown of BEC, The Library aims at providing premium quality learning resources in the form of Books, Journals, E-Journals, Video Courses and CDs pertinent to Curricula of diverse Engineering and Technology and of general nature to the students and Teaching Staff. The Library also supports Departmental Libraries for acquisition and maintenance of Titles throughout the academic year.</p><br></br>
										<p>As the veritable abode of Knowledge, the Central Library of BEC houses,</p>
										<p className="ml-4">
												<li> 29,228 Titles </li>
												<li> 78,799 Volumes </li>
												<li> 725 International e-Journals (IEEE, ASCE, ASME & Springer Nature). </li>
												<li> 20 Print Journals  </li>
										</p>
									</div> 
									<div className="w-full mt-3 pr-3">
											<div className="flex mt-1 pt-2"> 
												<img src={tickmark} className="w-5 h-5 mt-1"></img>
												<p className="ml-3  text-justify text-lg">
														One of its kinds, BEC Central Library is fully automated with SOUL 2.0 Software; updated with latest version in 2010 and Bar-coding system facilitating easy access to students and well maintenance of library for they say “As the biggest library if it is in disorder is not as useful as a small but well-arranged one.”
												</p>
											</div>
												<div className="flex mt-1 pt-2" > 
													<img src={tickmark} className="w-5 h-5 mt-1"></img>
													<p className="ml-3 text-justify text-lg">
														The library offers special services to the Students of SC & ST categories by providing Book Banks enriched with 23,477 volumes related to 4,051 Titles.
												    </p>
											</div>
											<div className="flex mt-1 pt-2" > 
													<img src={tickmark} className="w-5 h-5 mt-1"></img>
													<p className="ml-3 text-justify text-lg">
														A Book Bank specially earmarked with the funds of TEQIP is provided with 1896 volumes consisting 323 Titles also supplements the needs of SC & ST Students.
												    </p>
											</div>
											<div className="flex mt-1 pt-2" > 
													<img src={tickmark} className="w-5 h-5 mt-1"></img>
													<p className="ml-3 text-justify text-lg">
														Through these Book Banks each SC or ST student can borrow 12 books and a BC student can borrow 2 books. 
													</p>
											</div>
											<div className="flex mt-1 pt-2" > 
													<img src={tickmark} className="w-5 h-5 mt-1"></img>
													<p className="ml-3 text-justify text-lg">
														The library added a feather to its cap by having a wing of Digital Library featuring online connectivity with DELNET, New Delhi and providing Internet facility to students with the infrastructure of 28 Computers with DVD and CD Writers. 
													</p>
											</div>
												<div className="flex mt-1 pt-2" > 
													<img src={tickmark} className="w-5 h-5 mt-1 "></img>
													<p className="ml-3 text-justify text-lg">
														To take the learning experience of students to next level BEC Library has added NPTEL Video Courses to its armour of facilities.
													</p>
											</div>
												<div className="flex mt-1 pt-2" > 
													<img src={tickmark} className="w-5 h-5 mt-1"></img>
													<p className="ml-3 text-justify text-lg">
														The video library is furnished with 34” Colour T.V and DVD Player supported by a stack of 3,259 CDs.
													</p>
											</div>
											<div className="flex mt-1 pt-2" > 
													<img src={tickmark} className="w-5 h-5 mt-1"></img>
													<p className="ml-3 text-justify text-lg">
														The thrust area of video library is providing NPTEL video lecturers to learners and Teaching Community effectively.
													</p>
											</div>
											<div className="flex mt-1 pt-2" > 
													<img src={tickmark} className="w-5 h-5 mt-1"></img>
													<p className="ml-3 text-justify text-lg">
														Library is providing reprographic facility to students to disseminate material quickly and cost effectively aiding better learning on campus.
													</p>
											</div>
										    <div className="flex mt-1 pt-2" > 
													<img src={tickmark} className="w-5 h-5 "></img>
													<p className="ml-3 text-justify text-lg">
														The photo copying is provided at 50 paise per copy with latest reprographic machine
													</p>
											</div>
                                    </div>
                            </div>
							<div className="tab-pane fade " id="digitallibrary" role="tabpanel" aria-labelledby="digitallibrary-tab">
										<div className="w-[70rem] flex mt-1">
								            <div className="w-[30rem] h-96 mt-6">
								                <h3 className="font-serif font-semibold text-3xl text-cyan-800"> Library Softwares </h3>
												<div className='line w-20 h-1 mb-5' style={{background:"#0060b1"}}></div>
								                <p className="text-justify text-lg ">BEC Central Library is fully automated with SOUL 2.0 Software; updated with latest version in 2010 and Bar-coding system facilitating easy access to students and well maintenance of library for they say “As the biggest library if it is in disorder is not as useful as a small but well-arranged one.” </p>
								            </div>
								            <div className="w-[45rem] ml-2 px-3">
							                    <img src={DigiLibImg} className="h-[25rem] ml-2 w-full border-2 rounded-lg" ></img>
							                </div>
										</div>
							</div>
							<div className="tab-pane fade px-5" id="E-library" role="tabpanel" aria-labelledby="E-library-tab">
									<div className=" w-10/12 h-60 items-center facilities-background border-2 border-black rounded-md mt-3"> 
												<h4 className="font-serif font-semibold text-xl px-3 mt-3"> IEEE-ASP:</h4>
												<div className='line w-14 h-1 ml-3 mb-3' style={{background:"#0060b1"}}></div> 
												<p className="justify-center text-lg ml-5 ">All Society Periodicals on Computer Engineering + Computer Science + Electrical & Electronics Engineering + Telecommunications & related disciplines</p>
												<div className="flex mt-2">
													<p className="justify-center text-md ml-5 mt-2 flex items-center"><b>213 e-Journals213 e-Journals </b> (back files access from 2010) </p>
													<div className="flex mt-2" >
															<h3 className="font-semibold ml-5 text-lg">Link :</h3>
															<a href="https://ieeexplore.ieee.org/Xplore/home.jsp " className="text-lg ml-2 text-blue-700"> https://ieeexplore.ieee.org </a>
													</div>
											   </div>
												<div className="flex mt-2 mx-3" >
													 <a href="#" className=" hover:text-black hover:no-underline no-underline font-semibold p-2 border-2 border-black rounded-xl text-lg mt-2">Download</a>
												</div>
			                        </div>
									<div className=" w-10/12 h-60 tems-center facilities-background border-2 border-black rounded-md mt-4"> 
								                    <h4 className="font-serif font-semibold text-xl px-3 mt-3"> ASME:</h4>
													<div className='line w-14 h-1 ml-3 mb-3' style={{background:"#0060b1"}}></div> 
							                        <p className="justify-center text-lg ml-5">American Society of Mechanical Engineers for Mechanical Engineering Journals</p>
													<div className="flex mt-2">
															<p className="justify-center text-md ml-5 mt-2 flex items-center"><b>33 e-Journals</b> (back files access from 2000) </p>
															<div className="flex mt-2" >
																<h3 className="font-semibold ml-5 text-lg">Link :</h3>
																<a href="https://asmedigitalcollection.asme.org/" className="text-lg ml-2 text-blue-700"> https://asmexplore.asme.org </a>
															</div>
													</div>
								                    <div className="flex mt-2 mx-3" >
													   <a href="#" className=" hover:text-black hover:no-underline no-underline font-semibold p-2 border-2 border-black rounded-xl text-lg mt-2">Download</a>
												    </div>
                     				</div>
									<div className=" w-10/12 h-60 items-center facilities-background border-2 border-black rounded-md mt-4"> 
					                            <h4 className="font-serif font-semibold text-xl px-3 mt-3">ASCE:</h4>
												<div className='line w-14 h-1 ml-3 mb-3' style={{background:"#0060b1"}}></div> 
					                            <p className="justify-center text-lg ml-5">American Society of Civil Engineers for Civil Engineering Journals</p>
												<div className="flex mt-2">
														<p className="justify-center text-md ml-5 mt-2 flex items-center"><b>35  e-Journals </b> (back files access from 2000) </p>
														<div className="flex mt-2" >
															<h3 className="font-semibold text-lg ml-5">Link :</h3>
															<a href="https://ascelibrary.org/" className="text-lg ml-2 text-blue-700"> https://ascelibrary.org/</a>
														</div>
												</div>
												<div className="flex mt-2 mx-3" >
													   <a href="#" className=" hover:text-black hover:no-underline no-underline font-semibold p-2 border-2 border-black rounded-xl text-lg mt-2">Download</a>
												</div>  
                    				</div>
									<div className=" w-10/12 h-60 items-center facilities-background border-2 border-black rounded-md mt-4"> 
		                                    <h4 className="font-serif font-semibold text-xl px-3 mt-3 "> Springer Nature e-Journals</h4>
											<div className='line w-14 h-1 ml-3 mb-3' style={{background:"#0060b1"}}></div> 
		                             		<p className="justify-center text-lg ml-5">Engineering, Computer Science, Mathematics & Statistics, Physics & Chemistry</p>
											<div className="flex mt-2">
													<p className="justify-center text-md ml-5 mt-2 flex items-center"><b>465 e-Journals</b>(back files access from 2000) </p>
													<div className="flex mt-2" >
														<h3 className="font-semibold text-lg ml-5">Link :</h3>
														<a href="https://link.springer.com/" className="text-lg ml-2 text-blue-700">https://link.springer.com</a>
													</div>
											</div>
				                            <div className="flex mt-2 mx-3" >
													   <a href="#" className=" hover:text-black hover:no-underline no-underline font-semibold p-2 border-2 border-black rounded-xl text-lg mt-2">Download</a>
											</div>  
                                    </div>
									<div className=" w-10/12 h-60 facilities-background items-center border-2 border-black rounded-md mt-4"> 
			                             <h4 className="font-serif font-semibold text-xl px-3 mt-3">DELNET Digital Library:</h4>
										 <div className='line w-14 h-1 ml-3 mb-3' style={{background:"#0060b1"}}></div> 
			                             <p className="justify-center text-lg px-5">
			                                <b> User Name :</b> apbec <br></br>
			                                <b> Password: </b> bec1528
	                                     </p>
			                             <p className="justify-center text-md px-5 mt-3 flex items-center">For e-journals & e-books visit : 
										 	<a href="https://www.delnet.in/" className="text-lg  text-blue-700 underline mr-1">DELNET</a>
										    (New Discovery Portal) 
										 </p> 
			                        </div>
									<div className="w-10/12 h-60 items-center facilities-background  border-2 border-black rounded-md mt-4"> 
					                     <h4 className="font-serif font-semibold text-xl px-3 mt-3">Library Catalogue - OPAC (Online Public Access Catalogue):</h4>
										 <div className='line w-14 h-1 ml-3 mb-3' style={{background:"#0060b1"}}></div> 
					                   	 <p className="justify-center text-lg ml-5 mt-4 mr-2">OPAC is an online database of complete details of Books available with the Library. Users may access the OPAC in our Library to search for Books by Author or by Title or by Subject etc... to locate the required Books.</p>  
				                    </div>
							</div>
							<div className="tab-pane fade md:ml-28 xl:ml-0" id="E-books" role="tabpanel" aria-labelledby="E-books-tab">
								<div>
									<h4 className="ml-3 mt-3 text-2xl text-cyan-800 "> <b>e-Journals & e-Books:</b> </h4>
									<div className='line w-16 h-1 ml-3' style={{background:"#0060b1"}}></div>
									<p className="text-justify mt-4 ml-4 my-2 text-lg pr-3"> The following subscriptions can be used from any desktop or laptop with in the campus network and through Knimbus Mobile App.</p>
									<p className="text-justify  ml-4 my-2 text-lg pr-3"> <b className="text-xl"> Note:- </b>  IP address based access is provided for all e journals in our college campus. Hence, all the following e-Journals are directly accessible in our College Campus network systems  and no user name & password is required. In case of any difficulty in accessing these e resources, please contact the - Librarian / HOD Concerned.</p>
									<h4 className="ml-3 mt-4 text-2xl text-cyan-800"><b> Off Campus Access (Mobile App):</b></h4>
									<div className='line w-16 h-1 ml-3 ' style={{background:"#0060b1"}}></div>
									<p className="text-justify mt-4 ml-4 my-2 text-lg pr-3"> Off Campus access through Knimbus mobile app is provided to access all  e journals & e books subscribed by our Library. Users can access all e resources of the Library from anywhere and at any time through the mobile app. Contact the Librarian for installation of Knimbus mobile app.</p>
								</div>
								
							</div>
							<div className="tab-pane fade " id="librarystaff" role="tabpanel" aria-labelledby="librarystaff-tab">
								   <h3 className="font-semibold font-serif text-2xl mt-3">Staff Members</h3>
								   <div className='line w-14 h-1' style={{background:"#0060b1"}}></div>
									<div className="mt-3 p-3 ">
				               				<div className="staff-container grid grid-flow-row justify-center gap-4 mt-3 mb-5 md:grid-cols-1 md:ml-32 md:justify-items-center lg:grid-cols-1 xl:ml-0 xl:grid-cols-2 2xl:grid-cols-3">{Library}</div>
									</div>
							</div>
							<div className="tab-pane fade " id="nptel" role="tabpanel" aria-labelledby="nptel-tab">
										
										<h3 className="text-2xl font-bold mt-3 font-serif">NPTEL Video Courses:</h3>
										<div className='line w-20 h-1 mb-4' style={{background:"#0060b1"}}></div> 
										<div className=" border-black border-2 scrollbar-thin scrollbar-thumb-blue-700 scrollbar-track-blue-300 h-[36rem] overflow-y-scroll ">									
											<table className="table">

												<tr className="bg-sky-600 text-center">
													<th className="pt-4">S.No</th>
													<th className="pt-4">Discipline Name</th>
													<th colspan="2" className="mt-5">  
													     Video Lessons
														<th>Courses</th>
														<th>No Of Courses</th>
													</th>
												</tr>
												<tr className="text-center">
													<td>1 </td>
													<td  className="text-left">Civil Engineering</td>
													<td>25</td>
													<td>934</td>
												</tr>
												<tr className="text-center">
													<td>2 </td>
													<td  className="text-left">Mechanical Engineering</td>
													<td>27</td>
													<td>1064</td>
												</tr>
												<tr className="text-center">
													<td>3 </td>
													<td  className="text-left">Computer Science / IT</td>
													<td>27</td>
													<td>1000</td>
												</tr>
												<tr className="text-center">
													<td>4 </td>
													<td  className="text-left">Electronics & Communication Engg.</td>
													<td>18</td>
													<td>7043</td>
												</tr>
												<tr className="text-center">
													<td>5 </td>
													<td  className="text-left">Electronics & Electrical Engineering</td>
													<td>20</td>
													<td>7092</td>
												</tr>
												<tr className="text-center">
													<td>6</td>
													<td  className="text-left">Biotechnology</td>
													<td>03</td>
													<td>119</td>
												</tr>
												<tr className="text-center">
													<td>7 </td>
													<td  className="text-left">Chemical Engineering</td>
													<td>17</td>
													<td>692</td>
												</tr>
												<tr className="text-center">
													<td>8 </td>
													<td  className="text-left">Aerospace Engineering</td>
													<td>12</td>
													<td>479</td>
												</tr>
												<tr className="text-center">
													<td>9 </td>
													<td  className="text-left">Humanities & Social Sciences</td>
													<td>13</td>
													<td>507</td>
												</tr>
												<tr className="text-center">
													<td>10 </td>
													<td  className="text-left">Management</td>
													<td>12</td>
													<td>473</td>
												</tr>
												<tr className="text-center">
													<td>11 </td>
													<td  className="text-left">Metallurgy & Matrial Science</td>
													<td>11</td>
													<td>445</td>
												</tr>
												<tr className="text-center">
													<td>12 </td>
													<td  className="text-left">Ocean Engineering</td>
													<td>10</td>
													<td>404</td>
												</tr>
												<tr className="text-center">
													<td>13 </td>
													<td  className="text-left">Textile Engineering</td>
													<td>02</td>
													<td>60</td>
												</tr>
												<tr className="text-center">
													<td>14 </td>
													<td  className="text-left">Maths</td>
													<td>16</td>
													<td>646</td>
												</tr>
												<tr className="text-center">
													<td>15 </td>
													<td  className="text-left">Physics</td>
													<td>16</td>
													<td>646</td>
												</tr>
												<tr className="text-center">
													<td>16 </td>
													<td  className="text-left">Chemistry</td>
													<td>09</td>
													<td>318</td>
												</tr>
												<tr className="text-center">
													<td>17 </td>
													<td  className="text-left">General Engineering </td>
													<td>02</td>
													<td>71</td>
												</tr>
												<tr className="text-center">
													<td>18 </td>
													<td  className="text-left">General</td>
													<td>01</td>
													<td>20</td>
												</tr>

												<tr className="text-center">
													<td>19 </td>
													<td className="text-left">Engineering Design</td>
													<td>01</td>
													<td>40</td>
												</tr>

												<tr className="text-center text-blue-800">
													<td> </td>
													<td><b>Total:</b></td>
													<td><b>236</b></td>
													<td><b>9173</b></td>	
												</tr>
											</table>
											
										</div>
										<div className="flex mt-4">
			                              <img src={Arrow} className=" w-5 h-5 mt-1"></img>
							              <p className="text-lg ml-2 font-semibold"> NPTEL URL:</p>
										  <a href="https://nptel.ac.in/ " className="text-lg text-blue-900 ml-3"> https://nptel.ac.in </a>
										</div>
										<div className="flex mt-2">
										 <img src={Arrow} className=" w-5 h-5 mt-1"></img>
							              <p className="text-lg ml-2 font-semibold">Swayam URL:</p>
										  <a href="https://swayam.gov.in/" className="text-lg text-blue-900 ml-3"> https://swayam.gov.in</a>
										</div>
							</div>

					</div>
			    </div>
		    </div>
        </div>
    </>
	)

}
