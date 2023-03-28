import { useEffect, useState } from "react";
import { ListGroup } from "react-bootstrap";
import TabsComponent from "../../components/shared/Tabs";
import { getExamNotificationsData } from "../../config/services";
import './examSection.css';
import ExamHeader from "/src/components/examheader/examheader.jsx";
import NewIcon from '../../assets/icons/new.gif'

export default function Example() {
	let [data, setData] = useState({
		"Circulars": [],
		"TimeTables": [],
		"CourseRepetition": []
	});

	useEffect(() => {
		getExamNotificationsData().then(res => {
			setData({
				"Circulars": res.data[0].circulars,
				"TimeTables": res.data[0].timeTables,
				"CourseRepetition": res.data[0].courseRepitation
			})
		})
	}, [])


	return (
		<>
			<ExamHeader bannerName="Exam notifications" />
			<div className="flex flex-col justify-center items-center -mt-10">
				<div className="w-full max-w-md px-2 py-16 sm:px-0 md:w-max md:max-w-2xl lg:max-w-4xl exam-notif-tabs">
					{/* <Tab.Group>
						<Tab.List className="flex space-x-1 bg-gray-900/20">
							{Object.keys(categories).map((category) => (
								<Tab
									key={category}
									className={({ selected }) =>
										classNames(
											"w-full  py-3 m-0 font-bold lg:text-xl leading-5 border-r-2 border-white",
											"ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2",
											selected
												? "bg-primaryColor text-white shadow"
												: "text-black hover:bg-white/[0.12] hover:text-primaryColor"
										)
									}
								>
									{category}
								</Tab>
							))}
						</Tab.List>
						<Tab.Panels>
							{Object.values(categories).map((posts, idx) => (
								<Tab.Panel
									key={idx}
									className={classNames(
										"bg-white border-4 border-primaryColor  lg:w-max"
									)}
								>
									<div className="text-end mr-2 mt-2">published on:</div>
									<ul>
										{posts.map((post) => (
											<li
												key={post.id}
												className="relative pt-3 pl-3 pr-3 mb-2 hover:bg-blue-100 post flex flex-col"
											>
												<div className="post flex">
													<div className="post-desc flex flex-col mr-2">
														<div className="post-title text-primaryColor text-sm md:text-base xl:text-lg font-medium">
															{post.title}
														</div>
														<div className="post-extraInfo text-sm ml-1 font-normal leading-2 text-gray-600">
															Last date of Payment: {post.description}
														</div>
													</div>
													<div className="published w-max">
														<div className="bg-primaryColor p-1 text-white text-center font-bold">
															{new Date(post.date).getDate()}
														</div>
														<div className="bg-secondaryColor p-1 text-black text-sm font-semibold">
															{new Date(post.date).getMonth() + 1}-
															{new Date(post.date).getFullYear()}
														</div>
													</div>

													<a
														href={post.link}
														className={classNames(
															"absolute inset-0 rounded-md",
															"ring-blue-400 focus:z-10 focus:outline-none focus:ring-2"
														)}
													/>
												</div>
												<hr className="h-0.2 mt-2 w-90% bg-gray-400" />
											</li>
										))}
									</ul>
								</Tab.Panel>
							))}
						</Tab.Panels>
					</Tab.Group> */}
					<TabsComponent
						clsName={'flex-nowrap'}
						defaultKey={"Circulars"}
						tabsData={[
							{
								tabKey: "Circulars",
								tabTitle: "Circulars",
								tabView: (
									<ListGroup
										id="listgroup-scroll"
										style={{ height: "60vh", overflowY: "auto", overflowX:"hidden" }}
										as="ul"
									>
										{data.Circulars.map((circular, index) => (
											<ListGroup.Item
												key={index}
												as="li"
												className="d-flex justify-between"
											>
												<div className="my-auto mr-2">
													<a
														href={circular.link}
														className="link-primary-col"
													>
														{circular.title}
													</a>
													<p>{circular.description}</p>
												</div>
												<div className="my-auto text-nowrap">
													<div className="bg-primaryColor p-1 text-white text-center font-bold">
														{new Date(circular.date).getDate()}
													</div>
													<div className="bg-secondaryColor p-1 text-black text-center">
														{new Date(circular.date).getMonth() + 1}-
														{new Date(circular.date).getFullYear()}
													</div>
												</div>
											</ListGroup.Item>
										))}
									</ListGroup>
								),
							},
							{
								tabKey: "TimeTables",
								tabTitle: "Time Tables",
								tabView: (
									<ListGroup as="ul"
										style={{ height: "60vh", overflowY: "auto" }}
									>
										{data.TimeTables.map((timeTable, index) => (
											<ListGroup.Item
												key={index}
												as="li"
												className="d-flex"
											>
												<div className="my-auto text-nowrap">
													{!!timeTable.isNotifNew && <div className="mx-2 new-text-effect">
														<img src={NewIcon} alt="NEW" />
													</div>}
													<div className="mx-2 text-black text-center">
														{new Date(timeTable.date).toLocaleDateString()}
													</div>
												</div>
												<div className="my-auto mx-2">
													<a href={timeTable.link} className="link-primary-col flex">
														<span className="text-orange-400">{timeTable.title}</span> <p>{timeTable.description}</p>
													</a>
												</div>
											</ListGroup.Item>
										))}
									</ListGroup>
								),
							},
							{
								tabKey: "CourseRepetition",
								tabTitle: "Course Repetition",
								tabView: (
									<ListGroup as="ul">
										{data.CourseRepetition.map((cr, index) => (
											<ListGroup.Item
												key={index}
												as="li"
												className="d-flex justify-between"
											>
												<div className="my-auto mr-2">
													<a href={cr.link} className="link-primary-col">
														{cr.title}
													</a>
												</div>
											</ListGroup.Item>
										))}
									</ListGroup>
								),
							}
						]}
					/>
				</div>
			</div>
		</>
	);
}
