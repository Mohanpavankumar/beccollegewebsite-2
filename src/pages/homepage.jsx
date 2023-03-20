import Navbar from "/src/components/navbar/navbar";
import Gallery from "/src/components/homepage/gallery/gallery.jsx";
import principal from "/src/assets/homepage/principal.png";
import Courses from "/src/components/homepage/courses/courses";
import coursedata from "/src/Data/homepage/coursedata.js";
import gallerydata from "/src/Data/homepage/gallerydata.js";
import close from "/src/assets/homepage/close-btn.svg";
import { useState } from "react";
import { Tab } from "@headlessui/react";
import BecDetails from "/src/assets/BecDetails.jpg";
import culturalFest from "/src/assets/culturalFest.jpg";
import Devops from "/src/assets/Devops.jpg";
import robotics from "/src/assets/robotics.jpg";
import bectagon from "/src/assets/bectagon.jpg";

import EngineersDay from "/src/assets/EngineersDay.jpg";
import alumni1 from "/src/assets/homepage/placements/image 55.png";
import alumni2 from "/src/assets/homepage/placements/image 57.png";
import alumni3 from "/src/assets/homepage/placements/image 58.png";
import alumni4 from "/src/assets/homepage/placements/image 60.png";
import cmpy1 from "/src/assets/homepage/placements/Group 19.png";
import cmpy2 from "/src/assets/homepage/placements/Group 20.png";
import cmpy3 from "/src/assets/homepage/placements/Group 21.png";
import cmpy4 from "/src/assets/homepage/placements/Group 22.png";
import cmpy5 from "/src/assets/homepage/placements/Group 23.png";
import cmpy6 from "/src/assets/homepage/placements/Group 25.png";
import cmpy7 from "/src/assets/homepage/placements/Group 26.png";
import cmpy8 from "/src/assets/homepage/placements/image 40.png";
import cmpy9 from "/src/assets/homepage/placements/image 43.png";
import cmpy10 from "/src/assets/homepage/placements/image 45.png";
import cmpy11 from "/src/assets/homepage/placements/image 47.png";
import cmpy12 from "/src/assets/homepage/placements/image 48.png";
import cmpy13 from "/src/assets/homepage/placements/image 46.png";
import cmpy14 from "/src/assets/homepage/placements/image 51.png";
import { Link } from "react-router-dom";
function classNames(...classes) {
	return classes.filter(Boolean).join(" ");
}

