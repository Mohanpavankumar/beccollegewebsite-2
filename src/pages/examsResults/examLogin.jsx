import ExamHeader from "/src/components/examheader/examheader.jsx";
import { postResultData } from "/src/config/services.js";
import React, { useState, useEffect } from "react";


export default function ExamLogin() {
	const [data, setData] = useState([]);
	const postData = () => {
		postResultData()
			.then((res) => setData(res.data))
			.catch((err) => console.log("something went wrong", err));
	};

	useEffect(() => {
		postData();
	}, []);
	return (
		<>
			<ExamHeader bannerName="Results" />
			<div className="flex justify-around ">
				<div className="flex justify-center items-center">
					<div>
						<form className="my-2" onSubmit={postData}>
							<div className="mb-1">Registartion number</div>
							<input
								className="p-2 rounded-md border-primaryColor border-2 w-full focus:outline-none"
								type="email"
							></input>
						</form>
						<input type="submit" className="p-2 my-4 bg-primaryColor text-white text-center font-bold  rounded-lg cursor-pointer">
						</input>
					</div>
				</div>
			</div>
		</>
	);
}
