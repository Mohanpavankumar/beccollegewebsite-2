import "/src/pages/Facilities/Facilities.css";
import Slides6 from "/src/components/Carousel/Hostel.jsx";
import tickmark from "/src/assets/tick-mark.png";


export default function Facilities(){
    
	return (
        <div>

            <div>
			    <div className=" w-full h-14 mt-2 text-5xl text-blue-800 font-sans flex justify-center items-center">Girls Hostel</div>
				<Slides6 />
			</div>
            <div className="row w-full pt-3 px-24">
                        <div className="col-3">
                            <div className="nav flex-column nav-pills librarymenuitems " id="tab" role="tablist" aria-orientation="vertical">
                                <a className="nav-link" id="Hostelhome-tab" data-toggle="pill" href="#Hostelhome" role="tab" aria-controls="Hostelhome" aria-selected="true">Home</a>
                            </div>
                        </div>
                        <div className="left-navcontent">
                            <div className="col">
                                <div className="tab-content" id="tabContent">
                                        <div className="tab-pane fade show in active" style={{width:"fit-content"}} id="Hostelhome" role="tabpanel" aria-labelledby="Hostelhome-tab">
                                        <b className="font-serif text-3xl mt-5"> Hostels For Women <br></br></b>
                                        <div className='line w-20 h-1 mb-2' style={{background:"#0060b1"}}></div>
                                        <div className="w-full pr-5 ">
                                            <div className="flex mt-4 ">
														<img src={tickmark} className="w-4 h-4 mt-1"></img>
														<p className="text-justify text-lg ml-3">BEC uniquely provides on campus hostel facility to its girl student community.This hostel accommodating 1600 girl students is maintained on self-run basis by students themselves.<br></br></p>
											</div>
                                            <div className="flex mt-4 ">
														<img src={tickmark} className="w-4 h-4 mt-1"></img>
														<p className="text-justify text-lg ml-3">The residents of hostel are provided with 24 hr hot water supply through solar water heaters.The students health needs are taken care by dispensary with a visiting doctor and 24/7 ambulance<br></br></p>
						                    </div>
                                            <div className="flex mt-4 ">
														<img src={tickmark} className="w-4 h-4 mt-1"></img>
														<p className="text-justify text-lg ml-3">Emphasis has been laid on hygiene and cleanliness for healthy living. A customized menu caters to the student needs, and it keeps changing according to their tastes.<br></br></p>                 
                                           </div>
                                           <div className="flex mt-4 ">
														<img src={tickmark} className="w-4 h-4 mt-1"></img>
														<p className="text-justify text-lg ml-3"> Wi-Fi enabled hostels.<br></br></p>                 
                                           </div>
                                           <div className="flex mt-4 ">
														<img src={tickmark} className="w-4 h-4 mt-1"></img>
														<p className="text-justify text-lg ml-3">Power backup through use of Generators.<br></br></p>                 
                                           </div>
                                           <div className="flex mt-4 ">
														<img src={tickmark} className="w-4 h-4 mt-1"></img>
														<p className="text-justify text-lg ml-3">Round-the-clock security and medical facilities are also available.</p>                 
                                           </div>
                                           <div className="flex mt-4 ">
														<img src={tickmark} className="w-4 h-4 mt-1"></img>
														<p className="text-justify text-lg ml-3">Other amenities like indoor games, study hall ensure the utmost comfort for the students.</p>                 
                                           </div>
                                           <div className="flex mt-4 ">
														<img src={tickmark} className="w-4 h-4 mt-1"></img>
														<p className="text-justify text-lg ml-3">eatery shops, photocopier service are present inside the Hostel and all the other shops catering to the daily requirement of the students also present very near to the premises.</p>                 
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