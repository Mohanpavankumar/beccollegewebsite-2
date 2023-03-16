import React, {useState, useEffect} from "react";
import { getDepartmentsData } from "/src/config/services.js";

let staff = () =>{
    const [data, setData] = useState([])

    const getData = () => {
		getDepartmentsData().then(res =>
			setData(res.data)
		).catch(err =>
			console.log('something went wrong', err)
		)
	}

    useEffect(() => {
		getData()
	}, [])

    return (
		<>
			{data.map(c =>
				<>
					<div className="mt-10 flex flex-row justify-evenly">
						{c.staffdata.map(x =>
								<div className="flex">
									{x.name}
                                    {x.department}
                                    {x.designation}
                                    {x.doj}
                                    {x.deptid}
                                    {x.email}
                                </div>
						)}
					</div>
				</>)}
		</>
	);
        
}
export default staff;