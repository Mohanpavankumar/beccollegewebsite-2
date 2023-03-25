import React from "react";
import Gallery from "/src/components/homepage/gallery/gallery.jsx";
import principal from "/src/assets/homepage/principal.png";
import Courses from "/src/components/homepage/courses/courses";
import coursedata from "/src/Data/homepage/coursedata.js";
import gallerydata from "/src/Data/homepage/gallerydata.js";
import close from "/src/assets/homepage/close-btn.svg";
import { useEffect, useState } from "react";
import BecDetails from "/src/assets/BecDetails.jpg";
import culturalFest from "/src/assets/culturalFest.jpg";
import Devops from "/src/assets/Devops.jpg";
import robotics from "/src/assets/robotics.jpg";
import bectagon from "/src/assets/bectagon.jpg";
import EngineersDay from "/src/assets/EngineersDay.jpg";
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
import { DisplayAlumini } from "../components/homepage/alumini/display-alumini";
import { getLandingPageData } from "../config/services";
import TabsComponent from "../components/shared/Tabs";
import { ListGroup } from "react-bootstrap";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
import Marquee from "react-fast-marquee";
function classNames(...classes) {
	return classes.filter(Boolean).join(" ");
}
const Course = coursedata.map((item) => {
	return <Courses key={item.id} item={item} />;
});
const Galery = gallerydata.map((galleryarg) => {
	return <Gallery key={galleryarg.id} item={galleryarg} />;
});
export default function HomePage() {
	const [data, setData] = useState([]);
	const [showResults, setshowResults] = useState(true);
	const getData = () => {
		getLandingPageData()
			.then((res) => setData(res.data))
			.catch((err) => console.log("something went wrong", err));
	};
	const theme = useTheme();
	const isMobile = useMediaQuery(theme.breakpoints.down("md"));
	useEffect(() => {
		getData();
	}, []);
	return (
		<>
			{data.map((c) => (
				<>
					<div className=" fixed z-50 right-0 transform -rotate-90 origin-bottom-right ">
						<a
							href="_blank"
							className="font-bold text-sm md:text-2xl p-2 md:p-5 cursor-pointer bg-primaryColor text-white hover:bg-black rounded-t-md md:rounded-t-xl"
						>
							<a href="http://becbapatla.ac.in/bectagon2023/" target="_blank">
								BECTAGON 2023
							</a>
						</a>
					</div>

					{showResults && (
						<div className="fixed z-50 bottom-0 left-0 right-0">
							<img
								onClick={() => setshowResults(false)}
								src={close}
								className="h-5 w-5 cursor-pointer right fixed left-[98.5%] bottom-6"
							/>

							<div className="bg-primaryColor  text-white">
								<marquee>
									This is a message which displays in the bottom of the screen
									and can be closed if not needed
								</marquee>
							</div>
						</div>
					)}

					<div
						id="default-carousel"
						className="relative mt-3"
						data-carousel="slide"
					>
						<div className="relative h-40 overflow-hidden md:h-96">
							<div
								className="hidden duration-700 ease-in-out"
								data-carousel-item
							>
								<span className="absolute text-2xl font-semibold text-white -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 sm:text-3xl dark:text-gray-800">
									First Slide
								</span>
								<img
									src={BecDetails}
									className="absolute lg:h-96 block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
									alt="..."
								/>
							</div>
							<div
								className="hidden duration-700 ease-in-out"
								data-carousel-item
							>
								<img
									src={Devops}
									className="absolute lg:h-96 block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
									alt="..."
								/>
							</div>
							<div
								className="hidden duration-700 ease-in-out"
								data-carousel-item
							>
								<img
									src={EngineersDay}
									className="absolute lg:h-96 block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
									alt="..."
								/>
							</div>
							<div
								className="hidden duration-700 ease-in-out"
								data-carousel-item
							>
								<img
									src={robotics}
									className="absolute block lg:h-96 w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
									alt="..."
								/>
							</div>
							<div
								className="hidden duration-700 ease-in-out"
								data-carousel-item
							>
								<img
									src={culturalFest}
									className="absolute lg:h-96 block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
									alt="..."
								/>
							</div>
							<div
								className="hidden duration-700 ease-in-out"
								data-carousel-item
							>
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

					<div className="mt-10 flex flex-col md:flex-row ">
						{c.collegeStatistics.map((statistics) => (
							<div className="text-center mx-auto my-1   rounded-full border-primaryColor border-8 h-[110px] w-[110px] md:h-[130px] md:w-[130px]">
								<div className="text-white counter-value text-sm md:text-xl bg-primaryColor p-3 md:p-4 rounded-t-full droppp font-bold">
									{statistics.number}
								</div>
								<h3 className=" font-semibold text-sm md:text-base text-primaryColor">
									{statistics.title}
								</h3>
							</div>
						))}
					</div>

					<div>
						<p className="flex justify-center text-2xl font-semibold xl:text-4xl">
							Welcome to Bapatla Engineering College
						</p>
						<div className="flex flex-col md:flex-row xl:m-16 xl:mt-8">
							<div className=" justify-center m-7 mb-0 text-justify  xl:w-full xl:mr-8 xl:mt-12 xl:text-xl">
								The <b>Bapatla Engineering College(Autonomous)</b>, one of the
								seven educational institutions sponsored by the Bapatla
								Education Society, was established in 1981 with a vision to
								impart quality technical education and is affiliated to{" "}
								<b>Acharya Nagarjuna University</b>. The College is a little
								away from the din and bustle of Bapatla, a town with a historic
								and hoary past, about 75 Km. south of Vijayawada on
								Chennai-Vijayawada rail route. The college offers B.Tech.
								Programmes in 8 branches of Engineering- Civil, Computer
								Science, Electronics and Communications, Electrical and
								Electronics, Mechanical Engineering which are thrice NBA
								accredited, Electronics and Instrumentation, Chemical
								Engineering which are accredited twice and Information
								Technology which is accredited once.
							</div>

							<div className="xl:ml-8 xl:mt-1 xl:w-full xl:text-xl mx-2">
								<p className="text-primaryColor font-bold text-2xl">
									Principal's Message
								</p>
								<div className="w-16 h-1 bg-primaryColor rounded"></div>
								<img src={principal} className="ml-14 m-4 w-60 h-60" />
								<p className="text-justify">{c.principal.message}</p>
								<br />
								<b>
									{c.principal.name} <br />
									Principal
								</b>
							</div>
						</div>
					</div>

					<div className="flex flex-col justify-center items-center mt-10">
						<div className="mx-auto news-events-tabs tabs-notices w-full max-w-md md:px-2 py-8F px-0 md:w-max md:max-w-2xl lg:max-w-4xl">
							<TabsComponent
								defaultKey={"latestNews"}
								tabsData={[
									{
										tabKey: "latestNews",
										tabTitle: "Latest News",
										tabView: (
											<ListGroup
												id="listgroup-scroll"
												style={{ height: "60vh", overflowY: "scroll" }}
												as="ul"
											>
												{c.latestNews.map((latestNews, index) => (
													<ListGroup.Item
														key={index}
														as="li"
														className="d-flex justify-between"
													>
														<div className="my-auto mr-2">
															<a
																href={latestNews.link}
																className="link-primary-col"
															>
																{latestNews.title}
															</a>
															<p>{latestNews.description}</p>
														</div>
														<div className="my-auto text-nowrap">
															<div className="bg-primaryColor p-1 text-white text-center font-bold">
																{new Date(latestNews.date).getDate()}
															</div>
															<div className="bg-secondaryColor p-1 text-black text-center">
																{new Date(latestNews.date).getMonth() + 1}-
																{new Date(latestNews.date).getFullYear()}
															</div>
														</div>
													</ListGroup.Item>
												))}
											</ListGroup>
										),
									},
									{
										tabKey: "events",
										tabTitle: "Events",
										tabView: (
											<ListGroup as="ul">
												{c.events.map((event, index) => (
													<ListGroup.Item
														key={index}
														as="li"
														className="d-flex justify-between"
													>
														<div className="my-auto mr-2">
															<a href={event.link} className="link-primary-col">
																{event.title}
															</a>
															<p>{event.description}</p>
														</div>
														<div className="my-auto text-nowrap">
															<div className="bg-primaryColor p-1 text-white text-center font-bold">
																{new Date(event.date).getDate()}
															</div>
															<div className="bg-secondaryColor p-1 text-black text-center">
																{new Date(event.date).getMonth() + 1}-
																{new Date(event.date).getFullYear()}
															</div>
														</div>
													</ListGroup.Item>
												))}
											</ListGroup>
										),
									},
								]}
							/>
						</div>
					</div>

					<div className="flex justify-between w-100 md:flex-row flex-col">
						<div className="md:w-1/2  bg-placementsbg">
							<div className="font-bold text-2xl  md:text-3xl text-primaryColor text-center pt-10">
								Impeccable Placements
							</div>
							<div className="text-lg md:text-2xl m-7 mt-3 md:m-14 md:mt-5 mb-0 font-semibold">
								1100+ Job offers in 2021-22
								<br />
								850+ Job offers in 2020-21
								<br />
								All of these offers are from 50+ MNC companies <br />
							</div>
							<div className="ml-24 text-base md:text-lg m-2">
								We continuously strive towards facilitating campus-drives where
								eminent companies offer the most worth-while career
								opportunities.
							</div>
							<Marquee gradientWidth={15} className="mt-8 md:mt-16">
								<div className="flex w-1/2">
									<img
										className=" w-20 h-12 pr-2 pb-2 md:w-40  md:h-24 md:pr-4 md:pb-4"
										src={cmpy1}
									></img>
									<img
										className="w-20 h-12 pr-2 pb-2 md:w-40  md:h-24 md:pr-4 md:pb-4"
										src={cmpy2}
									></img>
									<img
										className="w-20 h-12 pr-2 pb-2 md:w-40  md:h-24 md:pr-4 md:pb-4"
										src={cmpy3}
									></img>
									<img
										className="w-20 h-12 pr-2 pb-2 md:w-40  md:h-24 md:pr-4 md:pb-4"
										src={cmpy4}
									></img>
									<img
										className="w-20 h-12 pr-2 pb-2 md:w-40  md:h-24 md:pr-4 md:pb-4"
										src={cmpy5}
									></img>
									<img
										className="w-20 h-12 pr-2 pb-2 md:w-40  md:h-24 md:pr-4 md:pb-4"
										src={cmpy6}
									></img>
									<img
										className="w-20 h-12 pr-2 pb-2 md:w-40  md:h-24 md:pr-4 md:pb-4"
										src={cmpy7}
									></img>
								</div>
							</Marquee>
							<Marquee gradientWidth={30} className="w-1/2">
								<div className="flex w-1/2 ">
									<img
										className="w-20 h-12 pr-2 pb-2 md:w-40  md:h-24 md:pr-4 md:pb-4"
										src={cmpy8}
									></img>
									<img
										className="w-20 h-12 pr-2 pb-2 md:w-40  md:h-24 md:pr-4 md:pb-4"
										src={cmpy9}
									></img>
									<img
										className="w-20 h-12 pr-2 pb-2 md:w-40  md:h-24 md:pr-4 md:pb-4"
										src={cmpy10}
									></img>
									<img
										className="w-20 h-12 pr-2 pb-2 md:w-40  md:h-24 md:pr-4 md:pb-4"
										src={cmpy11}
									></img>
									<img
										className="w-20 h-12 pr-2 pb-2 md:w-40  md:h-24 md:pr-4 md:pb-4"
										src={cmpy12}
									></img>
									<img
										className="w-20 h-12 pr-2 pb-2 md:w-40  md:h-24 md:pr-4 md:pb-4"
										src={cmpy13}
									></img>
									<img
										className="w-20 h-12 pr-2 pb-2 md:w-40  md:h-24 md:pr-4 md:pb-4"
										src={cmpy14}
									></img>
								</div>
							</Marquee>
						</div>

						<div className="md:w-1/2">
							<div className="text-primaryColor text-2xl md:text-3xl pt-10 text-center font-bold ">
								Distinguished ALumini
							</div>
							<div className="mt-5 ">
								<DisplayAlumini isMobile={isMobile} />
							</div>
						</div>
					</div>

					<div className=" flex flex-col justify-center items-center bg-hero-pattern ">
						<div className="w-4/5 xl:w-3/6 mt-14">
							<fieldset className="scheduler-border p-3 border border-primary rounded-md text-justify">
								<legend className="scheduler-border text-primaryColor text-xl xl:text-2xl font-medium">
									Vision
								</legend>
								<label>
									<p className="font-medium xl:text-lg">
										To build centers of excellence, impart high quality
										education and instill high standards of ethics and
										professionalism through strategic efforts of our dedicated
										staff, which allows the college to effectively adapt to the
										ever changing aspects of education.
										<br />
										<br />
										To empower the faculty and students with the knowledge,
										skills and innovative thinking to facilitate discovery in
										numerous existing and yet to be discovered fields of
										engineering, technology and interdisciplinary endeavors.
									</p>
								</label>
							</fieldset>
						</div>
						<div className="w-4/5 xl:w-3/6 mt-14 mb-14">
							<fieldset className="scheduler-border p-3 border border-primary rounded-md text-justify">
								<legend className="scheduler-border text-primaryColor text-xl xl:text-2xl font-medium">
									Mission
								</legend>
								<label>
									<p className="font-medium xl:text-lg">
										Our Mission is to impart the quality education at par with
										global standards to the students from all over India and in
										particular those from the local and rural areas.
										<br />
										<br />
										We continuously try to maintain high standards so as to make
										them technologically competent and ethically strong
										individuals who shall be able to improve the quality of life
										and economy of our country.
									</p>
								</label>
							</fieldset>
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

					<div className="flex flex-col">
						<p className="flex justify-center  font-semibold text-4xl text-primaryColor">
							Gallery
						</p>
						<div className="flex flex-wrap justify-center">{Galery}</div>
						<Link
							className="text-primaryColor cursor-pointer mt-2 mr-10 text-lg
					text-right underline "
							to={"/Imggallery"}
						>
							viewmore
						</Link>
					</div>
				</>
			))}
		</>
	);
}
	