import collegeLogo from "/src/assets/logo.png";
import no1 from "/src/assets/no1.png";
import Navbar from "/src/components/navbar/navbar";
import nirf from "/src/assets/nirf.png";
import iqac from "/src/assets/images.jpg";
import naac from "/src/assets/naac.png";
import aicte from "/src/assets/aicte.png";
import { Link } from "react-router-dom";
let Header = () => {
  return (
    <>
      <header className="general-header grid grid-cols-2 grid-rows-2">
        <div className="col-span-2 flex">
          <img
            className="college-logo hidden md:block mt-6 h-14 md:m-2 xl:h-36"
            src={collegeLogo}
          ></img>
          <div className="college-desc flex flex-col justify-center items-center m-3 md:-mt-2 w-max">
            <div className="college-title text-primaryColor font-bold text-sm md:text-lg xl:text-3xl">
              BAPATLA ENGINEERING COLLEGE
            </div>
            <div className="text-xs font-bold xl:text-lg">(AUTONOMOUS)</div>
            <div className="text-xs xl:text-xl">
              Affiliated to Acharaya Nagarjuna University, Guntur
            </div>
            <div className="college-extra-info text-xs w-full flex justify-between">
              <div className="estd-date xl:text-base font-bold  ml-1">
                ESTD.1981
              </div>
              <div className="code xl:text-base font-bold  mr-1">
                EAMCET CODE: BECB
              </div>
            </div>
          </div>
        </div>
        <div className="flex gap-4 col-span-2 place-content-center">
          <div className="rounded-full border-primaryColor border-4 w-12 h-12 flex justify-center items-center">
            <img className="cursor-pointer" src={nirf}></img>
          </div>
          <div className="rounded-full border-primaryColor border-4  p-2  w-12 h-12 flex justify-center items-center">
            <img className="cursor-pointer rounded-full" src={iqac}></img>
          </div>
          <div className="rounded-full border-primaryColor border-4 w-12 h-12 flex justify-center items-center">
            <img className="rounded-full cursor-pointer" src={naac}></img>
          </div>
          <div className="rounded-full border-primaryColor border-4 p-2 w-12 h-12 flex justify-center items-center">
            <img className="rounded-full cursor-pointer" src={aicte}></img>
          </div>
        </div>
      </header>
      <nav className="w-full h-10 -mt-2 flex">
        {/* <nav className="bg-primaryColor w-full h-10 -mt-2 flex items-center"> */}
        <Navbar />
      </nav>
    </>
  );
};

export default Header;
