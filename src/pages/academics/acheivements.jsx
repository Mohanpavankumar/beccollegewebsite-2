import React, { useEffect, useState } from "react";
import { getAcademicsData } from "../../config/services";

let Acheivements =() =>{

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
      <div>{
        !!data && data.map(x=>
          <div>{x.branch}</div>
          )
        
        }</div>
    )
}
export default Acheivements;