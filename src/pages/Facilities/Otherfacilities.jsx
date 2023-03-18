import "/src/pages/Facilities/Facilities.css";
import Slides7 from "/src/components/Carousel/OtherFacilities.jsx";
import tickmark from "/src/assets/tick-mark.png";


export default function Facilities(){
    
	return (
        <div>
            
            <div>
			    <div className=" w-full h-14 mt-2 text-5xl text-blue-800 font-sans flex justify-center items-center">Other Campus Amenities</div>
				<Slides7 />
			</div>
            
            <div className="row w-full pt-3 px-24">
                        <div className="col-3">
                            <div className="nav flex-column nav-pills otherfacilitiesmenuitems " id="tab" role="tablist" aria-orientation="vertical">
                                <a className="nav-link" id="bankhome-tab" data-toggle="pill" href="#bankhome" role="tab" aria-controls="bankhome" aria-selected="true">Bank</a>
                                <a className="nav-link" id="postofficehome-tab" data-toggle="pill" href="#postofficehome" role="tab" aria-controls="postofficehome" aria-selected="true">Post Office</a>
                                <a className="nav-link" id="dispensaryhome-tab" data-toggle="pill" href="#dispensaryhome" role="tab" aria-controls="dispensaryhome" aria-selected="true">Dispensary</a>
                            </div>
                        </div>
                        <div className="left-navcontent">
                            <div className="col">
                                <div className="tab-content" id="tabContent">
                                            <div className="tab-pane fade show in active" style={{width:"fit-content"}} id="bankhome" role="tabpanel" aria-labelledby="bankhome-tab">
                                                <div className="mt-4">
                                                            <b className="font-serif text-3xl mt-5">Bank<br></br></b>
                                                            <div className='line w-12 h-1 mb-2' style={{background:"#0060b1"}}></div>
                                                            <div className="w-full pr-5 ">
                                                                    <div className="flex mt-4 ">
                                                                                <img src={tickmark} className="w-4 h-4 mt-1"></img>
                                                                                <p className="text-justify text-lg ml-3">BEC is provided with a State Bank of India that saves time and energies of students and staff to conduct monetary transactions.<br></br></p>
                                                                    </div>
                                                                    <div className="flex mt-4 ">
                                                                                <img src={tickmark} className="w-4 h-4 mt-1"></img>
                                                                                <p className="text-justify text-lg ml-3">The students can pay their college fees of various kinds in this extention centre without a need to travel back to bank in the town.<br></br></p>
                                                                    </div>
                                                                    <div className="flex mt-4 ">
                                                                                <img src={tickmark} className="w-4 h-4 mt-1"></img>
                                                                                <p className="text-justify text-lg ml-3">The SBI has added to a new facility to BEC students by providing ONLINE banking facility enabling them with 24/7 access to Banking services.<br></br></p>
                                                                    </div>
                                                            </div>
                                                </div>
                                            </div>
                                
                                            <div className="tab-pane fade"  id="postofficehome" role="tabpanel" aria-labelledby="postofficehome-tab">
                                                        <div className="mt-4">
                                                                    <b className="font-serif text-3xl mt-5">Post Office<br></br></b>
                                                                    <div className='line w-14 h-1 mb-2' style={{background:"#0060b1"}}></div>
                                                                    <div className="w-full pr-5 ">
                                                                            <div className="flex mt-4 ">
                                                                                        <img src={tickmark} className="w-4 h-4 mt-1"></img>
                                                                                        <p className="text-justify text-lg ml-3">The college campus also houses a post office to cater to the mail needs of students and staff.<br></br></p>
                                                                            </div>
                                                                            <div className="flex mt-4 ">
                                                                                        <img src={tickmark} className="w-4 h-4 mt-1"></img>
                                                                                        <p className="text-justify text-lg ml-3">The students can save their precious time by using services of this on campus post office to send applications for higher education and mailing DDs and other alied postal services.<br></br></p>
                                                                            </div>
                                                                    </div>
                                                        </div>
                                            </div>

                                            <div className="tab-pane fade"  id="dispensaryhome" role="tabpanel" aria-labelledby="dispensaryhome-tab">
                                                <div className="mt-4">
                                                            <b className="font-serif text-3xl mt-5">Dispensary<br></br></b>
                                                            <div className='line w-10 h-1 mb-2' style={{background:"#0060b1"}}></div>
                                                            <div className="w-full pr-5 ">
                                                                    <div className="flex mt-4 ">
                                                                                <img src={tickmark} className="w-4 h-4 mt-1"></img>
                                                                                <p className="text-justify text-lg ml-3">BEC recognizes that physical and mental health significantly influences one’s ability to participate fully in the College community.<br></br></p>
                                                                    </div>
                                                                    <div className="flex mt-4 ">
                                                                                <img src={tickmark} className="w-4 h-4 mt-1"></img>
                                                                                <p className="text-justify text-lg ml-3">The Health Center strives to enhance each student’s well being by providing comprehensive, private health care and by encouraging informed, individual involvement on health related decisions.<br></br></p>
                                                                    </div>
                                                                    <div className="flex mt-4 ">
                                                                                <img src={tickmark} className="w-4 h-4 mt-1"></img>
                                                                                <p className="text-justify text-lg ml-3">The college has a dispensary to dispose first-aid to students and staff.<br></br></p>
                                                                    </div>
                                                                    <div className="flex mt-4 ">
                                                                                <img src={tickmark} className="w-4 h-4 mt-1"></img>
                                                                                <p className="text-justify text-lg ml-3">A doctor visits college on regular basis to be available to residents of on campus Girls Hostel.<br></br></p>
                                                                    </div>
                                                                    <div className="flex mt-4 ">
                                                                                <img src={tickmark} className="w-4 h-4 mt-1"></img>
                                                                                <p className="text-justify text-lg ml-3">The College also has a dedicated Ambulance service to meet medical emergencies, if any. The students can utilize preferential treatment service by visiting the hospital of visiting doctor in town anytime.<br></br></p>
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
