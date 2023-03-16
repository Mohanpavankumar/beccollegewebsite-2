import '/src/pages/Placements/Placements.css'
import React, {useState, useEffect} from "react";
import Chart from "react-apexcharts";

import { getPlacementData } from "/src/config/services.js";


let YearWisePlacements=() =>{
  const [showbyYears, setshowbyYears] = React.useState(1);
  const [placementYear, setplacementYear] = React.useState(new Date().getFullYear()-1+"-"+new Date().getFullYear());
  const [data, setData] = useState([])
  const [maxSal, setmaxSal] = useState("")
  const [minSal, setminSal] = useState("")
  const [avgSal, setavgSal] = useState("")
  const [yearwiseData, setyearwiseData] = useState([])

	const getData = () => {
		getPlacementData().then(res =>
			  //setData(res.data)
      setData(res.data.flatMap(x => x.placementData))
		).catch(err =>
			console.log('something went wrong', err)
		)
	}

	useEffect(() => {
		getData()
	}, [])

  useEffect(() => {
		getSalaryDetails()
	}, [data])


  //YearWise Placements BarChart
  const getChartData = () =>{
    let uniqueCount = data.map(x=>x.academicyear)
    let duplicateCount = {};
uniqueCount.forEach(e => duplicateCount[e] = duplicateCount[e] ? duplicateCount[e] + 1 : 1);
let result = Object.keys(duplicateCount).map(e => 
  {
    return {year:e, count:duplicateCount[e]}
  });
  return result
  }

  //YearWise Placements DonutChart

  const setYears = (value)=>{
    setshowbyYears(value)
    const getYear = (new Date().getFullYear()-value)+"-"+(new Date().getFullYear()-value+1)
    setplacementYear(getYear)
  }
  const getyearwiseData = ()=>{
const counts = {};
for (const datum of data) {
  const k = `${datum.academicyear}_${datum.company}`;

  (counts[k] || (counts[k] = { ...datum, count: 0 })).count += 1;
  }

const result = Object.values(counts)
let setYear = placementYear.split('-')
//console.log("Res", result.filter(x=> (x.academicyear.split('-')[0]<=setYear[1])))
return result.filter(x=> x.academicyear== placementYear)
}

const getSalaryDetails = ()=>{
  setminSal(Math.min(...data.filter(x=>x.academicyear==placementYear).map(y => Number(y.salary))))
  setmaxSal(Math.max(...data.filter(x=>x.academicyear==placementYear).map(y => Number(y.salary))))
  setavgSal(Math.round((data.filter(x=>x.academicyear==placementYear).reduce((y,z)=>Number(y)+Number(z.salary),0)/data.length)*10))
}
  
  
    return(
        <>
    <>
    {/* YearWise Placements BarChart */}
    <React.Fragment>
      <div className="BarChart container-fluid mb-5">

        <Chart
          type="bar"
          width={900}
          height={500}
          series={[
            {
              name: "No of Offers",
              data: getChartData().map(y=>y.count),
            },
          ]}
          
          options={{
            title: {
              text: "YearWise Placements",
              style: { fontSize: 30 },
              align:"center",
            },
            xaxis: {
              tickPlacement: "on",
              categories: getChartData().map(y=>y.year),
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
              show: true,
              position: "right",
            },
            colors: ['#0CE816', '#0C3EE8', '#9C27B0', '#FFC300', '#EA0EE0', '#FFC300', '#0C3EE8','#9C27B0', '#0EEAE0', '#0C3EE8'],
            
          }}
        ></Chart>
      </div>
    </React.Fragment>
    </>
    
    
    <div className='ml-[65rem]'>
      <select className='selectYears' value={showbyYears} onChange={(event) => setYears(event.target.value)}>
          <option value={1}>2022-2023</option>
          <option value={2}>2021-2022</option>
          <option value={3}>2020-2021</option>
          <option value={4}>2019-2020</option>
          <option value={5}>2018-2019</option>
      </select>
    </div>
      <div className='placements-header flex p-1'>Placements {placementYear}
      <div className='pl-72'>Max sal : {maxSal}LPA, Avg sal : {avgSal}LPA, Min sal : {minSal}LPA</div>
      </div>

      <React.Fragment>
      <div className="DonutChart container-fluid mb-5">
      <Chart 
            type="donut"
            width={900}
            height={500}
            series={getyearwiseData().map(y=>y.count)}

            options={{
             labels: getyearwiseData().map(y=>y.company),
             colors: ['#F44336', '#9C27B0', '#462626', '#E91E63','#591478', '#DF5877', '#EAE70E', '#EA890E', '#899286', '#ABEA0E', '#18EA0E', '#0EEAD9',
                          '#0E9AEA', '#0E0EEA', '#750EEA', '#EA0EEA', '#EA0E6F', '#EA0E0E', '#AE9595', '#608553', '#BDFFFC', '#CD69C4'],
             title:{
                // text:`Placements ${placementYear}`,
                // style: {
                //   fontSize:  '30',
                //   fontWeight:  'bold',

                // },                
             },
             

             plotOptions:{
             pie:{
                donut:{
                    labels:{
                        show:true,
                        total:{
                            show:true,
                            showAlways:true,
                        }
                    }
                }
             }

             },
             dataLabels:{
                enabled:true,
             }
            }}
            />
        </div>
    </React.Fragment>
        
        </>
    )
}
export default YearWisePlacements