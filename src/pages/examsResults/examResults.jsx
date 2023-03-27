import ExamHeader from "/src/components/examheader/examheader.jsx";
import { getResultData } from "/src/config/services.js";
import React, { useState, useEffect } from "react";

export default function examResults() {
	const [data, setData] = useState([]);
	const getData = () => {
		getResultData()
			.then((res) => setData(res.data))
			.catch((err) => console.log("something went wrong", err));
	};
	useEffect(() => {
		getData();
	}, []);

	return (
		<>
			<ExamHeader bannerName="Results" />
			{data.map((c) => (
				<>
					{/* {c.resultData.map((resultss) => (
						<div className="text-center">
							<div>{resultss.name}</div>
							<h3 className=" font-semibold text-sm md:text-base text-primaryColor">
								{resultss.studid}
							</h3>
						</div>
					))} */}
					<div className="flex w-full mx-10 mb-10 justify-around">
						<div>Name: {c.resultData[0].name}</div>
						<div>Registration number: {c.resultData[0].studid}</div>
					</div>
					<div className="flex flex-row items-center justify-center flex-start">
						<div className="tableRow flex flex-col items-center">
							<div className="bg-primaryColor text-white p-3 rounded-tl-2xl font-bold">
								Subject Code
							</div>
							<div className="w-full text-center p-2 font-bold">
								{c.resultData[0].sub1code}
							</div>
							<div className="bg-[#74BAF3] w-full text-center p-2 font-bold">
								{c.resultData[0].sub2code}
							</div>
							<div className="w-full text-center p-2 font-bold">
								{c.resultData[0].sub3code}
							</div>
							<div className="bg-[#74BAF3] w-full text-center p-2 font-bold">
								{c.resultData[0].sub4code}
							</div>
							<div className="w-full text-center p-2 font-bold">
								{c.resultData[0].sub5code}
							</div>
							<div className="bg-[#74BAF3] w-full text-center p-2 font-bold">
								{c.resultData[0].sub6code}
							</div>
							<div className="w-full text-center p-2 font-bold">
								{c.resultData[0].sub7code}
							</div>
							<div className="bg-[#74BAF3] w-full text-center p-2 font-bold">
								{c.resultData[0].sub8code}
							</div>
							<div className="w-full text-center p-2 font-bold">
								{c.resultData[0].sub9code}
							</div>
						</div>
						<div className="tableRow flex flex-col items-center">
							<div className="bg-primaryColor w-max text-white p-3 font-bold">
								Subject name
							</div>
							<div className="w-full text-center p-2 font-bold">
								{c.resultData[0].sub1name}
							</div>
							<div className="bg-[#74BAF3] w-full text-center p-2 font-bold">
								{c.resultData[0].sub2name}
							</div>
							<div className="w-full text-center p-2 font-bold">
								{c.resultData[0].sub3name}
							</div>
							<div className="bg-[#74BAF3] w-full text-center p-2 font-bold">
								{c.resultData[0].sub4name}
							</div>
							<div className="w-full text-center p-2 font-bold">
								{c.resultData[0].sub5name}
							</div>
							<div className="bg-[#74BAF3] w-full text-center p-2 font-bold">
								{c.resultData[0].sub6name}
							</div>
							<div className="w-full text-center p-2 font-bold">
								{c.resultData[0].sub7name}
							</div>
							<div className="bg-[#74BAF3] w-full text-center p-2 font-bold">
								{c.resultData[0].sub8name}
							</div>
							<div className="w-full text-center p-2 font-bold">
								{c.resultData[0].sub9name}
							</div>
						</div>
						<div className="tableRow flex flex-col items-center">
							<div className="bg-primaryColor w-max text-white p-3 font-bold">
								CA
							</div>
							<div className="w-full text-center p-2 font-bold">
								{c.resultData[0].sub1ca}
							</div>
							<div className="bg-[#74BAF3] w-full text-center p-2 font-bold">
								{c.resultData[0].sub2ca}
							</div>
							<div className="w-full text-center p-2 font-bold">
								{c.resultData[0].sub3ca}
							</div>
							<div className="bg-[#74BAF3] w-full text-center p-2 font-bold">
								{c.resultData[0].sub4ca}
							</div>
							<div className="w-full text-center p-2 font-bold">
								{c.resultData[0].sub5ca}
							</div>
							<div className="bg-[#74BAF3] w-full text-center p-2 font-bold">
								{c.resultData[0].sub6ca}
							</div>
							<div className="w-full text-center p-2 font-bold">
								{c.resultData[0].sub7ca}
							</div>
							<div className="bg-[#74BAF3] w-full text-center p-2 font-bold">
								{c.resultData[0].sub8ca}
							</div>
							<div className="w-full text-center p-2 font-bold">
								{c.resultData[0].sub9ca}
							</div>
						</div>
						<div className="tableRow flex flex-col items-center">
							<div className="bg-primaryColor w-max text-white p-3 font-bold">
								FA
							</div>
							<div className="w-full text-center p-2 font-bold">
								{c.resultData[0].sub1fa}
							</div>
							<div className="bg-[#74BAF3] w-full text-center p-2 font-bold">
								{c.resultData[0].sub2fa}
							</div>
							<div className="w-full text-center p-2 font-bold">
								{c.resultData[0].sub3fa}
							</div>
							<div className="bg-[#74BAF3] w-full text-center p-2 font-bold">
								{c.resultData[0].sub4fa}
							</div>
							<div className="w-full text-center p-2 font-bold">
								{c.resultData[0].sub5fa}
							</div>
							<div className="bg-[#74BAF3] w-full text-center p-2 font-bold">
								{c.resultData[0].sub6fa}
							</div>
							<div className="w-full text-center p-2 font-bold">
								{c.resultData[0].sub7fa}
							</div>
							<div className="bg-[#74BAF3] w-full text-center p-2 font-bold">
								{c.resultData[0].sub8fa}
							</div>
							<div className="w-full text-center p-2 font-bold">
								{c.resultData[0].sub9fa}
							</div>
						</div>
						<div className="tableRow flex flex-col items-center">
							<div className="bg-primaryColor w-max text-white p-3 font-bold">
								Subject Total
							</div>
							<div className="w-full text-center p-2 font-bold">
								{c.resultData[0].sub1total}
							</div>
							<div className="bg-[#74BAF3] w-full text-center p-2 font-bold">
								{c.resultData[0].sub2total}
							</div>
							<div className="w-full text-center p-2 font-bold">
								{c.resultData[0].sub3total}
							</div>
							<div className="bg-[#74BAF3] w-full text-center p-2 font-bold">
								{c.resultData[0].sub4total}
							</div>
							<div className="w-full text-center p-2 font-bold">
								{c.resultData[0].sub5total}
							</div>
							<div className="bg-[#74BAF3] w-full text-center p-2 font-bold">
								{c.resultData[0].sub6total}
							</div>
							<div className="w-full text-center p-2 font-bold">
								{c.resultData[0].sub7total}
							</div>
							<div className="bg-[#74BAF3] w-full text-center p-2 font-bold">
								{c.resultData[0].sub8total}
							</div>
							<div className="w-full text-center p-2 font-bold">
								{c.resultData[0].sub9total}
							</div>
						</div>
						<div className="tableRow flex flex-col items-center">
							<div className="bg-primaryColor w-max text-white p-3 font-bold">
								GP
							</div>
							<div className="w-full text-center p-2 font-bold">
								{c.resultData[0].sub1gp}
							</div>
							<div className="bg-[#74BAF3] w-full text-center p-2 font-bold">
								{c.resultData[0].sub2gp}
							</div>
							<div className="w-full text-center p-2 font-bold">
								{c.resultData[0].sub3gp}
							</div>
							<div className="bg-[#74BAF3] w-full text-center p-2 font-bold">
								{c.resultData[0].sub4gp}
							</div>
							<div className="w-full text-center p-2 font-bold">
								{c.resultData[0].sub5gp}
							</div>
							<div className="bg-[#74BAF3] w-full text-center p-2 font-bold">
								{c.resultData[0].sub6gp}
							</div>
							<div className="w-full text-center p-2 font-bold">
								{c.resultData[0].sub7gp}
							</div>
							<div className="bg-[#74BAF3] w-full text-center p-2 font-bold">
								{c.resultData[0].sub8gp}
							</div>
							<div className="w-full text-center p-2 font-bold">
								{c.resultData[0].sub9gp}
							</div>
						</div>
						<div className="tableRow flex flex-col items-center">
							<div className="bg-primaryColor w-max text-white p-3 font-bold">
								CR
							</div>
							<div className="w-full text-center p-2 font-bold">
								{c.resultData[0].sub1cr}
							</div>
							<div className="bg-[#74BAF3] w-full text-center p-2 font-bold">
								{c.resultData[0].sub2cr}
							</div>
							<div className="w-full text-center p-2 font-bold">
								{c.resultData[0].sub3cr}
							</div>
							<div className="bg-[#74BAF3] w-full text-center p-2 font-bold">
								{c.resultData[0].sub4cr}
							</div>
							<div className="w-full text-center p-2 font-bold">
								{c.resultData[0].sub5cr}
							</div>
							<div className="bg-[#74BAF3] w-full text-center p-2 font-bold">
								{c.resultData[0].sub6cr}
							</div>
							<div className="w-full text-center p-2 font-bold">
								{c.resultData[0].sub7cr}
							</div>
							<div className="bg-[#74BAF3] w-full text-center p-2 font-bold">
								{c.resultData[0].sub8cr}
							</div>
							<div className="w-full text-center p-2 font-bold">
								{c.resultData[0].sub9cr}
							</div>
						</div>
						<div className="tableRow flex flex-col items-center">
							<div className="bg-primaryColor w-max text-white p-3 rounded-tr-2xl font-bold">
								Date
							</div>
							<div className="w-full text-center p-2 font-bold">
								{c.resultData[0].sub1pdate}
							</div>
							<div className="bg-[#74BAF3] w-full text-center p-2 font-bold">
								{c.resultData[0].sub2pdate}
							</div>
							<div className="w-full text-center p-2 font-bold">
								{c.resultData[0].sub3pdate}
							</div>
							<div className="bg-[#74BAF3] w-full text-center p-2 font-bold">
								{c.resultData[0].sub4pdate}
							</div>
							<div className="w-full text-center p-2 font-bold">
								{c.resultData[0].sub5pdate}
							</div>
							<div className="bg-[#74BAF3] w-full text-center p-2 font-bold">
								{c.resultData[0].sub6pdate}
							</div>
							<div className="w-full text-center p-2 font-bold">
								{c.resultData[0].sub7pdate}
							</div>
							<div className="bg-[#74BAF3] w-full text-center p-2 font-bold">
								{c.resultData[0].sub8pdate}
							</div>
							<div className="w-full text-center p-2 font-bold">
								{c.resultData[0].sub9pdate}
							</div>
						</div>
					</div>
				</>
			))}
		</>
	);
}
