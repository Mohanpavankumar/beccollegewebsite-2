import "/src/pages/Facilities/Facilities.css";
import LibImg from "/src/assets/LibHome.jpg";
import RoboImg from "/src/assets/RoboHome.jpg";
import BoschImg from "/src/assets/BoschHome.webp";
import CafteriaImg from "/src/assets/CanteenHome.jpg";
import TransportImg from "/src/assets/BusHome.png";
import HostelImg from "/src/assets/hostelHome.jpg";
import sports from "/src/assets/SportsHome.jpg";
import Others from "/src/assets/OtherFacilities.png";
import {Link} from "react-router-dom";
													
export default function Facilities()
{
	return (
       <div>
				<div className="px-5">
					<div className=" w-full h-14 mt-2 text-5xl text-blue-800 font-sans flex justify-center items-center"> Central Facilities</div>
				</div>
				<div className="mt-5 flex flex-wrap px-5">
										  	<div className="w-[30rem] h-[32rem] ml-5  shadow-2xl shadow-black hover:scale-105 "> 
												  <img src={LibImg} className=" w-[30rem] h-[25rem] rounded-t-2xl "></img>
												  <div className="w-[30rem] h-[3rem]">
													  <h3 className="text-3xl flex justify-center mt-3 items-center font-serif font-semibold">Library</h3>
												  </div>
												  <div className="w-[30rem] h-[4rem] bg-gradient-to-l facilities-Home from-green-400 rounded-b-2xl">
												  <div className="ml-3 pt-3">
													  <Link className="hover:text-black hover:no-underline no-underline font-semibold p-2 border-2 border-black rounded-xl text-lg" to={"/Library"}> Read More > </Link>
												  </div>
												  </div>
										 	</div>

										    <div className="w-[30rem] h-[32rem]  ml-5 shadow-2xl shadow-black  hover:scale-105"> 
											     <img src={RoboImg} className="w-[30rem] h-[25rem]  rounded-t-2xl "></img>
												  <div className="w-[30rem] h-[3rem]">
													  <h3 className="text-3xl flex justify-center mt-3 items-center  font-serif font-semibold">Robotic Centre</h3>
												  </div>
												  <div className="w-[30rem] h-[4rem] bg-gradient-to-l facilities-Home from-green-400  rounded-b-2xl ">
													<div className="ml-3 pt-3">
													  <Link className="hover:text-black hover:no-underline no-underline font-semibold p-2 border-2 border-black rounded-xl text-lg " to={"/RoboticCentre"}> Read More > </Link>
													</div>
												  </div>
											</div>

											<div className="w-[30rem] h-[32rem] ml-5  shadow-2xl shadow-black  hover:scale-105 "> 
											     <img src={BoschImg} className="w-[30rem] h-[25rem]  rounded-t-2xl"></img>
												  <div className="w-[30rem] h-[3rem]">
													  <h3 className="text-3xl flex justify-center mt-3 items-center font-serif font-semibold">Bosch-Rexroth COE</h3>
												  </div>
												  <div className="w-[30rem] h-[4rem] rounded-b-2xl bg-gradient-to-l facilities-Home  from-green-400">
												    <div className="ml-3 pt-3">
												      <Link className="hover:text-black hover:no-underline no-underline font-semibold p-2 border-2 border-black rounded-xl text-lg" to={"/BoschRexrothCEO"}> Read More > </Link>
													</div>
												  </div>
											</div>
											<div className="w-[30rem] mt-5 h-[32rem] ml-5  shadow-2xl shadow-black  hover:scale-105"> 
												 <img src={CafteriaImg} className="w-[30rem] h-[25rem] rounded-t-2xl"></img>
												  <div className="w-[30rem] h-[3rem]">
													  <h3 className="text-3xl flex justify-center mt-3 items-center font-serif font-semibold">Cafteria</h3>
												  </div>
												  <div className="w-[30rem] h-[4rem] rounded-b-2xl bg-gradient-to-l facilities-Home  from-green-400">
												  	<div className="ml-3 pt-3">
												 		 <Link className="hover:text-black hover:no-underline no-underline font-semibold p-2 border-2 border-black rounded-xl text-lg" to={"/Cafteria"}> Read More > </Link>
													</div>
												  </div>
											</div>
											<div className="w-[30rem] mt-5 h-[32rem] ml-5 shadow-2xl shadow-black hover:scale-105 "> 
												<img src={TransportImg} className="w-[30rem] h-[25rem] rounded-t-2xl"></img>
												  <div className="w-[30rem] h-[3rem]">
													  <h3 className="text-3xl flex justify-center mt-3 items-center font-serif font-semibold">Transportation</h3>
												  </div>
												  <div className="w-[30rem] h-[4rem] rounded-b-2xl bg-gradient-to-l facilities-Home  from-green-400">
												  	<div className="ml-3 pt-3">
												 		 <Link className="hover:text-black hover:no-underline no-underline font-semibold p-2 border-2 border-black rounded-xl text-lg" to={"/Transportation"}> Read More > </Link>
													</div>
												  </div>
											</div>
											<div className="w-[30rem] mt-5 h-[32rem] ml-5 shadow-2xl shadow-black hover:scale-105"> 
												  <img src={HostelImg} className="w-[30rem] h-[25rem] rounded-t-2xl"></img>
												  <div className="w-[30rem] h-[3rem]">
													  <h3 className="text-3xl flex justify-center mt-3 items-center font-serif font-semibold">Hostels</h3>
												  </div>
												  <div className="w-[30rem] h-[4rem] rounded-b-2xl bg-gradient-to-l facilities-Home  from-green-400">
												  	<div className="ml-3 pt-3">
												 		 <Link className="hover:text-black hover:no-underline no-underline font-semibold p-2 border-2 border-black rounded-xl text-lg" to={"/Hostels"}> Read More > </Link>
													</div>
												  </div>
											</div>
											<div className="w-[30rem] mt-5 h-[32rem] ml-5 shadow-2xl shadow-black hover:scale-105"> 
												  <img src={sports} className="w-[30rem] h-[25rem] rounded-t-2xl"></img>
												  <div className="w-[30rem] h-[3rem]">
													  <h3 className="text-3xl flex justify-center mt-3 items-center font-serif font-semibold">Physical Education</h3>
												  </div>
												  <div className="w-[30rem] h-[4rem] rounded-b-2xl bg-gradient-to-l facilities-Home  from-green-400">
												  	<div className="ml-3 pt-3">
												 		 <Link className="hover:text-black hover:no-underline no-underline font-semibold p-2 border-2 border-black rounded-xl text-lg" to={"/Sports"}> Read More > </Link>
													</div>
												  </div>
											</div>
											<div className="w-[30rem] mt-5 h-[32rem] ml-5 shadow-2xl shadow-black hover:scale-105"> 
											     <img src={Others} className="w-[30rem] h-[25rem] rounded-t-2xl"></img>
												  <div className="w-[30rem] h-[3rem]">
													  <h3 className="text-3xl flex justify-center mt-3 items-center font-serif font-semibold">Other Campus Amenities</h3>
												  </div>
												  <div className="w-[30rem] h-[4rem] rounded-b-2xl bg-gradient-to-l facilities-Home  from-green-400">
												  	<div className="ml-3 pt-3">
												 		 <Link className="hover:text-black hover:no-underline no-underline font-semibold p-2 border-2 border-black rounded-xl text-lg" to={"/Others"}> Read More > </Link>
													</div>
												  </div>
											</div>
				</div>
	   </div>
	)
}
           



						




























