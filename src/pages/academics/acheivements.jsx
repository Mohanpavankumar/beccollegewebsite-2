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
		setYears(data.map(x => x.year))
	}


	useEffect(() => {
		getData()
	}, [])


	useEffect(() => {
		getYears()
	}, [data])

	useEffect(() => {
		setTableData(data.filter(x => x.year == selectedYear))
	}, [selectedYear, data])


	return (
		<div className="flex flex-col mt-4 px-8">
			<h2 className='text-danger mb-4 mx-auto'>{"Title"}</h2>
			<select name="SelectYear" id="select" className="mx-auto my-2" onChange={(e) => setSelectedYear(e.target.value)}>
				<option val={selectedYear} selected>{selectedYear}</option>
				{years.map(y =>
					<option val={y}>{y}</option>
				)}
			</select>
			<table className="table table-striped acheive-shared-table">
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
	)
}
export default Acheivements;