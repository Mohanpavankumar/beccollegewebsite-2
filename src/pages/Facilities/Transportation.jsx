
import tickBox from "/src/assets/icons8-tick-box-24.png";
import circleDot from "/src/assets/circle-solid.svg";
import Slides5 from "/src/components/Carousel/Transportation.jsx";
import BusImg2 from "/src/assets/BusImg2.png";


export default function Facilities(){
    
    return (
        <>
                <div>
                    <div className=" w-full h-14 mt-2 text-5xl text-blue-800 font-sans flex justify-center items-center">Transportation</div>
                    <Slides5 />
                </div>
                <div className="row w-full pt-3 px-24">
                        <div className="col-3">
                            <div className="nav flex-column nav-pills librarymenuitems " id="tab" role="tablist" aria-orientation="vertical">
                                <a className="nav-link" id="transportationhome-tab" data-toggle="pill" href="#transportationhome" role="tab" aria-controls="transportationhome" aria-selected="true">Transportation Home</a>
                            </div>
                        </div>
                        <div className="left-navcontent">
                            <div className="col">
                                <div className="tab-content" id="tabContent">
                                        <div className="tab-pane fade show in active" style={{width:"fit-content"}} id="transportationhome" role="tabpanel" aria-labelledby="transportationhome-tab">
                                        {/* <div className='line w-14 h-1 mb-2' style={{background:"#0060b1"}}></div> */}
                                                <div className="w-full text-lg text-justify pr-5" >
                                                        <p className="w-full mt-3 text-justify text-lg">
                                                            <b className="text-2xl font-serif ">BECB Bus Facility </b>
                                                            <div className='line w-20 h-1 mb-4' style={{background:"#0060b1"}}></div> 
                                                            The college has been providing commuting facility to its staff and students with notable subsidized fares. The transportation facility is handled with an efficient fleet of 11 buses punctually running from Bapatla to College from morning to late evening on all working days.<br></br><br></br>
                                                            Bapatla Engineering College has a unique feature of working hours from 7:30 AM to 1:15 PM, which allows the staff and students to make use of the extent of the day.<br></br><br></br>
                                                            Apart from the regular Shuttle services to commute the staff and students, Transport facility supports the students and staff to participate in co-curricular and extra-curricular activities during afternoons 2:15 PM to 5:00 PM.
                                                        </p>
                                                </div> 
                                                <div>
                                                    <div className="flex mt-5 h-[28rem] facilities-background ">
                                                                 <p className="w-1/2 ml-3 p-4">
                                                                    <b className="text-3xl font-serif text-sky-600">Why Travel By Bus </b>
                                                                    <div className="flex mt-1"> 
                                                                             <img src={tickBox} className="w-5 mt-3 ml-2 h-6"></img>
                                                                             <p className="ml-3 mt-3 text-justify text-lg"> Bus Routes Covers Major Areas in Bapatla </p>
                                                                     </div>
                                                                     <div className="flex mt-1">
                                                                             <img src={tickBox} className="w-5 mt-3 ml-2 h-6"></img>
                                                                             <p className="ml-3 mt-3 text-justify text-lg"> Bus Fees - 20,000/- </p>
                                                                     </div>
                                                                     <div className="flex mt-1 ml-5"> 
                                                                             <img src={circleDot} className="w-2 mt-3 ml-2 h-2"></img>
                                                                             <p className="ml-2 mt-2 text-justify text-md">Students who wish to avail the college bus facility should pay Demand Draft of Rs. 20,000/-. in favour of BECB payable at Bapatla </p>
                                                                     </div>
                                                                     <div className="flex mt-1 ml-5"> 
                                                                             <img src={circleDot} className="w-2 mt-3 ml-2 h-2"></img>
                                                                             <p className="ml-2 mt-2 text-justify text-md">Bus Fee once paid will not be refunded / adjusted under any circumstances. </p>
                                                                     </div>
                                                                     <div className="flex mt-1"> 
                                                                             <img src={tickBox} className="w-5 mt-3 ml-2 h-6"></img>
                                                                             <p className="ml-3 mt-3 text-justify text-lg"> The students are required to submit 2 passport size photos and ID Number and get their Bus Pass. </p>
                                                                     </div>
                                                                     <div className="flex mt-1"> 
                                                                             <img src={tickBox} className="w-5 mt-3 ml-2 h-6"></img>
                                                                             <p className="ml-3 mt-3 text-justify text-lg">Contact respective college office for more details. </p>
                                                                     </div>
                                                                 </p>
                                                                 <img src={BusImg2} className="w-1/2 h-[29rem] ml-5 pb-2 border-2 rounded-md"></img>
                                                            </div>
                                                       </div>
                                             </div>                   
                                    </div>
                            </div>
                        </div>
            </div>
           
        </>
    )
}