export default function homepage() {
	let [categories] = useState({
		"Latest News": [
			{
				id: 1,
				title:
					"3/4 B.Tech: Supplementary Exam Fee Notice for 3/4 B.Tech (V & VI Sems) (R14 & R18 Regulations)",
			},
			{
				id: 2,
				title:
					"3/4 B.Tech: Supplementary Exam Fee Notice for 3/4 B.Tech (V & VI Sems) (R14 & R18 Regulations)",
			},
			{
				id: 3,
				title:
					"3/4 B.Tech: Supplementary Exam Fee Notice for 3/4 B.Tech (V & VI Sems) (R14 & R18 Regulations)",
			},
			{
				id: 4,
				title:
					"3/4 B.Tech: Supplementary Exam Fee Notice for 3/4 B.Tech (V & VI Sems) (R14 & R18 Regulations)",
			},
			{
				id: 5,
				title:
					"3/4 B.Tech: Supplementary Exam Fee Notice for 3/4 B.Tech (V & VI Sems) (R14 & R18 Regulations)",
			},
		],
		Notices: [
			{
				id: 1,
				title:
					"3/4 B.Tech: Supplementary Exam Fee Notice for 3/4 B.Tech (V & VI Sems) (R14 & R18 Regulations)",
				day: 29,
				year: "JUN,2022",
				lastdate: "12/07/2022",
			},
			{
				id: 2,
				title:
					"3/4 B.Tech: Supplementary Exam Fee Notice for 3/4 B.Tech (V & VI Sems) (R14 & R18 Regulations)",
				day: 29,
				year: "JUN,2022",
				lastdate: "12/07/2022",
			},
			{
				id: 3,
				title:
					"3/4 B.Tech: Supplementary Exam Fee Notice for 3/4 B.Tech (V & VI Sems) (R14 & R18 Regulations)",
				day: 29,
				year: "JUN,2022",
				lastdate: "12/07/2022",
			},
			{
				id: 4,
				title:
					"3/4 B.Tech: Supplementary Exam Fee Notice for 3/4 B.Tech (V & VI Sems) (R14 & R18 Regulations)",
				day: 29,
				year: "JUN,2022",
				lastdate: "12/07/2022",
			},
		],
	});
	// const [isclick, setisclick] = useState(false);
	// const closeimg=()=>{
	// 	setisclick(true);
	// }
	const Course = coursedata.map((item) => {
		return <Courses key={item.id} item={item} />;
	});
	const Galery = gallerydata.map((galleryarg) => {
		return <Gallery key={galleryarg.id} item={galleryarg} />;
	});

	return (
		<>
			<div className=" fixed z-50 right-0 transform -rotate-90 origin-bottom-right pb-1">
				<a
					href="_blank"
					className="font-bold text-xl cursor-pointer bg-primaryColor text-white hover:bg-black rounded-t-xl p-3"
				>
					<a href="http://becbapatla.ac.in/bectagon2023/" target="_blank">
						BECTAGON 2023
					</a>
				</a>
			</div>
			<div className="fixed z-50 bottom-0 left-0 right-0">
				<img
					// onClick={closeimg}
					src={close}
					className="h-5 w-5 cursor-pointer right fixed left-[98.5%] bottom-6"
				></img>
				<div className="bg-primaryColor  text-white">
					<marquee>
						This is a message which displays in the bottom of the screen and can
						be closed if not needed
					</marquee>
				</div>
			</div>
			<div
				id="default-carousel"
				className="relative mt-3"
				data-carousel="slide"
			>
				<div className="relative h-40 overflow-hidden md:h-96">
					<div className="hidden duration-700 ease-in-out" data-carousel-item>
						<span className="absolute text-2xl font-semibold text-white -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 sm:text-3xl dark:text-gray-800">
							First Slide
						</span>
						<img
							src={BecDetails}
							className="absolute lg:h-96 block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
							alt="..."
						/>
					</div>
					<div className="hidden duration-700 ease-in-out" data-carousel-item>
						<img
							src={Devops}
							className="absolute lg:h-96 block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
							alt="..."
						/>
					</div>
					<div className="hidden duration-700 ease-in-out" data-carousel-item>
						<img
							src={EngineersDay}
							className="absolute lg:h-96 block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
							alt="..."
						/>
					</div>
					<div className="hidden duration-700 ease-in-out" data-carousel-item>
						<img
							src={robotics}
							className="absolute block lg:h-96 w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
							alt="..."
						/>
					</div>
					<div className="hidden duration-700 ease-in-out" data-carousel-item>
						<img
							src={culturalFest}
							className="absolute lg:h-96 block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
							alt="..."
						/>
					</div>
					<div className="hidden duration-700 ease-in-out" data-carousel-item>
						<img
							src={bectagon}
							className="absolute lg:h-96 block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
							alt="..."
						/>
					</div>
				</div>
				<div className="absolute z-30 flex space-x-3 -translate-x-1/2 bottom-5 left-1/2">
					<button
						type="button"
						className="w-3 h-3 rounded-full"
						aria-current="false"
						aria-label="Slide 1"
						data-carousel-slide-to="0"
					></button>
					<button
						type="button"
						className="w-3 h-3 rounded-full"
						aria-current="false"
						aria-label="Slide 2"
						data-carousel-slide-to="1"
					></button>
					<button
						type="button"
						className="w-3 h-3 rounded-full"
						aria-current="false"
						aria-label="Slide 3"
						data-carousel-slide-to="2"
					></button>
					<button
						type="button"
						className="w-3 h-3 rounded-full"
						aria-current="false"
						aria-label="Slide 4"
						data-carousel-slide-to="3"
					></button>
					<button
						type="button"
						className="w-3 h-3 rounded-full"
						aria-current="false"
						aria-label="Slide 5"
						data-carousel-slide-to="4"
					></button>
					<button
						type="button"
						className="w-3 h-3 rounded-full"
						aria-current="false"
						aria-label="Slide 6"
						data-carousel-slide-to="5"
					></button>
				</div>
				<button
					type="button"
					className="absolute top-0 left-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
					data-carousel-prev
				>
					<span className="inline-flex items-center justify-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-black dark:group-focus:ring-gray-800/70 group-focus:outline-none">
						<svg
							aria-hidden="true"
							className="w-5 h-5 text-white sm:w-6 sm:h-6 dark:text-gray-800"
							fill="none"
							stroke="currentColor"
							viewBox="0 0 24 24"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
								d="M15 19l-7-7 7-7"
							></path>
						</svg>
						<span className="sr-only">Previous</span>
					</span>
				</button>
				<button
					type="button"
					className="absolute top-0 right-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
					data-carousel-next
				>
					<span className="inline-flex items-center justify-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-black dark:group-focus:ring-gray-800/70 group-focus:outline-none">
						<svg
							aria-hidden="true"
							className="w-5 h-5 text-white sm:w-6 sm:h-6 dark:text-gray-800"
							fill="none"
							stroke="currentColor"
							viewBox="0 0 24 24"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
								d="M9 5l7 7-7 7"
							></path>
						</svg>
						<span className="sr-only">Next</span>
					</span>
				</button>
			</div>

			<div className="flex flex-row justify-evenly">
				<div>
					<div className="text-center rounded-full border-primaryColor border-8  h-[130px] w-[130px] ">
						<div className="text-white count counter-value text-xl bg-primaryColor p-4 rounded-t-full droppp font-bold">
							80
						</div>
						<h3 className=" font-semibold text-base text-primaryColor">
							Ph.D Faculty
						</h3>
					</div>
				</div>
				<div>
					<div className="text-center rounded-full border-primaryColor border-8  h-[130px] w-[130px]">
						<div className="text-white counter-value text-xl bg-primaryColor p-4 rounded-t-full droppp font-bold">
							100
						</div>
						<h3 className=" font-semibold text-base text-primaryColor">
							Publications
						</h3>
					</div>
				</div>
				<div>
					<div className="text-center rounded-full border-primaryColor border-8  h-[130px] w-[130px]">
						<div className="text-white counter-value text-xl bg-primaryColor p-4 rounded-t-full droppp font-bold">
							200
						</div>
						<h3 className=" font-semibold text-base text-primaryColor">
							R&D Projects
						</h3>
					</div>
				</div>
				<div>
					<div className="text-center rounded-full border-primaryColor border-8  h-[130px] w-[130px]">
						<div className="text-white counter-value text-xl bg-primaryColor p-4 rounded-t-full droppp font-bold">
							182
						</div>
						<h3 className=" font-semibold text-base text-primaryColor">
							IPR's
						</h3>
					</div>
				</div>
			</div>

			<div>
				<p className="flex justify-center text-2xl font-semibold xl:text-4xl">
					Welcome to Bapatla Engineering College
				</p>
				<div className="flex flex-col xl:flex-row xl:m-16 xl:mt-8">
					<div className=" justify-center  m-7 mb-0 text-justify  xl:w-full xl:mr-8 xl:mt-12 xl:text-xl">
						The <b>Bapatla Engineering College(Autonomous)</b>, one of the seven
						educational institutions sponsored by the Bapatla Education Society,
						was established in 1981 with a vision to impart quality technical
						education and is affiliated to <b>Acharya Nagarjuna University</b>.
						The College is a little away from the din and bustle of Bapatla, a
						town with a historic and hoary past, about 75 Km. south of
						Vijayawada on Chennai-Vijayawada rail route. The college offers
						B.Tech. Programmes in 8 branches of Engineering- Civil, Computer
						Science, Electronics and Communications, Electrical and Electronics,
						Mechanical Engineering which are thrice NBA accredited, Electronics
						and Instrumentation, Chemical Engineering which are accredited twice
						and Information Technology which is accredited once.
						<a
							href="#"
							className="text-primaryColor mt-7 xl:mt-40 float-right underline "
						>
							view more
						</a>
					</div>
					<div className="m-5 xl:ml-8 xl:mt-1 xl:w-full xl:text-xl">
						<p className="text-primaryColor font-bold text-2xl">
							Principal's Message
						</p>
						<div className="w-16 h-1 bg-primaryColor rounded"></div>
						<img src={principal} className="ml-14 m-4"></img>
						<p className="text-justify">
							Lorem ipsum dolor sit amet, consectetur adipiscing elit. Faucibus
							volutpat nisl pharetra, ipsum purus. Et tincidunt sed aliquam
							penatibus gravida pharetra risus. Vitae sit erat leo id amet. Amet
							nulla quisque suspendisse nulla ac suspendisse bibendum massa sit.
							<br />
							<b>
								Dr. Nazeer Shaik , M.Tech; Ph.D
								<br />
								Principal
							</b>
						</p>
					</div>
				</div>
			</div>
			<div className=" flex flex-col justify-center items-center bg-hero-pattern ">
				<div className="w-4/5 xl:w-3/6 mt-24">
					<fieldset className=" p-5  text-justify border-2 border-primaryColor rounded-md">
						<legend className=" text-primaryColor text-xl xl:text-2xl font-medium">
							Vision
						</legend>
						<p className="font-medium xl:text-lg">
							To build centers of excellence, impart high quality education and
							instill high standards of ethics and professionalism through
							strategic efforts of our dedicated staff, which allows the college
							to effectively adapt to the ever changing aspects of education.
							<br />
							<br />
							To empower the faculty and students with the knowledge, skills and
							innovative thinking to facilitate discovery in numerous existing
							and yet to be discovered fields of engineering, technology and
							interdisciplinary endeavors.
						</p>
					</fieldset>
				</div>
				<div className="w-4/5 xl:w-3/6">
					<fieldset className=" p-5  mt-5 text-justify border-2 border-primaryColor rounded-md mb-24">
						<legend className=" text-primaryColor text-xl xl:text-2xl font-medium">
							Mission
						</legend>
						<p className="font-medium xl:text-lg">
							Our Mission is to impart the quality education at par with global
							standards to the students from all over India and in particular
							those from the local and rural areas.
							<br />
							<br />
							We continuously try to maintain high standards so as to make them
							technologically competent and ethically strong individuals who
							shall be able to improve the quality of life and economy of our
							country.
						</p>
					</fieldset>
				</div>
			</div>
			<div className="flex">
				<div className="w-1/2 bg-placementsbg">
					<div className="font-bold  text-3xl text-primaryColor text-center pt-10">
						Impeccable Placements
					</div>
					<div className="text-2xl m-14 mt-5 mb-0 font-semibold">
						1100+ Job offers in 2021-22
						<br />
						850+ Job offers in 2020-21
						<br />
						All of these offers are from 50+ MNC companies <br />
					</div>
					<div className="ml-24 text-lg m-2">
						We continuously strive towards facilitating campus-drives where
						eminent companies offer the most worth-while career opportunities.
					</div>
					<marquee>
						<div className="flex w-1/2 mt-16">
							<img className="w-40  h-24 pr-4 pb-4" src={cmpy1}></img>
							<img className="w-40  h-24 pr-4 pb-4" src={cmpy2}></img>
							<img className="w-40  h-24 pr-4 pb-4" src={cmpy3}></img>
							<img className="w-40  h-24 pr-4 pb-4" src={cmpy4}></img>
							<img className="w-40  h-24 pr-4 pb-4" src={cmpy5}></img>
							<img className="w-40  h-24 pr-4 pb-4" src={cmpy6}></img>
							{/* <img className="w-40  h-24 pr-4 pb-4" src={cmpy7}></img> */}
						</div>
					</marquee>
					<marquee>
						<div className="flex w-1/2 mb-10">
							<img className="w-40  h-24 pr-4 pb-4" src={cmpy8}></img>
							<img className="w-40  h-24 pr-4 pb-4" src={cmpy9}></img>
							<img className="w-40  h-24 pr-4 pb-4" src={cmpy10}></img>
							<img className="w-40  h-24 pr-4 pb-4" src={cmpy11}></img>
							<img className="w-40  h-24 pr-4 pb-4" src={cmpy12}></img>
							<img className="w-40  h-24 pr-4 pb-4" src={cmpy13}></img>
							{/* <img className="w-40  h-24 pr-4 pb-4" src={cmpy14}></img> */}
						</div>
					</marquee>
				</div>

				<div className="w-1/2 ">
					<div className="text-primaryColor text-3xl pt-10 text-center font-bold ">
						Distinguished ALumini
					</div>
					<div className="mt-10 ">
						<div>
							<div className="flex">
								<div className="flex w-1/2">
									<div className="flex flex-col bg-alumnibg justify-around text-center w-1/2">
										<div>Sudhakar Reddy E</div>
										<div>Principle software engineering manager</div>
										<div>Microsoft</div>
									</div>

									<div>
										<div className=" z-50 absolute mt-20 "></div>
										<img
											className="h-48 w-48 object-fill relative"
											src={alumni1}
										/>
									</div>
								</div>
								<div className="flex w-1/2">
									<div className="flex flex-col justify-around text-center w-1/2">
										<div>Sudhakar Reddy E</div>
										<div>Principle software engineering manager</div>
										<div>Microsoft</div>
									</div>
									<div>
										<div className=" z-50 absolute mt-20"></div>
										<img
											className="h-48 w-48 object-fill relative"
											src={alumni2}
										></img>
									</div>
								</div>
							</div>
						</div>
						<div className="flex">
							<div className="flex w-1/2">
								<div>
									<div className=" z-50 absolute mt-20"></div>
									<img
										className="h-48 w-48 object-fill relative"
										src={alumni3}
									></img>
								</div>

								<div className="flex flex-col justify-around text-center w-1/2">
									<div>Sudhakar Reddy E</div>
									<div>Principle software engineering manager</div>
									<div>Microsoft</div>
								</div>
							</div>
							<div className="flex w-1/2">
								<div>
									<div className=" z-50 absolute mt-20"></div>
									<img
										className="h-48 w-48 object-fill relative"
										src={alumni4}
									></img>
								</div>
								<div className="flex flex-col bg-alumnibg justify-around text-center w-1/2">
									<div>Sudhakar Reddy E</div>
									<div>Principle software engineering manager</div>
									<div>Microsoft</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>

			<div className="flex flex-col justify-center items-center -mt-10">
				<div className="w-full max-w-md px-2 py-16 sm:px-0 md:w-max md:max-w-2xl lg:max-w-4xl">
					<Tab.Group>
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
															Published on : {post.lastdate}
														</div>
													</div>
													{post.day && (
														<div className="published w-max">
															<div className="bg-primaryColor p-1 text-white text-center font-bold">
																{post.day}
															</div>
															<div className="bg-secondaryColor p-1 text-black text-sm font-semibold">
																{post.year}
															</div>
														</div>
													)}

													<a
														href="#"
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
					</Tab.Group>
				</div>
			</div>
			<div className="bg-courses">
				<div className="text-primaryColor text-xl ml-5 xl:ml-20 xl:text-3xl">
					<b>COURSES OFFERED</b>
				</div>
				<p className=" ml-8  xl:ml-36 mt-2 xl:text-xl">
					The Bapatla Engineering College offers Diploma, undergraduate,and
					postgraduate programmes in Engineering.
				</p>
				<div className="flex flex-wrap justify-center">{Course}</div>
			</div>
			<div>
				<div className="flex flex-col">
					<p className="flex justify-center  font-semibold text-4xl text-primaryColor">
						Gallery
					</p>
					<div className="flex flex-wrap justify-center">{Galery}</div>
					<a className="text-primaryColor mt-2 mr-10 text-lg text-right underline ">
						view more
					</a>
				</div>
			</div>
		</>
	);
}
