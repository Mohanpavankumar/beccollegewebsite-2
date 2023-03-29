import '/src/pages/Placements/Placements.css'
import Chart from "react-apexcharts";
import React, {useState, useEffect} from "react";
import { getPlacementData } from "/src/config/services.js";
import { Link } from 'react-router-dom';

let BranchWisePlacements=() =>{

  const [showbyYears, setshowbyYears] = React.useState(new Date().getFullYear()-1+"-"+new Date().getFullYear()); 
  const [data, setData] = useState([])
  const [chartData, setChartData] = useState([])
  const getData = () => {
		getPlacementData().then(res =>
      setData(res.data.flatMap(x => x.placementData))
		).catch(err =>
			console.log('something went wrong', err)
		)
	}

	useEffect(() => {
		getData()
	}, [])


  useEffect(() => {
		getChartData()
	}, [data,showbyYears])

  const getChartData = () =>{
    let uniqueCount = data.filter(x => x.academicyear==showbyYears).map(x=>x.deptid)
    let duplicateCount = {};
uniqueCount.forEach(e => duplicateCount[e] = duplicateCount[e] ? duplicateCount[e] + 1 : 1);
let result = Object.keys(duplicateCount).map(e => 
  {
    return {deptid:e, count:duplicateCount[e]}
  });
  setChartData(result)
  }

    return(
        <>
<div className="nav dropdown items-start show w-full pt-4">
  <div className="left-navcontent pl-4">
		<div className="col">
    		<div className="tab-content" id="tabContent">
			    <div className="tab-pane fade show in active w-96" style={{width:"fit-content"}} id="Placements2022-2023" role="tabpanel" aria-labelledby="Placements2022-2023-tab">
            <div className='ml-[74rem]'>
              <select className='selectYears' value={showbyYears} onChange={(event) => setshowbyYears(event.target.value)}>
                  <option value={"2022-2023"}>2022-2023</option>
                  <option value={"2021-2022"}>2021-2022</option>
                  <option value={"2020-2021"}>2020-2021</option>
                  <option value={"2019-2020"}>2019-2020</option>
                  <option value={"2018-2019"}>2018-2019</option>
              </select>
            </div>
    <div className='branchwise-placements-header flex p-1'>Placements {showbyYears}</div>
    <React.Fragment>
      <div className="DonutChart container-fluid mb-5">
        <Chart
          type="bar"
          height={500}
          series={[
            {
              name: "No of Offers",
              data: chartData.map(y=>y.count),
            },
          ]}
          
          options={{
            title: {
              text: "BranchWise Placements",
              style: { fontSize: 30 },
              align:"center",
            },

            xaxis: {
              tickPlacement: "on",
              categories: chartData.map(y=>y.deptid)
            },

            yaxis: {
              labels: {
                formatter: (val) => {
                  return `${val}`;
                },
                style: { fontSize: "15", colors: ["black"] },
              },
              title: {
                text: "No of Offers",
                style: { color: "black", fontSize: 15 },
              },
            },
            plotOptions: {
              bar: {
                  distributed: true,
                  vertical: true,
                },
            },
            legend: {
              show: false,
              position: "right",
            },
            colors: ['#0CE816', '#0C3EE8', '#9C27B0', '#FFC300', '#EA0EE0', '#FFC300', '#0C3EE8','#9C27B0', '#0EEAE0', '#0C3EE8'],
            dataLabels: {
              formatter: (val) => {
                return `${val}`;
              },
              style: {
                colors: ["#f4f4f4"],
                fontSize: 15,
              },
            },
          }}
        ></Chart>
      </div>
    </React.Fragment>
    <Link className="placements-home-link1" to={"/Placements"} >Placements Home</Link>
    </div>
			</div>
			</div>
  		</div>
	</div> 
        </>
    )
}
export default BranchWisePlacements