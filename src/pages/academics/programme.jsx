import React from 'react';
import csc from "/src/assets/academics/csc.png"
import it from "/src/assets/academics/it.png"
import AIML from "/src/assets/academics/AI & ML.png"
import civil from "/src/assets/academics/Civil.jpg"
import cs from "/src/assets/academics/cyber-security.jpg"
import ds from "/src/assets/academics/Data science.jpg"
import eee from "/src/assets/academics/EEE.jpg"
import ece from "/src/assets/academics/ECE.jpg"
import eie from "/src/assets/academics/EIE.jpg"
import me from "/src/assets/academics/ME.jpg"
import cad from "/src/assets/academics/cad.png"
import cse from "/src/assets/academics/cse.jpg"
import cesp from "/src/assets/academics/ce&sp.jpg"
import se from "/src/assets/academics/se.jpg"
import pse from "/src/assets/academics/pse.jpg"
import mac from "/src/assets/academics/mac.jpg"
import mca from "/src/assets/academics/mca.jpg"
import mse from "/src/assets/academics/mse.jpg"
import maths from "/src/assets/academics/maths.jpg"
import mcs from "/src/assets/academics/Mcs.png"
import physics from "/src/assets/academics/physics.jpg"
import oc from "/src/assets/academics/oc.jpg"
import dmech from "/src/assets/academics/dmech.jpg"
import deee from "/src/assets/academics/deee.jpg"
import dcivil from "/src/assets/academics/dcivil.jpg"
import dcme from "/src/assets/academics/dcme.jpg"
import dece from "/src/assets/academics/dece.jpg"
import '/src/routes/Search.css'

  class Programme extends React.Component {
    constructor() {
      super();
      this.state = {
        filterList: [
          {
            id: 11,
            name: "undergraduate",
            value: "UNDERGRADUATE"
          },
          {
            id: 12,
            name: "Postgraduate",
            value: "POSTGRADUATE"
          },
          {
            id: 13,
            name: "diploma",
            value: "DIPLOMA"
          }
        ],
        searchLists: [
          
         
          {
            id: 1,
            image: AIML,
            course:"B.Tech. Artificial Intelligence & Machine Learning",
            type: "UNDERGRADUATE",
            name: "Programme level",
            seats: "seats",
            available: "90 + 9",
            duration: "Duration",
            years: "4  years"
          },
          {
            id: 2,
            image: civil,
            course:"B.Tech. Civil Engineering",
            type: "UNDERGRADUATE",
            name: "Programme level",
            seats: "seats",
            available: "90 + 9",
            duration: "Duration",
            years: "4  years"
          },
          
          {
            id: 3,
            image: csc,
            course:"B.Tech. Computer Science & Engineering",
            type: "UNDERGRADUATE",
            name: "Programme level",
            seats: "seats",
            available: "180 + 18",
            duration: "Duration",
            years: "4  years"
          },
          
          {
            id: 4,
            image: cs,
            course:"B.Tech. Cyber Security",
            type: "UNDERGRADUATE",
            name: "Programme level",
            seats: "seats",
            available: "60 + 6",
            duration: "Duration",
            years: "4  years"
          },
          {
            id: 5,
            image: ds,
            course:"B.Tech. Data Science",
            type: "UNDERGRADUATE",
            name: "Programme level",
            seats: "seats",
            available: "60 + 6",
            duration: "Duration",
            years: "4  years"
          },
          {
            id: 6,
            image: eee,
            course:"B.Tech. Electrical and Electonics Engineering",
            type: "UNDERGRADUATE",
            name: "Programme level",
            seats: "seats",
            available: "120 + 12",
            duration: "Duration",
            years: "4  years"
          },
          {
            id: 7,
            image: ece,
            course:"B.Tech. Electrical and Communication Engineering",
            type: "UNDERGRADUATE",
            name: "Programme level",
            seats: "seats",
            available: "180 + 18",
            duration: "Duration",
            years: "4  years"
          },
          {
            id: 8,
            image: eie,
            course:"B.Tech. Electronics & Instrumentation Engineering",
            type: "UNDERGRADUATE",
            name: "Programme level",
            seats: "seats",
            available: "30 + 3",
            duration: "Duration",
            years: "4  years"
          },
          {
            id: 9,
            image: it,
            course:"B.Tech. Information Technology",
            type: "UNDERGRADUATE",
            name: "Programme level",
            seats: "seats",
            available: "120 + 12",
            duration: "Duration",
            years: "4  years"
          },
          {
            id: 10,
            image: me,
            course:"B.Tech. Mechanical Engineering",
            type: "UNDERGRADUATE",
            name: "Programme level",
            seats: "seats",
            available: "90 + 9",
            duration: "Duration",
            years: "4  years"
          },
          {
            id: 11,
            image: cad,
            course:" M.Tech. CAD/CAM specialization in Mech. Engg. Dept",
            type: "POSTGRADUATE",
            name: "Programme level",
            seats: "seats",
            available: "6",
            duration: "Duration",
            years: "2  years"
          },
          {
            id: 12,
            image: cesp,
            course:"M.Tech. Communications & Signal Processing in ECE Dept",
            type: "POSTGRADUATE",
            name: "Programme level",
            seats: "seats",
            available: "6",
            duration: "Duration",
            years: "2  years"
          },
          {
            id: 13,
            image: cse,
            course:"M.Tech. Computer Science & Engineering In CSE Dept",
            type: "POSTGRADUATE",
            name: "Programme level",
            seats: "seats",
            available: "6",
            duration: "Duration",
            years: "2  years"
          },
          {
            id: 14,
            image: se,
            course:"M.Tech. Structural Engineering in Civil Dept",
            type: "POSTGRADUATE",
            name: "Programme level",
            seats: "seats",
            available: "6",
            duration: "Duration",
            years: "2  years"
          },
          {
            id: 15,
            image: pse,
            course:"M.Tech. Power Systems Engineering in EEE Dept",
            type: "POSTGRADUATE",
            name: "Programme level",
            seats: "seats",
            available: "6",
            duration: "Duration",
            years: "2  years"
          },
          {
            id: 16,
            image: mca,
            course:"MCA",
            type: "POSTGRADUATE",
            name: "Programme level",
            seats: "seats",
            available: "60",
            duration: "Duration",
            years: "2  years"
          },
          {
            id: 17,
            image: mac,
            course:"M. Sc.(Analytical Chemistry)",
            type: "POSTGRADUATE",
            name: "Programme level",
            seats: "seats",
            available: "30",
            duration: "Duration",
            years: "2  years"
          },
          {
            id: 18,
            image: mse,
            course:"M.Sc.(Electronics)",
            type: "POSTGRADUATE",
            name: "Programme level",
            seats: "seats",
            available: "40",
            duration: "Duration",
            years: "2  years"
          },
          {
            id: 19,
            image: maths,
            course:"M. Sc.(Maths)",
            type: "POSTGRADUATE",
            name: "Programme level",
            seats: "seats",
            available: "40",
            duration: "Duration",
            years: "2  years"
          },
          {
            id: 20,
            image: mcs,
            course:" M. Sc.(Computer Sciences)",
            type: "POSTGRADUATE",
            name: "Programme level",
            seats: "seats",
            available: "40",
            duration: "Duration",
            years: "2  years"
          },
          {
            id: 21,
            image: physics,
            course:" M. Sc.(Physics)",
            type: "POSTGRADUATE",
            name: "Programme level",
            seats: "seats",
            available: "30",
            duration: "Duration",
            years: "2  years"
          },
          {
            id: 22,
            image: oc,
            course:" M. Sc.(Organic Chemistry)",
            type: "POSTGRADUATE",
            name: "Programme level",
            seats: "seats",
            available: "30",
            duration: "Duration",
            years: "2  years"
          },
          {
            id: 23,
            image: dmech,
            course:"Diploma in Mechanical Engineering",
            type: "DIPLOMA",
            name: "Programme level",
            seats: "seats",
            available: "30 + 30",
            duration: "Duration",
            years: "3  years"
          },
          {
            id: 24,
            image: dcivil,
            course:"Diploma in Computer Engineering",
            type: "DIPLOMA",
            name: "Programme level",
            seats: "seats",
            available: "90 + 90",
            duration: "Duration",
            years: "3  years"
          },
          {
            id: 25,
            image: dcme,
            course:"Diploma in Civil Engineering",
            type: "DIPLOMA",
            name: "Programme level",
            seats: "seats",
            available: "30 + 30",
            duration: "Duration",
            years: "3  years"
          },
          {
            id: 26,
            image: deee,
            course:"Diploma in Electrical and Electronics Engineering",
            type: "DIPLOMA",
            name: "Programme level",
            seats: "seats",
            available: "30 + 30",
            duration: "Duration",
            years: "3  years"
          },
          {
            id: 27,
            image: dece,
            course:"Diploma in Electronics and Communication Engineering",
            type: "DIPLOMA",
            name: "Programme level",
            seats: "seats",
            available: "60 + 60",
            duration: "Duration",
            years: "3  years"
          },
          
        ],
        activeFilter: []
      };
    }
  
    onFilterChange(filter) {
      const { filterList, activeFilter } = this.state;
      if (filter === "ALL") {
        if (activeFilter.length === filterList.length) {
          this.setState({ activeFilter: [] });
        } else {
          this.setState({ activeFilter: filterList.map(filter => filter.value) });
        }
      } else {
        if (activeFilter.includes(filter)) {
          const filterIndex = activeFilter.indexOf(filter);
          const newFilter = [...activeFilter];
          newFilter.splice(filterIndex, 1);
          this.setState({ activeFilter: newFilter });
        } else {
          this.setState({ activeFilter: [...activeFilter, filter] });
        }
      }
    }
  
    render() {
      const { filterList, activeFilter } = this.state;
      let filteredList;
      if (
        activeFilter.length === 0 ||
        activeFilter.length === filterList.length
      ) {
        filteredList = this.state.searchLists;
      } else {
        filteredList = this.state.searchLists.filter(item =>
          this.state.activeFilter.includes(item.type)
        );
      }
      return (
        <>
         <div className='font-bold text-xl  text-blue-800 underline mt-5 ml-5'>PROGRAMMES OFFERED</div>
        <div className='flex mt-10  '>
        <div className="mx-12  justify-around ">
          <form className='flex flex-col w-max'>
            <label htmlFor="myInput">
            <div className='font-bold text-xl'>FILTER</div>
            <input className='text-lg'
              type="checkbox"
              onClick={() => this.onFilterChange("ALL")}
              checked={activeFilter.length === filterList.length}
              id= " myInput"
            />All
            </label>
            {this.state.filterList.map(filter => (
              <React.Fragment>
                <div className='flex items-baseline text-lg'>
                <label htmlFor={filter.id}><input className='flex flex-row'
                  type="checkbox" 
                  checked={activeFilter.includes(filter.value)}
                  onClick={() => this.onFilterChange(filter.value)}
                  id={filter.id}
                />
                </label>
                {filter.name}
                </div>
              </React.Fragment>
            ))}
          </form>
       </div>
       <div >
          <ul  className="flex flex-wrap ">
            {filteredList.map(item => (
              
                <div key={item.id} className="ml-4 justify-evenly" >
                
                <li > 
                  <img  src={item.image} className="image hover:scale-90 transition duration-300 ease-in-out"></img>
                  <div className='font-bold'>{item.course}</div>
                  <div><span className='font-bold'>{item.name}</span><span className='font-semibold'> - {item.type}</span></div>
                  <div><span className='font-bold'> {item.seats}</span><span className='font-semibold'>-{item.available}</span></div>
                  <span className='font-bold'> {item.duration}</span><span className='font-semibold'> - {item.years}</span>
                </li>
                </div>  
            ))}
          </ul>
          </div>
          </div>
        </>
      );
    }
  }
  
export default Programme;