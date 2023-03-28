import banner from "/src/assets/banner.png";

function ExamHeader(props) {
	return (
		<header className="exam-header">
			<img
				className="exam-section-banner h-24 xl:h-52 w-screen"
				src={banner}
			></img>
			<div className="banner-name text-white text-base font-medium relative bottom-10 ml-6 md:bottom-12 md:ml-10 lg:ml-14 xl:ml-24 xl:bottom-24 xl:text-3xl">
				{props.bannerName}
			</div>
		</header>
	);
}

export default ExamHeader;
