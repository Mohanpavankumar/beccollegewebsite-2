
import "/src/pages/Facilities/Facilities.css";
import Slides2 from "/src/components/Carousel/RoboticCenter.jsx";
import tickmark from "/src/assets/tick-mark.png";

export default function Facilities(){
    
	return (
        <div>

			<div>
			    <div className=" w-full h-14 mt-2 text-5xl text-blue-800 font-sans flex justify-center items-center">Robotic Centre</div>
				<Slides2 />
			</div>

			<div className="row w-full pt-3 px-24">
                        <div className="col-3">
                            <div className="nav flex-column nav-pills librarymenuitems " id="tab" role="tablist" aria-orientation="vertical">
                                <a className="nav-link" id="roboticcentrehome-tab" data-toggle="pill" href="#roboticcentrehome" role="tab" aria-controls="roboticcentrehome" aria-selected="true"> Robotic-Centre Home</a>
                            </div>
                        </div>
                        <div className="left-navcontent">
                            <div className="col">
                                <div className="tab-content" id="tabContent">
                                        <div className="tab-pane fade show in active" style={{width:"fit-content"}} id="roboticcentrehome" role="tabpanel" aria-labelledby="roboticcentrehome-tab">
												<div className="w-full pr-3">
													<div className="flex mt-4 ">
														<img src={tickmark} className="w-4 h-4 mt-1"></img>
														<p className="text-justify text-lg ml-3"> In the present day scenario robotics play a key role in automation. It serves the need of the industry to the great extent by replacing the human beings and thus improving the quality of the product developed. According to the need and utility it scatters in to small industry to a very large industry also. It scatters into medical, defense, food processing, manufacturing, assembly line up, electronics and entertainment etc.<br></br></p>
													</div>
													<div className="flex mt-4 ">
														<img src={tickmark} className="w-4 h-4 mt-1"></img>
														<p className="text-justify text-lg ml-3"> BAPATLA ENGINEERING COLLEGE has imported a robot from one of the leading manufacturers of robots in the world (KUKA, Germany' which costs around Rs.30,00,000/-(Thirty Lakhs) and is the first private engineering college in Andhra Pradesh state to possess a KUKA ROBOT (KR5) which is housed in ROBOTICS TECHNOLOGY CENTRE in the research park building. Five of the faculty members have under gone training at KUKA College, Pune for a period of one week and got trained in various applications of using robot. <br></br></p>
													</div>
													<div className="flex mt-4 ">
														<img src={tickmark} className="w-4 h-4 mt-1"></img>
														<p className="text-justify text-lg ml-3"> The aim of procuring the Robot is to train the students of electronics, instrumentation, mechanical and electrical engineering and made them ready for the industry. It is also noted that the same training is to receive from outside it costs around 50,000 to 70,000 rupees. But the same thing students can learn and develop applications in our college with less cost.<br></br></p>
													</div>
													<div className="flex mt-4 ">
														<img src={tickmark} className="w-4 h-4 mt-1"></img>
														<p className="text-justify text-lg ml-3">The college management is always keen in establishing the labs and reedy to procure the equipment for the benefit of the students whatever the cost may be. Our dedicated and hard working faculty members are always ready to impart the knowledge to the students. It is the student who can make use of the resources available and made himself ready to face the challenges of the world.</p>
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
