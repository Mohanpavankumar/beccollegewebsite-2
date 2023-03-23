import React, { useEffect, useState } from "react";
import { getAcademicsData } from "../../config/services";

let acheivements =() =>{

    const [data, setData] = useState([])

	const getData = () => {
	getAcademicsData().then(res =>
			setData(res.data)
		).catch(err =>
			console.log('something went wrong', err)
		)
	}

	useEffect(() => {
		getData()
	}, [])

    return(
        <>
        {data.map(x =>
        <>
        {x.academicsData.map(y =>
        <div className="table-content">
        <p id="2007-2011" className=" data not-sr-only text-center border-2 border-solid border-black rounded-lg max-w-md min-w-min m-auto overflow-scroll h-96 border-collapse">
        <table>
          <th>S.no</th>
          <th>Branch</th>
          <th>Redg.No</th>
          <th>Name</th>
          <th>Rank</th>
          <tr>
            <td>{y.sno}</td>
            <td rowspan="7">{y.branch}</td>
            <td>{y.regdno}</td>
            <td>{y.name}</td>
            <td>{y.rank}</td>
          </tr>
        </table>
        </p>
        </div>
        )}
        </>
            )}
        </>
    )
}
export default acheivements;