import '/src/pages/Placements/Placements.css'
import React from "react";
import Chart from "react-apexcharts";

let BranchWisePlacements=() =>{
    return(
        <>
<div className="nav dropdown items-start show w-full pt-4">
  <a className="btn ml-3 dropdown-toggle text-white" style={{background:"#0060b1"}} id="Placements2022-2023-tab" role="button" data-toggle="dropdown" aria-controls="Placements2022-2023" aria-selected="false" aria-haspopup="true" aria-expanded="false">
  BranchWise Placements
  </a>

  <div className="dropdown-menu nav-pills" id="tab" role="tablist" aria-orientation="vertical" aria-labelledby="tab">
    <a className="dropdown-item" id="Placements2022-2023-tab" data-toggle="pill" href="#Placements2022-2023" role="tab" aria-controls="Placements2022-2023" aria-selected="false">Placements 2022-2023</a>
    <a className="dropdown-item" id="Placements2021-2022-tab" data-toggle="pill" href="#Placements2021-2022" role="tab" aria-controls="Placements2021-2022" aria-selected="false">Placements 2021-2022</a>
    <a className="dropdown-item" id="Placements2020-2021-tab" data-toggle="pill" href="#Placements2020-2021" role="tab" aria-controls="Placements2020-2021" aria-selected="false">Placements 2020-2021</a>
    <a className="dropdown-item" id="Placements2019-2020-tab" data-toggle="pill" href="#Placements2019-2020" role="tab" aria-controls="Placements2019-2020" aria-selected="false">Placements 2019-2020</a>
    <a className="dropdown-item" id="Placements2018-2019-tab" data-toggle="pill" href="#Placements2018-2019" role="tab" aria-controls="Placements2018-2019" aria-selected="false">Placements 2018-2019</a>
    <a className="dropdown-item" id="Placements2017-2018-tab" data-toggle="pill" href="#Placements2017-2018" role="tab" aria-controls="Placements2017-2018" aria-selected="false">Placements 2017-2018</a>
    <a className="dropdown-item" id="Placements2016-2017-tab" data-toggle="pill" href="#Placements2016-2017" role="tab" aria-controls="Placements2016-2017" aria-selected="false">Placements 2016-2017</a>
    <a className="dropdown-item" id="Placements2015-2016-tab" data-toggle="pill" href="#Placements2015-2016" role="tab" aria-controls="Placements2015-2016" aria-selected="false">Placements 2015-2016</a>
    <a className="dropdown-item" id="Placements2014-2015-tab" data-toggle="pill" href="#Placements2014-2015" role="tab" aria-controls="Placements2014-2015" aria-selected="false">Placements 2014-2015</a>
    <a className="dropdown-item" id="Placements2013-2014-tab" data-toggle="pill" href="#Placements2013-2014" role="tab" aria-controls="Placements2013-2014" aria-selected="false">Placements 2013-2014</a>
  </div>

  <div className="left-navcontent pl-4">
		<div className="col">
    		<div className="tab-content" id="tabContent">
			    <div className="tab-pane fade show in active w-96" style={{width:"fit-content"}} id="Placements2022-2023" role="tabpanel" aria-labelledby="Placements2022-2023-tab">
            <div className='Placements2022-2023 pb-1'>Placements Statistics for Academic Year : 2022-2023</div>
              <div className='line w-32 h-1 mb-2' style={{background:"#0060b1"}}></div>

    <React.Fragment>
      <div className="BarChart1 container-fluid mb-5">
        <Chart
          type="bar"
          series={[
            {
              name: "Students Placed",
              data: [40,21,18,17,19,15,13],
            },
          ]}
          
          options={{
            title: {
              text: "AcademicYear: 2022 - 2023",
              style: { fontSize: 30 },
              align:"center",
            },

            xaxis: {
              tickPlacement: "on",
              categories: [
                "CSE",
                "IT",
                "ECE",
                "EEE",
                "MECH",
                "CIVIL",
                "EIE",
              ],
            },

            yaxis: {
              labels: {
                formatter: (val) => {
                  return `${val}`;
                },
                style: { fontSize: "15", colors: ["black"] },
              },
              title: {
                text: "No of Students Placed",
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
			</div>
			<div className="tab-pane fade" id="Placements2021-2022" role="tabpanel" aria-labelledby="Placements2021-2022-tab">
        <div className='Placements2021-2022 pb-1'>Placements Statistics for Academic Year : 2021-2022</div>
          <div className='line w-32 h-1 mb-2' style={{background:"#0060b1"}}></div>

      <React.Fragment>
      <div className="BarChart1 container-fluid mb-5">

        <Chart
          type="bar"
          series={[
            {
              name: "Students Placed",
              data: [87,66,53,45,40,34,20],
            },
          ]}
          
          options={{
            title: {
              text: "AcademicYear: 2021 - 2022",
              style: { fontSize: 30 },
              align:"center",
            },

            xaxis: {
              tickPlacement: "on",
              categories: [
                "CSE",
                "IT",
                "ECE",
                "EEE",
                "MECH",
                "CIVIL",
                "EIE",
              ],
            },

            yaxis: {
              labels: {
                formatter: (val) => {
                  return `${val}`;
                },
                style: { fontSize: "15", colors: ["black"] },
              },
              title: {
                text: "No of Students Placed",
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
			</div>
			<div className="tab-pane fade" id="Placements2020-2021" role="tabpanel" aria-labelledby="Placements2020-2021-tab">
				<div className='Placements2020-2021 pb-1'>Placements Statistics for Academic Year : 2020-2021</div>
				<div className='line w-32 h-1' style={{background:"#0060b1"}}></div>
                This is Placements 2020-2021 Page
			</div>
			<div className="tab-pane fade" id="Placements2019-2020" role="tabpanel" aria-labelledby="Placements2019-2020-tab">
				<div className='Placements2019-2020 pb-1'>Placements Statistics for Academic Year : 2019-2020</div>
				<div className='line w-32 h-1' style={{background:"#0060b1"}}></div>
                This is Placements 2019-2020 Page
			</div>
			<div className="tab-pane fade" id="Placements2018-2019" role="tabpanel" aria-labelledby="Placements2018-2019-tab">
			<div className='Placements2018-2019 pb-1'>Placements Statistics for Academic Year : 2018-2019</div>
				<div className='line w-32 h-1' style={{background:"#0060b1"}}></div>
                This is Placements 2018-2019 Page
			</div>
            <div className="tab-pane fade" id="Placements2017-2018" role="tabpanel" aria-labelledby="Placements2017-2018-tab">
			<div className='Placements2017-2018 pb-1'>Placements Statistics for Academic Year : 2017-2018</div>
				<div className='line w-32 h-1' style={{background:"#0060b1"}}></div>
                This is Placements 2017-2018 Page
			</div>
            <div className="tab-pane fade" id="Placements2016-2017" role="tabpanel" aria-labelledby="Placements2016-2017-tab">
			<div className='Placements2016-2017 pb-1'>Placements Statistics for Academic Year : 2016-2017</div>
				<div className='line w-32 h-1' style={{background:"#0060b1"}}></div>
                This is Placements 2016-2017 Page
			</div>
            <div className="tab-pane fade" id="Placements2015-2016" role="tabpanel" aria-labelledby="Placements2015-2016-tab">
			<div className='Placements2015-2016 pb-1'>Placements Statistics for Academic Year : 2015-2016</div>
				<div className='line w-32 h-1' style={{background:"#0060b1"}}></div>
                This is Placements 2015-2016 Page
			</div>
            <div className="tab-pane fade" id="Placements2014-2015" role="tabpanel" aria-labelledby="Placements2014-2015-tab">
			<div className='Placements2014-2015 pb-1'>Placements Statistics for Academic Year : 2014-2015</div>
				<div className='line w-32 h-1' style={{background:"#0060b1"}}></div>
                This is Placements 2014-2015 Page
			</div>
            <div className="tab-pane fade" id="Placements2013-2014" role="tabpanel" aria-labelledby="Placements2013-2014-tab">
			<div className='Placements2013-2014 pb-1'>Placements Statistics for Academic Year : 2013-2014</div>
				<div className='line w-32 h-1' style={{background:"#0060b1"}}></div>
                This is Placements 2013-2014 Page
			</div>
			</div>
  		</div>
	</div>
</div>  
        </>
    )
}
export default BranchWisePlacements