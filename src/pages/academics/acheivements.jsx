import React, { useEffect, useState } from "react";
import { getAcademicsData } from "../../config/services";
import './acheive.css';

let Acheivements = () => {
	const [data, setData] = useState([])
	const [tableData, setTableData] = useState([])
	const [years, setYears] = useState([])
	const [selectedYear, setSelectedYear] = useState("")

	const getData = () => {
		getAcademicsData().then(res =>
			setData(res.data)
		).catch(err =>
			console.log('something went wrong', err)
		)
	}

	const getYears = () => {
		setYears([...new Set(data.map(x => x.year))])
	}

	const getTableData = () => {
		if (!!selectedYear) {
			setTableData(data.filter(x => x.year == selectedYear))
		}
		else {
			setTableData(data)
		}
	}

	useEffect(() => {
		getData()
	}, [])

	useEffect(() => {
		getYears()
	}, [data])

	useEffect(() => {
		getTableData()
	}, [selectedYear, data])


	return (
		<>
			<div className="flex flex-col mt-4 px-8">
				<p className="text-xl ml-10 font-bold text-blue-800 underline">ACADEMICS ACHIEVEMENTS </p>
				<p className="text-lg ml-10 font-semibold text-blue-600">Outstanding Performance in Acharya Nagarjuna University Examinations</p>
				<p className="text-md ml-10 font-normal">The Performance of the Students of the College of different batches in the University Examinations is commendable as is evident from the tables given below.
				</p>
				<select name="SelectYear" id="select" className="mx-auto my-2" onChange={(e) => setSelectedYear(e.target.value)}>

					<option val={""} selected>Select a Year</option>
					{years.map(y =>
						<option val={y}>{y}</option>
					)}
				</select>

				<table className="table table-striped acheive-shared-table ml-10 w-auto">
					<thead>
						<tr>
							<th>S.NO</th>
							<th>Branch</th>
							<th>Regdno</th>
							<th>Name</th>
							<th>Rank</th>
						</tr>
					</thead>
					<tbody id="acheive-sroll">
						{!!tableData && tableData.map(x =>
							<tr>
								<td>{x.sno}</td>
								<td>{x.branch}</td>
								<td>{x.regdno}</td>
								<td>{x.name}</td>
								<td>{x.rank}</td>
							</tr>)}
					</tbody>
				</table>
			</div>
			<div>
				<p className="text-center text-lg ml-10 font-bold ">II)a)An Unique Saga of Success in GATE</p>
				<p className="text-base ml-10 font-roboto ">The College has established a tradition of sending year after year a large number of students to IITs, NITs and other reputed institutes for pursuing post-graduate studies based on their performance at the GATE examination conducted at the All India level. It is a matter of deep satisfaction that a good number of the alumni are acquitting themselves most creditably either in pursuing courses of higher study or in their chosen careers abroad / within India.</p>
				<p className="text-base ml-10 font-roboto mt-2">A percentile of 99.96 in Civil Engineering Branch – AN ALL INDIA FIRST RANK FOR 1997 – scored by Mr. Padavala Ravindra Babu of the College at GATE-97 marks a memorable acme of achievement and provide eloquent testimony to the efforts being put in by the staff and students.</p>
				<p className="text-center text-lg ml-10 font-bold mt-3">II) b) Record of Rare Brilliance in previous GATE examinations</p>
			</div>
			<div className="flex flex-col mt-4 px-8">
				<table className="table table-striped acheive-gateexam-shared-table mx-auto ">
					<thead>
						<tr>
							<th></th>
							<th>2010-11</th>
							<th>2011-12</th>
							<th>2012-13</th>
							<th>2013-14</th>
							<th>2014-15</th>
						</tr>
					</thead>
					<tbody id="acheive-sroll">
						<tr>
							<td><b>Chemical</b></td>
							<td>8</td>
							<td>2</td>
							<td>2</td>
							<td>1</td>
							<td>0</td>
						</tr>
						<tr>
							<td><d>Civil</d></td>
							<td>7</td>
							<td>33</td>
							<td>27</td>
							<td>16</td>
							<td>11</td>
						</tr>
						<tr>
							<td><b>CSE</b></td>
							<td>19</td>
							<td>28</td>
							<td>27</td>
							<td>8</td>
							<td>7</td>
						</tr>
						<tr>
							<td><b>ECE</b></td>
							<td></td>
							<td>23</td>
							<td>41</td>
							<td>39</td>
							<td>15</td>
						</tr>
						<tr>
							<td><b>EEE</b></td>
							<td>15</td>
							<td>18</td>
							<td>21</td>
							<td>14</td>
							<td>11</td>
						</tr>
						<tr>
							<td><b>E&I</b></td>
							<td>2</td>
							<td>6</td>
							<td>1</td>
							<td>2</td>
							<td>0</td>
						</tr>
						<tr>
							<td><b>IT</b></td>
							<td>4</td>
							<td>8</td>
							<td>3</td>
							<td>1</td>
							<td>1</td>
						</tr>
						<tr>
							<td><b>ME</b></td>
							<td>14</td>
							<td>13</td>
							<td>14</td>
							<td>16</td>
							<td>7</td>
						</tr>
					</tbody>
				</table>
			</div>



			<p className="text-center text-lg ml-10 font-bold">Challenging Step-up Performance in GRE</p>
			<p className="text-base ml-8 font-roboto">A good number of students got creditable scores in GRE & TOEFL during the last five years. On an average, 50 students achieved creditable GRE & TOEFL scores every year during the last four years. Every year, about 10 students obtaine a score of more than 310 out of a maximum score of 360.</p>

		</>

	)
}
export default Acheivements;