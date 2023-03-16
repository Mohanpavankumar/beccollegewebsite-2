import "/src/pages/Facilities/Facilities.css";
import Slides8 from "/src/components/Carousel/Sports.jsx";
import tickmark from "/src/assets/tick-mark.png";


export default function Facilities(){
    
	return (
        <div>

            <div>
			    <div className=" w-full h-14 mt-2 text-5xl text-blue-800 font-sans flex justify-center items-center">Physical Education / Sports</div>
                <Slides8 />
			</div>
          


            <div className="row w-full pt-3 px-24">
                        <div className="col-3">
                            <div className="nav flex-column nav-pills Sportsmenuitems " id="tab" role="tablist" aria-orientation="vertical">
                                <a className="nav-link" id="Sportshome-tab" data-toggle="pill" href="#Sportshome" role="tab" aria-controls="Sportshome" aria-selected="true">Sports Home</a>
                            </div>
                        </div>
                        <div className="left-navcontent">
                            <div className="col">
                                <div className="tab-content" id="tabContent">
                                            <div className="tab-pane fade show in active" style={{width:"fit-content"}} id="bankhome" role="tabpanel" aria-labelledby="bankhome-tab">
                                                <div className="pr-4">
                                                       <div className="flex mt-4 ">
                                                            <img src={tickmark} className="w-4 h-4 mt-1"></img>
                                                            <p className="text-justify text-lg ml-3">The College believes in adequate facilities being provided for the development, both of brain and brawn.<br></br></p>
                                                        </div>
                                                        <div className="flex mt-4 ">
                                                             <img src={tickmark} className="w-4 h-4 mt-1"></img>
                                                             <p className="text-justify text-lg ml-3">Accordingly, spacious playgrounds and other amenities for diverse sports such as cricket, tennis, volley ball, basket ball, shuttle badminton etc., and athletics are made available on the campus.<br></br></p>
                                                        </div>
                                                        <div className="flex mt-4 ">
                                                             <img src={tickmark} className="w-4 h-4 mt-1"></img>
                                                             <p className="text-justify text-lg ml-3">Under the auspices of the cultural and literary associations, various personality development programmes are conducted throughout the year.<br></br></p>
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